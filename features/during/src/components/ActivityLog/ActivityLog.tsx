import React, { useState, useEffect } from 'react'
import { Box, Text, Pagination } from '@rayseinc-packages/ui'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import { LogChip } from './LogChip'

import type { ActivityLogRecord, UpstreamMyJourneyActivities } from '../../types'
import styles from './ActivityLog.module.css'

const LOGS_PER_PAGE = 5

const camelCaseToWords = (str: string) => {
  return str.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); });
};

const durationToMinutes = (duration: string) => {
  const [hours, minutes, seconds] = duration.split(':').map(Number);
  return (hours * 60) + minutes + Math.round(seconds / 60);
};

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return `${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')}`;
};

const transformData = (data: any, properties: any) => {
  const milestone = data.outcomePayloads.length > 0 ? camelCaseToWords(data.outcomePayloads[0].eventTrigger) : '';
  const location = data.journeyPropertyId ? properties[data.journeyPropertyId]?.property?.address?.address1 : ''

  return {
    title: camelCaseToWords(data.activityType),
    date: formatDate(data.dateOfActivity),
    duration: durationToMinutes(data.duration),
    notes: data.notes,
    milestone: milestone,
    location: location,
  };
};

//@ts-expect-error resolve these types after demo
export const ActivityLog = ({activities, properties}: UpstreamMyJourneyActivities[]) => {
  const [showOldest, setShowOldest] = useState<boolean>(false)
  const [sortedActivities, setSortedActivities] = useState<UpstreamMyJourneyActivities[]>([]);

  const [page, setPage] = useState<number>(1)
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const topIndex = (page - 1) * LOGS_PER_PAGE

  useEffect(() => {
    const sorted = [...activities].sort((a, b) => 
      new Date(b.dateOfActivity).getTime() - new Date(a.dateOfActivity).getTime()
    );
    setSortedActivities(sorted);
  }, [activities]);

  const onRecentClick = () => {
    if (showOldest) {
      const sorted = [...sortedActivities].sort((a, b) => 
        new Date(b.dateOfActivity).getTime() - new Date(a.dateOfActivity).getTime()
      );
      setSortedActivities(sorted);
      setShowOldest(false);
      setPage(1); // Reset to the first page
    }
  };

  const onOldestClick = () => {
    if (!showOldest) {
      const sorted = [...sortedActivities].sort((a, b) => 
        new Date(a.dateOfActivity).getTime() - new Date(b.dateOfActivity).getTime()
      );
      setSortedActivities(sorted);
      setShowOldest(true);
      setPage(1); // Reset to the first page
    }
  };

  const totalPages = Math.ceil(activities.length / LOGS_PER_PAGE);

  const onPageChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage)
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

      {sortedActivities.slice(topIndex, topIndex + LOGS_PER_PAGE).map((data) => {
        const transformedData = transformData(data, properties);
        //@ts-expect-error resolve these types after demo
        return <LogChip key={data.id} data={transformedData} smallScreen={smallScreen} />;
      })}

      <Box style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
      }}>
        <Pagination
          page={page}
          onChange={onPageChange}
          count={totalPages}
          siblingCount={0}
          boundaryCount={1}
          size={smallScreen ? 'medium' : 'large'}
        />
      </Box>
    </Box>
  )
}
