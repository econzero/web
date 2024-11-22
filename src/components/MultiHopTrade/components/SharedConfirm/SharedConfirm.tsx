import { Card, CardBody, CardHeader, Heading } from '@chakra-ui/react'
import { useCallback, useEffect, useMemo } from 'react'
import { useHistory } from 'react-router'
import { TradeSlideTransition } from 'components/MultiHopTrade/TradeSlideTransition'
import { TradeRoutePaths } from 'components/MultiHopTrade/types'
import { Text } from 'components/Text'
import {
  selectActiveQuote,
  selectConfirmedTradeExecutionState,
} from 'state/slices/tradeQuoteSlice/selectors'
import { tradeQuoteSlice } from 'state/slices/tradeQuoteSlice/tradeQuoteSlice'
import { TradeExecutionState } from 'state/slices/tradeQuoteSlice/types'
import { useAppDispatch, useAppSelector } from 'state/store'

import { WithBackButton } from '../WithBackButton'
import { SharedConfirmFooter } from './SharedConfirmFooter'

const cardBorderRadius = { base: 'xl' }

type SharedConfirmProps = {
  ConfirmDetailTable: React.ReactNode | null
  FooterButton: React.ReactNode
  isLoading: boolean
}

export const SharedConfirm = ({
  ConfirmDetailTable,
  FooterButton,
  isLoading,
}: SharedConfirmProps) => {
  const dispatch = useAppDispatch()
  //   const translate = useTranslate()
  const history = useHistory()

  const confirmedTradeExecutionState = useAppSelector(selectConfirmedTradeExecutionState)
  const activeQuote = useAppSelector(selectActiveQuote)

  const isTradeComplete = useMemo(
    () => confirmedTradeExecutionState === TradeExecutionState.TradeComplete,
    [confirmedTradeExecutionState],
  )

  useEffect(() => {
    if (isLoading || !activeQuote) return

    dispatch(tradeQuoteSlice.actions.setTradeInitialized(activeQuote.id))
  }, [dispatch, isLoading, activeQuote])

  const handleBack = useCallback(() => {
    if (isTradeComplete) {
      dispatch(tradeQuoteSlice.actions.clear())
    }

    history.push(TradeRoutePaths.Input)
  }, [dispatch, history, isTradeComplete])

  if (!confirmedTradeExecutionState) return null

  return (
    <TradeSlideTransition>
      {/* TODO: Add WarningAcknowledgement */}
      <Card
        flex={1}
        borderRadius={cardBorderRadius}
        width='full'
        variant='dashboard'
        maxWidth='500px'
      >
        <CardHeader px={6} pt={4}>
          <WithBackButton onBack={handleBack}>
            <Heading textAlign='center' fontSize='md'>
              <Text
                translation={
                  [TradeExecutionState.Initializing, TradeExecutionState.Previewing].includes(
                    confirmedTradeExecutionState,
                  )
                    ? 'trade.confirmDetails'
                    : 'trade.trade'
                }
              />
            </Heading>
          </WithBackButton>
        </CardHeader>
        <CardBody py={0} px={0}>
          gm
        </CardBody>
        <SharedConfirmFooter ConfirmDetailTable={ConfirmDetailTable} FooterButton={FooterButton} />
      </Card>
    </TradeSlideTransition>
    // TODO: Add FeeModal
  )
}