import React from 'react'
import { Box, Text, Divider, Image } from '@rayseinc-packages/ui'

import styles from './ClosingReport.module.css'

import type { ReportProps } from './WhatWeDid.types'

import clipboardIcon from './icons/clipboard.png'
import calendarIcon from './icons/calendar.png'
import hourglassIcon from './icons/hourglass.png'

const itemTitles = {
  hours: 'Hours',
  activities: 'Activities',
  tours: 'Tours',
  offers: 'Offers',
  days: 'Days',
  escrowClosed: 'Escrow closed',
  homesToured: 'Homes toured',
  offersMade: 'Offers made',
  purchaseDate: 'Purchase contract date',
  closingDate: 'Closing date',
  listPrice: 'List price',
  purchasePrice: 'Purchase price',
  purchaseVsListPrice: 'Purcase vs list price',
  closingCredits: 'Closing credits',
  milestones: 'Milestones acheived',
  completedActivities: 'Completed activities',
  totalHours: 'Total hours',
  totalMileage: 'Total mileage'
}

export const ClosingReport = (props: ReportProps) => {
  const { days, hours, activities, tours, offers, ...details } = props

  return (
    <Box className={styles.mainContainer}>
      <Box className={styles.capsuleContainer}>
        <Box className={styles.capsules}>
          <Image src={calendarIcon} width="36px" height="36px" />
          <Text variant="rayse-24700" color="#FFF" paddingTop="18px">{days}</Text>
          <Text variant="rayse-16400" color="#FFF">Days</Text>
        </Box>

        <Box className={styles.capsules}>
          <Image src={hourglassIcon} width="36px" height="36px" />
          <Text variant="rayse-24700" color="#FFF" paddingTop="18px">{hours}</Text>
          <Text variant="rayse-16400" color="#FFF">Hours</Text>
        </Box>

        <Box className={styles.capsules}>
          <Image src={clipboardIcon} width="36px" height="36px" />
          <Text variant="rayse-24700" color="#FFF" paddingTop="18px">{activities}</Text>
          <Text variant="rayse-16400" color="#FFF">Activities</Text>
        </Box>
      </Box>

      <Box className={styles.detailsContainer}>
        {Object.keys(details).map(item => {
          return (
            <Box>
              <Box className={styles.reportItem}>
                <Text variant="rayse-18400" color="#525252">
                  {itemTitles[item as keyof typeof itemTitles]}
                </Text>
                <Text variant="rayse-18400" color="#171717" alignSelf={"stretch"}>
                  {props[item as keyof ReportProps]}
                </Text>
              </Box>

              {item !== 'totalMileage' &&
                <Divider orientation="horizontal" flexItem style={{
                  backgroundColor: '#FCFCFC',
                  height: '1px',
                  position: 'relative',
                  top: '16px'
                }} />
              }
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}
