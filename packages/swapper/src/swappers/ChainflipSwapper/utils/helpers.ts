import {
  arbitrumAssetId,
  type AssetId,
  avalancheAssetId,
  baseAssetId,
  bscAssetId,
  type ChainId,
  ethAssetId,
  fromAssetId,
  gnosisAssetId,
  optimismAssetId,
  polygonAssetId,
} from '@shapeshiftoss/caip'
import { KnownChainIds } from '@shapeshiftoss/types'

import type { ChainflipSupportedChainId } from '../constants'
import {
  assetGasLimits,
  ChainflipSupportedAssetIdsByChainId,
  ChainflipSupportedChainIds,
} from '../constants'

export const isSupportedChainId = (chainId: ChainId): chainId is ChainflipSupportedChainId => {
  return ChainflipSupportedChainIds.includes(chainId as ChainflipSupportedChainId)
}

export const isSupportedAssetId = (
  chainId: ChainId,
  assetId: AssetId,
): chainId is ChainflipSupportedChainId => {
  return ChainflipSupportedAssetIdsByChainId[chainId as ChainflipSupportedChainId]!.includes(
    assetId,
  )
}

export const getGasLimit = (chainflipAsset: string) => {
  return chainflipAsset in assetGasLimits ? assetGasLimits[chainflipAsset]! : '100000'
}

export const isNativeEvmAsset = (assetId: AssetId): boolean => {
  const { chainId } = fromAssetId(assetId)
  switch (chainId) {
    case KnownChainIds.EthereumMainnet:
      return assetId === ethAssetId
    case KnownChainIds.AvalancheMainnet:
      return assetId === avalancheAssetId
    case KnownChainIds.OptimismMainnet:
      return assetId === optimismAssetId
    case KnownChainIds.BnbSmartChainMainnet:
      return assetId === bscAssetId
    case KnownChainIds.PolygonMainnet:
      return assetId === polygonAssetId
    case KnownChainIds.GnosisMainnet:
      return assetId === gnosisAssetId
    case KnownChainIds.ArbitrumMainnet:
      return assetId === arbitrumAssetId
    case KnownChainIds.BaseMainnet:
      return assetId === baseAssetId
    default:
      return false
  }
}
