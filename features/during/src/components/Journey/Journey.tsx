import React from 'react'
import { Group, MainPaper, Text, Grid } from '@rayseinc-packages/ui'

import { JourneyCard, State } from './JourneyCard'

export const Journey = () => {
  return (
    <MainPaper bgcolor="#3F947D" padding="20px 16px">
      <Group dir="vertical" gap={24}>
        <Text variant="rayse-24700" color="#FFFFFF">
          Your journey progess
        </Text>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <JourneyCard info="Consultation" />
          </Grid>
          <Grid item xs={6}>
            <JourneyCard info="Touring & Offers" state={State.Inprogres} order={2} />
          </Grid>
          <Grid item xs={6}>
            <JourneyCard info="Escrow" state={State.Todo} order={3} />
          </Grid>
          <Grid item xs={6}>
            <JourneyCard info="Closing" state={State.Todo} order={4} />
          </Grid>
        </Grid>
      </Group>
    </MainPaper>
  )
}
