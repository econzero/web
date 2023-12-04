import type { AccountId } from '@shapeshiftoss/caip'
import { type AssetId, bchChainId, fromAccountId, fromAssetId } from '@shapeshiftoss/caip'
import type { UtxoBaseAdapter, UtxoChainId } from '@shapeshiftoss/chain-adapters'
import type { HDWallet } from '@shapeshiftoss/hdwallet-core'
import { TxStatus } from '@shapeshiftoss/unchained-client'
import axios from 'axios'
import { getConfig } from 'config'
import memoize from 'lodash/memoize'
import { getChainAdapterManager } from 'context/PluginProvider/chainAdapterSingleton'
import type { Asset } from 'lib/asset-service'
import type { BigNumber, BN } from 'lib/bignumber/bignumber'
import { bn, bnOrZero } from 'lib/bignumber/bignumber'
import { poll } from 'lib/poll/poll'
import type {
  MidgardActionsResponse,
  ThornodePoolResponse,
  ThornodeStatusResponse,
} from 'lib/swapper/swappers/ThorchainSwapper/types'
import { thorService } from 'lib/swapper/swappers/ThorchainSwapper/utils/thorService'
import type { getThorchainSaversPosition } from 'state/slices/opportunitiesSlice/resolvers/thorchainsavers/utils'
import type { AccountMetadata } from 'state/slices/portfolioSlice/portfolioSliceCommon'
import { isUtxoAccountId, isUtxoChainId } from 'state/slices/portfolioSlice/utils'

import { THOR_PRECISION } from './constants'
import type { getThorchainLendingPosition } from './lending'

const getThorchainTransactionStatus = async (txHash: string, skipOutbound?: boolean) => {
  const thorTxHash = txHash.replace(/^0x/, '')
  const { data: thorTxData, status } = await axios.get<ThornodeStatusResponse>(
    `${getConfig().REACT_APP_THORCHAIN_NODE_URL}/lcd/thorchain/tx/status/${thorTxHash}`,
    // We don't want to throw on 404s, we're parsing these ourselves
    { validateStatus: () => true },
  )

  if ('error' in thorTxData || status === 404) return TxStatus.Unknown

  // Tx hasn't been observed yet
  if (thorTxData.stages.inbound_observed?.completed === false) return TxStatus.Pending

  // Tx has been observed, but swap/outbound Tx hasn't been completed yet
  if (
    thorTxData.stages.inbound_finalised?.completed === false ||
    thorTxData.stages.swap_status?.pending === true ||
    (!skipOutbound && thorTxData.stages.outbound_signed?.completed === false)
  ) {
    return TxStatus.Pending
  }
  // When skipping outbound checks, if the swap is complete, we assume the transaction itself is confirmed
  if (skipOutbound && thorTxData.stages.swap_status?.pending === false) return TxStatus.Confirmed

  if (thorTxData.stages.swap_status?.pending) return TxStatus.Pending

  // Introspect midgard to detect failures/success states when enforcing outbound checks
  const midgardUrl = getConfig().REACT_APP_MIDGARD_URL
  const maybeResult = await thorService.get<MidgardActionsResponse>(
    `${midgardUrl}/actions?txid=${thorTxHash}`,
  )

  // We shouldn't end up here unless midgard is down - if it is, we can't determine the status of the transaction
  if (maybeResult.isErr()) {
    return TxStatus.Unknown
  }
  const { data: result } = maybeResult.unwrap()

  // This may be failed refund or a refund - either way, the THOR Tx is effectively "failed" from a user standpoint
  // even though the inner swap may have succeeded
  if (result.actions.some(action => action.type === 'refund')) return TxStatus.Failed

  // All checks passed, but we still need to ensure there's an outbound Txid
  return result.actions.some(
    action =>
      action.type === 'withdraw' && action.status === 'success' && action.out.some(tx => tx.txID),
  )
    ? TxStatus.Confirmed
    : TxStatus.Pending
}

export const waitForThorchainUpdate = ({
  txId,
  skipOutbound,
}: {
  txId: string
  skipOutbound?: boolean
}) =>
  poll({
    fn: () => getThorchainTransactionStatus(txId, skipOutbound),
    validate: status => [TxStatus.Confirmed, TxStatus.Failed].includes(status),
    interval: 60000,
    maxAttempts: 60,
  })

export const fromThorBaseUnit = (valueThorBaseUnit: BigNumber.Value | null | undefined): BN =>
  bnOrZero(valueThorBaseUnit).div(bn(10).pow(THOR_PRECISION)) // to crypto precision from THOR 8 dp base unit

export const toThorBaseUnit = ({
  valueCryptoBaseUnit,
  asset,
}: {
  valueCryptoBaseUnit: BigNumber.Value | null | undefined
  asset: Asset
}): BN => {
  if (!asset?.precision) return bn(0)

  return bnOrZero(valueCryptoBaseUnit)
    .div(bn(10).pow(asset?.precision)) // to crypto precision from THOR 8 dp base unit
    .times(bn(10).pow(THOR_PRECISION))
    .decimalPlaces(0) // THORChain expects ints, not floats
}

export const getThorchainFromAddress = async ({
  accountId,
  assetId,
  getPosition,
  accountMetadata,
  wallet,
}: {
  accountId: AccountId
  assetId: AssetId
  getPosition: typeof getThorchainLendingPosition | typeof getThorchainSaversPosition
  accountMetadata: AccountMetadata
  wallet: HDWallet
}): Promise<string> => {
  const { chainId } = fromAssetId(assetId)
  if (!isUtxoChainId(chainId)) return Promise.resolve(fromAccountId(accountId).account)

  try {
    const position = await getPosition({
      accountId,
      assetId,
    })
    if (!position) throw new Error(`No position found for assetId: ${assetId}`)
    const address: string = (() => {
      // THORChain lending position
      if ('owner' in position) return position.owner
      // THORChain savers position
      if ('asset_address' in position) return position.asset_address
      // For type completeness - if we have a response, we *should* either have an `owner` or `asset_address` property
      return ''
    })()
    return chainId === bchChainId ? `bitcoincash:${address}` : address
  } catch {
    const accountType = accountMetadata?.accountType
    const bip44Params = accountMetadata?.bip44Params

    const chainAdapter = getChainAdapterManager().get(chainId)!

    const firstReceiveAddress = await chainAdapter.getAddress({
      wallet,
      accountNumber: bip44Params.accountNumber,
      accountType,
      index: 0,
    })
    return firstReceiveAddress
  }
}

const getAccountAddressesWithBalances = async (
  accountId: AccountId,
): Promise<{ address: string; balance: string }[]> => {
  if (isUtxoAccountId(accountId)) {
    const { chainId, account: pubkey } = fromAccountId(accountId)
    const chainAdapters = getChainAdapterManager()
    const adapter = chainAdapters.get(chainId) as unknown as UtxoBaseAdapter<UtxoChainId>
    if (!adapter) throw new Error(`no adapter for ${chainId} not available`)

    const {
      chainSpecific: { addresses },
    } = await adapter.getAccount(pubkey)

    if (!addresses) return []

    return addresses.map(({ pubkey, balance }) => {
      const address = pubkey.startsWith('bitcoincash') ? pubkey.replace('bitcoincash:', '') : pubkey

      return { address, balance }
    })
  }

  // We don't need balances for chain others than UTXOs
  return [{ address: fromAccountId(accountId).account, balance: '' }]
}

// Memoized on accountId, see lodash docs:
// "By default, the first argument provided to the memoized function is used as the map cache key."
export const getAccountAddresses = memoize(
  async (accountId: AccountId): Promise<string[]> =>
    (await getAccountAddressesWithBalances(accountId)).map(({ address }) => address),
)

export const getThorchainAvailablePools = async () => {
  const daemonUrl = getConfig().REACT_APP_THORCHAIN_NODE_URL
  const poolResponse = await thorService.get<ThornodePoolResponse[]>(
    `${daemonUrl}/lcd/thorchain/pools`,
  )
  if (poolResponse.isOk()) {
    const allPools = poolResponse.unwrap().data
    const availablePools = allPools.filter(pool => pool.status === 'Available')
    return availablePools
  }

  return []
}