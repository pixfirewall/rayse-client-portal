import React, { useState } from 'react'
import { Box, Text, RayseDivider, Icon, Button } from '@rayseinc-packages/ui'

import type { ActivityLogRecord } from '../../types'

import styles from './LogChip.module.css'

type Props = {
  data: ActivityLogRecord
  smallScreen: boolean
}

export const LogChip = ({ data, smallScreen }: Props) => {
  const { title, milestone, date, duration, location, details } = data
  const [showDetails, setShowDetails] = useState<boolean>(false)
  const infoVariant = smallScreen ? 'rayse-14400' : 'rayse-16400'

  return (
    <Box className={styles.container}>
      <Box className={styles.topRow}>
        <Box>
          <Text variant="rayse-18400" color="#161616">
            {title} - {milestone}
          </Text>
        </Box>
        <Button onClick={() => setShowDetails(!showDetails)} className={styles.expandButton}>
          <Icon sx={{ color: '#161616', 'font-size': 36 }}>{showDetails ? 'expand_less' : 'expand_more'}</Icon>
        </Button>
      </Box>

      <Box className={styles.infoRow}>
        <Text variant={infoVariant} color="#535049">
          {date}
        </Text>
        <RayseDivider color="#C5C2BA" gap={2} />
        <Text variant={infoVariant} color="#535049">
          {duration}
        </Text>
        <RayseDivider color="#C5C2BA" gap={2} />
        <Text variant={infoVariant} color="#535049">
          {location}
        </Text>
      </Box>

      {showDetails && (
        <Box paddingTop="8px">
          <Text variant="rayse-14400" color="#535049">
            {details}
          </Text>
        </Box>
      )}
    </Box>
  )
}
