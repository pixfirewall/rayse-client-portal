import React from 'react'
import { Box, Text, Image } from '@rayseinc-packages/ui'

import styles from './MetricsBar.module.css'

type Props = {
  days: number
  hours: number
  activities: number
  outcomes: number
}

import awardIcon from './assets/award.png'
import calendarHeartIcon from './assets/calendar-heart.png'
import clockIcon from './assets/clock.png'
import checkDoneIcon from './assets/check-done.png'

export const MetricsBar = ({ days, hours, activities, outcomes }: Props) => {
  const icons = [calendarHeartIcon, clockIcon, checkDoneIcon, awardIcon]
  const labels = ['days', 'hours', 'activities', 'outcomes']
  const values = [days, hours, activities, outcomes]

  return (
    <Box className={styles.container}>
      {labels.map((label, index) => (
        <Box className={styles.metricStyle} key={index}>
          <Image src={icons[index]} width="32px" height="32px" />
          <Text variant="rayse-24700">{values[index]}</Text>
          <Text variant="rayse-24400">{label}</Text>
        </Box>
      ))}
    </Box>
  )
}
