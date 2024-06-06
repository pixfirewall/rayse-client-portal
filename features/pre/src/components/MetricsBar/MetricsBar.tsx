import React from 'react'
import { Box, Text, Image } from '@rayseinc-packages/ui'

import { ClarityMetrics } from '../../types'
import styles from './MetricsBar.module.css'

import awardIcon from './assets/award.png'
import calendarHeartIcon from './assets/calendar-heart.png'
import clockIcon from './assets/clock.png'
import checkDoneIcon from './assets/check-done.png'

type Props = {
  metrics: ClarityMetrics
}

export const MetricsBar = ({ metrics }: Props) => {
  const { days, hours, activities, outcomes } = metrics
  const icons = [calendarHeartIcon, clockIcon, checkDoneIcon, awardIcon]
  const labels = ['days', 'hours', 'activities', 'outcomes']
  const values = [days, hours, activities, outcomes]

  return (
    <Box style={{ backgroundColor: '#3F947D' }} className={styles.container}>
      {labels.map((label, index) => (
        <Box style={{ backgroundColor: '#2A6656' }} className={styles.metricStyle} key={index}>
          <Image src={icons[index]} width="32px" height="32px" />
          <Text sx={{ color: '#FFFFFF' }} variant="rayse-24700">
            {values[index]}
          </Text>
          <Text sx={{ color: '#FFFFFF' }} variant="rayse-24400">
            {label}
          </Text>
        </Box>
      ))}
    </Box>
  )
}
