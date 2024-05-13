import React, { FunctionComponent } from 'react'
import { Grid, RayseDivider } from '@rayseinc-packages/ui'

import { DataInfo } from './DataInfo'

interface InfoProps {
  activities: number
  outcomes: number
  tours: number
  offers: number
}

export const Info: FunctionComponent<InfoProps> = ({ activities, outcomes, tours, offers }) => {
  return (
    <Grid container spacing={1.5}>
      <Grid item xs={5.5}>
        <DataInfo badge={activities} text="Activities" icon={1} />
      </Grid>
      <Grid item xs={0}>
        <RayseDivider color="#ADA08A" size={56} dir="vertical" />
      </Grid>
      <Grid item xs={5.5}>
        <DataInfo badge={outcomes} text="Outcomes" icon={2} />
      </Grid>
      <Grid item xs={5.5}>
        <RayseDivider color="#ADA08A" size={147} dir="horizontal" />
      </Grid>
      <Grid item xs={0}></Grid>
      <Grid item xs={5.5}>
        <RayseDivider color="#ADA08A" size={150} dir="horizontal" />
      </Grid>
      <Grid item xs={5.5}>
        <DataInfo badge={tours} text="Tours" icon={3} />
      </Grid>
      <Grid item xs={0}>
        <RayseDivider color="#ADA08A" size={56} dir="vertical" />
      </Grid>
      <Grid item xs={5.5}>
        <DataInfo badge={offers} text="Offers" icon={4} />
      </Grid>
    </Grid>
  )
}
