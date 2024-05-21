import React from 'react'
import { Box, Text, Grid, RayseDivider, Image, LongButton, YellowIcon } from '@rayseinc-packages/ui'

import { DataInfo } from './DataInfo'

import styles from './WhatWeDid.module.css'

import iconStars from './stars.png'

type Props = {
  hours: number
  activities: number
  tours: number
  offers: number
}

export const WhatWeDid = ({ hours, activities, tours, offers }: Props) => {
  return (
    <Box className={styles.container}>
      <Image src={iconStars} width='56px' height='56px' />
      <Text variant="rayse-24700">
        Everything we did to close on your new home
      </Text>

      <Grid container spacing={1.5}>
        <Grid item xs={5.5}>
          <DataInfo badge={hours} text="Hours" icon={1} />
        </Grid>
        <Grid item xs={0}>
          <RayseDivider color="#ADA08A" size={56} dir="vertical" />
        </Grid>
        <Grid item xs={5.5}>
          <DataInfo badge={activities} text="Activities" icon={2} />
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

      <LongButton color="report">
        <Text variant="rayse-16700">View entire report</Text>
        <Box alignSelf="stretch">
          <YellowIcon material="arrow_forward" />
        </Box>
      </LongButton>
    </Box>
  )
}
