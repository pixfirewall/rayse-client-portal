import React from 'react'
import { ScrollRestoration } from 'react-router-dom'

import { Box, Text, Divider, Image, Grid, Icon, Button } from '@rayseinc-packages/ui'
import { useNavigateToPost } from '../navigations'

import { ActivityLog, ContactInfoSmall, Footer, BrandFooter } from '../components'

import styles from './styles/Report.module.css'

import type { ReportProps } from '../types'

import clipboardIcon from './assets/clipboard.png'
import calendarIcon from './assets/calendar.png'
import awardIcon from './assets/award.png'

const sampleReportData: ReportProps = {
  outcomes: 34,
  activities: 42,
  tours: 15,
  offers: 1,
  days: 47,
  journeyLength: '40 days',
  homesToured: 10,
  offersMade: 3,
  purchaseDate: '09/14/22',
  closingDate: '10/24/22',
  listPrice: '$799,000',
  purchasePrice: '$750,000',
  purchaseVsListPrice: '-7%',
  closingCredits: '+$6,500',
  milestones: 21,
  completedOutcomes: 105,
  totalHours: 81.5,
  totalMileage: '396 miles'
}

const itemTitles = {
  outcomes: 'Outcomes',
  activities: 'Activities',
  tours: 'Tours',
  offers: 'Offers',
  days: 'Days',
  journeyLength: 'Journey length',
  homesToured: 'Homes toured',
  offersMade: 'Offers made',
  purchaseDate: 'Purchase contract date',
  closingDate: 'Closing date',
  listPrice: 'List price',
  purchasePrice: 'Purchase price',
  purchaseVsListPrice: 'Purcase vs list price',
  closingCredits: 'Closing credits',
  milestones: 'Milestones acheived',
  completedOutcomes: 'Completed outcomes',
  totalHours: 'Total hours',
  totalMileage: 'Total mileage'
}

export const Report = () => {
  const reportProps = { ...sampleReportData }
  const navigateToPost = useNavigateToPost()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { days, outcomes, activities, tours, offers, ...details } = reportProps

  return (
    <Grid container className={styles.topContainer}>
      <ScrollRestoration />
      
      <Grid item xs={12}>
        <Box className={styles.headerContainer}>
          <Button onClick={() => navigateToPost()}>
            <Icon sx={{ color: 'black' }}>close</Icon>
          </Button>
          <Box style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingRight: '64px'
          }}>
            <Text variant="rayse-14700" color="#161616">Closing report</Text>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Box className={styles.mainContainer}>
          <Box className={styles.capsuleContainer}>
            <Box className={styles.capsules}>
              <Image src={calendarIcon} width="36px" height="36px" />
              <Text variant="rayse-24700" color="#FFF" paddingTop="18px">{days}</Text>
              <Text variant="rayse-16400" color="#FFF">Days</Text>
            </Box>

            <Box className={styles.capsules}>
              <Image src={awardIcon} width="36px" height="36px" />
              <Text variant="rayse-24700" color="#FFF" paddingTop="18px">{outcomes}</Text>
              <Text variant="rayse-16400" color="#FFF">Outcomes</Text>
            </Box>

            <Box className={styles.capsules}>
              <Image src={clipboardIcon} width="36px" height="36px" />
              <Text variant="rayse-24700" color="#FFF" paddingTop="18px">{activities}</Text>
              <Text variant="rayse-16400" color="#FFF">Activities</Text>
            </Box>
          </Box>

          <Box className={styles.detailsContainer}>
            <Text variant="rayse-24700" color="#171717">Closing Report</Text>
            {Object.keys(details).map(item => {
              return (
                <Box>
                  <Box className={styles.reportItem}>
                    <Text variant="rayse-18400" color="#525252">
                      {itemTitles[item as keyof typeof itemTitles]}
                    </Text>
                    <Text variant="rayse-18400" color="#171717" alignSelf={"stretch"}>
                      {reportProps[item as keyof ReportProps]}
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
      </Grid>

      <Grid item xs={12}>
        <ActivityLog />
      </Grid>

      <Grid item xs={12}>
        <ContactInfoSmall
          picture=""
          email="email@gmail.com"
          phone="(512) 123 - 1234"
        />
      </Grid>

      <Grid item xs={12}>
        <BrandFooter />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>

    </Grid>
  )
}
