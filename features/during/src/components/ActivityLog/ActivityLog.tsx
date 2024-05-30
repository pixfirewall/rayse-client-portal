import React, { useState } from 'react'
import { Box, Text, Pagination } from '@rayseinc-packages/ui'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import { LogChip } from './LogChip'

import type { ActivityLogRecord } from '../../types'
import styles from './ActivityLog.module.css'

const LOGS_PER_PAGE = 5

export const ActivityLog = () => {
  const [showOldest, setShowOldest] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const topIndex = (page - 1) * LOGS_PER_PAGE

  const onRecentClick = () => {
    if (showOldest) {
      setShowOldest(false)
    }
  }
  const onOldestClick = () => {
    if (!showOldest) {
      setShowOldest(true)
    }
  }

  const onPageChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage)
  }

  const sampleRecord: ActivityLogRecord = {
    title: 'Activity title',
    milestone: 'milestone',
    date: '04/25',
    duration: '158 min',
    location: '10699 Topaz Ave',
    details: `Meet clients for Sunday open house tour and preview planned homes.
      Post coffee discussion and questions of homes viewed.`
  }
  const sampleLogs: Array<ActivityLogRecord> = []
  for (let i = 0; i < 50; i++) {
    sampleLogs.push(sampleRecord)
  }

  return (
    <Box className={styles.container}>

      <Text variant="rayse-24700">Activity Log</Text>

      <Box className={styles.buttonContainer}>
        <Box className={showOldest ? styles.buttonInactive : styles.buttonActive} onClick={onRecentClick}>
          <Text variant="rayse-16400">Most recent</Text>
        </Box>
        <Box className={showOldest ? styles.buttonActive : styles.buttonInactive} onClick={onOldestClick}>
          <Text variant="rayse-16400">Oldest</Text>
        </Box>
      </Box>

      {sampleLogs.slice(topIndex, topIndex + LOGS_PER_PAGE).map((data: ActivityLogRecord) =>
        <LogChip data={data} smallScreen={smallScreen} />
      )}

      <Box style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
      }}>
        <Pagination
          page={page}
          onChange={onPageChange}
          count={4}
          siblingCount={0}
          boundaryCount={1}
          size={smallScreen ? 'medium' : 'large'}
        />
      </Box>
    </Box>
  )
}
