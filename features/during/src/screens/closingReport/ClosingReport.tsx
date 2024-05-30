import React from 'react'
import { ScrollRestoration, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Box, Text, Divider, Image, Grid, Icon, Button, Showif } from '@rayseinc-packages/ui'

import { ActivityLog, ContactInfoSmall, Footer, BrandFooter, Loading } from '../../components'

import styles from './Report.module.css'

import type { ReportProps } from '../../types'

import clipboardIcon from './assets/clipboard.png'
import calendarIcon from './assets/calendar.png'
import awardIcon from './assets/award.png'

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
interface ClosingReportProps {
  isJourneyClosed?: boolean;
}

export const ClosingReport: React.FC<ClosingReportProps> = ({ isJourneyClosed = false }) => {

  const navigate = useNavigate();
  //@ts-expect-error resolve after demo
  const agentActivityData = useSelector(state => state.DURING_REDUCER_PATH.agentActivityData)

    if (!agentActivityData) {
      return (
        <Loading/>
      )
    }

  //@ts-expect-error resolve after demo
  const brokerageInfo = useSelector(state => state.DURING_REDUCER_PATH.brokerageInfo)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { daysWorked, outcomesFinished, activities, report, agentPicture, agentEmail, agentPhone, ...details } = agentActivityData.closingReport

  console.log(agentActivityData)
  return (
    <Grid container className={styles.topContainer}>
      <ScrollRestoration />
      
      <Grid item xs={12}>
        <Box className={styles.headerContainer}>
          <Button onClick={() => navigate(-1)}>
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
            <Text variant="rayse-14700" color="#161616">{isJourneyClosed ? 'Closing report' : 'Agent activities'}</Text>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Box className={styles.mainContainer}>
          <Box className={styles.capsuleContainer}>
            <Box className={styles.capsules}>
              <Image src={calendarIcon} width="36px" height="36px" />
              <Text variant="rayse-24700" color="#FFF" paddingTop="18px">{daysWorked}</Text>
              <Text variant="rayse-16400" color="#FFF">Days</Text>
            </Box>

            <Box className={styles.capsules}>
              <Image src={awardIcon} width="36px" height="36px" />
              <Text variant="rayse-24700" color="#FFF" paddingTop="18px">{outcomesFinished}</Text>
              <Text variant="rayse-16400" color="#FFF">Outcomes</Text>
            </Box>

            <Box className={styles.capsules}>
              <Image src={clipboardIcon} width="36px" height="36px" />
              <Text variant="rayse-24700" color="#FFF" paddingTop="18px">{activities}</Text>
              <Text variant="rayse-16400" color="#FFF">Activities</Text>
            </Box>
          </Box>

          <Showif con={!!report && isJourneyClosed}>
          <Box className={styles.detailsContainer}>
            <Text variant="rayse-24700" color="#171717">Closing Report</Text>
            {Object.keys(report).map(item => {
              return (
                <Box>
                  <Box className={styles.reportItem}>
                    <Text variant="rayse-18400" color="#525252">
                      {itemTitles[item as keyof typeof itemTitles]}
                    </Text>
                    <Text variant="rayse-18400" color="#171717" alignSelf={"stretch"}>
                      {report[item as keyof ReportProps]}
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
          </Showif>
        </Box>
      </Grid>

      <Grid item xs={12}>
        {/* @ts-expect-error resolve after demo */}
        <ActivityLog activities={agentActivityData?.activities} properties={agentActivityData?.properties}/>
      </Grid>

      <Grid item xs={12}>
        <ContactInfoSmall
          picture={agentPicture}
          email={agentEmail || "email@gmail.com"}
          phone={agentPhone || "(512) 123 - 1234"}
        />
      </Grid>

      <Grid item xs={12}>
        <BrandFooter logoUrl={brokerageInfo.logoImagePath || ''} />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>

    </Grid>
  )
}
