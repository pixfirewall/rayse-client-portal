import React, { FunctionComponent } from 'react'
import { Group, MainPaper, Text, Grid } from '@rayseinc-packages/ui'

import { JourneyCard, State } from './JourneyCard'
import { useNavigateToConsultation } from '../../navigations'

export type JourneyData = { order: number; outcomes: number; info: string; state: State; onClick?: () => void }
interface JourneyProps {
  data?: JourneyData[]
}

export const Journey: FunctionComponent<JourneyProps> = ({ data }) => {
  const navigateToConsultation = useNavigateToConsultation()

  return (
    <MainPaper bgcolor="#3F947D" padding="20px 16px">
      <Group dir="vertical" gap={24}>
        <Text variant="rayse-24700" color="#FFFFFF">
          Your journey progess
        </Text>
        <Grid container spacing={2}>
          {data?.map(j => (
            <Grid key={j.info} item xs={6}>
              <JourneyCard
                info={j.info}
                onClick={navigateToConsultation}
                order={j.order}
                outcomes={j.outcomes}
                state={j.state}
              />
            </Grid>
          ))}
        </Grid>
      </Group>
    </MainPaper>
  )
}
