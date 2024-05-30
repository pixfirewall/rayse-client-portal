import React, { FunctionComponent } from 'react'
import { Group, Text, Image, MainPaper, Showif, LongButton, YellowIcon, Box } from '@rayseinc-packages/ui'
import { useNavigateToClosingReport } from '../../navigations'
import iconStars from './icons/stars.png'

import { CTA } from './CTA'
import { Info } from './Info'

interface MatrixProps {
  title: string
  agentName?: string
  agentImage?: string
  activities: number
  outcomes: number
  tours: number
  offers: number
  isJourneyClosed?: boolean
}

export const Matrix: FunctionComponent<MatrixProps> = ({ title, agentName, agentImage, isJourneyClosed, ...data }) => {
  const navigateToClosingReport = useNavigateToClosingReport()
  return (
    <MainPaper bgcolor={isJourneyClosed ? '#EEECE6' : '#D9D4C8'} padding="24px 20px">
      <Group dir="vertical" gap={32}>
        <Showif con={!!isJourneyClosed}>
          <Image src={iconStars} width='56px' height='56px' />
        </Showif>
        <Text variant="rayse-24700">{title}</Text>
        <Info {...data} />
        <Showif con={agentName !== undefined && !isJourneyClosed}>
          <CTA agentName={agentName} agentImage={agentImage} />
        </Showif>
        <Showif con={!!isJourneyClosed}>
          <LongButton color="report" onClick={() => navigateToClosingReport()}>
          <Text variant="rayse-16700">View entire report</Text>
          <Box alignSelf="stretch">
            <YellowIcon material="arrow_forward" />
          </Box>
      </LongButton>
        </Showif>

      </Group>
    </MainPaper>
  )
}
