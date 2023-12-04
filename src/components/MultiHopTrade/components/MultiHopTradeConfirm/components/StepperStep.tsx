import type { SystemStyleObject } from '@chakra-ui/react'
import {
  Box,
  SkeletonCircle,
  SkeletonText,
  Spacer,
  Step,
  StepDescription,
  StepIndicator,
  StepSeparator,
  StepTitle,
  useStyleConfig,
} from '@chakra-ui/react'

const width = { width: '100%' }

export type StepperStepProps = {
  title: string
  description?: string | JSX.Element
  stepIndicator: JSX.Element
  content?: JSX.Element
  isLastStep?: boolean
  isLoading?: boolean
  isError?: boolean
}

export const StepperStep = ({
  title,
  stepIndicator,
  description,
  content,
  isLastStep,
  isLoading,
  isError,
}: StepperStepProps) => {
  const { indicator: styles } = useStyleConfig('Stepper', {
    variant: isError ? 'error' : 'default',
  }) as { indicator: SystemStyleObject }

  return (
    <Step style={width}>
      <StepIndicator sx={styles}>{isLoading ? <SkeletonCircle /> : stepIndicator}</StepIndicator>

      <Box flex={1}>
        <StepTitle>
          <SkeletonText noOfLines={1} skeletonHeight={6} isLoaded={!isLoading}>
            {title}
          </SkeletonText>
        </StepTitle>
        {description && (
          <StepDescription>
            {isLoading ? (
              <SkeletonText mt={2} noOfLines={1} skeletonHeight={3} isLoaded={!isLoading} />
            ) : (
              description
            )}
          </StepDescription>
        )}
        {content !== undefined && <Box mt={2}>{content}</Box>}
        {!isLastStep && <Spacer height={6} />}
      </Box>
      <StepSeparator />
    </Step>
  )
}