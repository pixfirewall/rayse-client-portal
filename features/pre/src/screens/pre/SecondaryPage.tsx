import React from 'react'
import {
  Box,
  Text,
  Grid,
  LongButton,
  WhiteIcon,
  RayseIcon,
  RoundCard
} from '@rayseinc-packages/ui'

import styles from './styles/secondary.module.css'

export const SecondaryPage = () => {
  return (
    <Box className={styles.topContainer}>
      <Box className={styles.topNavBar}>
        <LongButton color="purple">
          <WhiteIcon material="arrow_back" />
          <Text variant="rayse-20700">
            Back to Julie
          </Text>
          <Box className={styles.agentButtonIcon} />
        </LongButton>

        <RayseIcon size={56} iconSize={40} />

        <LongButton color="black">
          <Box style={{ width: '1px' }} />
          <Text variant="rayse-20700">
            Get started today
          </Text>
          <WhiteIcon material="arrow_forward" />
        </LongButton>
      </Box>

      <Box className={styles.subSection}>
        <Box display="flex" justifyContent="center">
          <Text variant="rayse-68700">Meet Rayse</Text>
          <Text variant="rayse-68700" color="#FFCE31">.</Text>
        </Box>

        <Text variant="rayse-44700">
          Let’s raise the standard for buying a home, one step at a time
        </Text>
      </Box>

      <Grid container style={{ paddingTop: '80px' }} spacing={2} width="740px">
        <Grid item xs={12}>
          <RoundCard dir="horizontal" color='#F8F7F4' hPadding='40px' vPadding='36px' height='348px' width='100%' gap='40px' align='center'>
            <Text variant="rayse-20400" color="#171717" width="100%">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt utlabore et dolore magna aliqua.
            </Text>

            <Box width='100%'>
              <RoundCard dir='horizontal' color='#FFF' hPadding='20px' vPadding='24px' width='70%' gap='16px'
                boxShadow='5px 5px 20px #DDD'
              >
                <Box className={styles.agentButtonIcon} />
                <Box sx={{ 'text-align': 'left' }}>
                  <Text variant="rayse-16400" color="#171717">We’re confirmed to see </Text>
                  <Text variant="rayse-16700" color="#171717">8 West Ave </Text>
                  <Text variant="rayse-16400" color="#171717">at </Text>
                  <Text variant="rayse-16700" color="#171717">9:00am!</Text>
                </Box>
              </RoundCard>
            </Box>

          </RoundCard>
        </Grid>
      </Grid>
    </Box>
  )
}
