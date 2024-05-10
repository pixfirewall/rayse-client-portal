import './style.css'
import React from 'react'
import { Box, Text, Grid } from '@rayseinc-packages/ui'

import { JourneyCard } from './JourneyCard'

export const Journey = () => {
  return (
    <Box className="Journey-Container">
      <Text variant="rayse-24700" color="#FFFFFF">
        Your journey progess
      </Text>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <JourneyCard info="Consultation" />
        </Grid>
        <Grid item xs={6}>
          <JourneyCard info="Touring & Offers" state="inprogres" order={2} />
        </Grid>
        <Grid item xs={6}>
          <JourneyCard info="Escrow" state="todo" order={3} />
        </Grid>
        <Grid item xs={6}>
          <JourneyCard info="Closing" state="todo" order={4} />
        </Grid>
      </Grid>
    </Box>
  )
}
