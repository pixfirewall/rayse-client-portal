import React from 'react'
import {
  Box,
  Text,
  Grid,
  LongButton,
  WhiteIcon,
  RayseIcon,
  RoundCard,
  Image,
  Paragraph,
  WhiteButton,
  YellowIcon
} from '@rayseinc-packages/ui'

import styles from './styles/secondary.module.css'

import iconNotificationMessage from './assets/icon-notification-message.png'
import iconStars from './assets/icon-stars.png'
import iconCalendarCheck from './assets/icon-calendar-check.png'
import iconHomeSmile from './assets/icon-home-smile.png'
import phoneScreen from './assets/phone-screen.png'

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

      <CardSection />

      <Box className={styles.subSection}>
        <Text variant="rayse-44700">
          Let’s raise the standard for buying a home, one step at a time
        </Text>
      </Box>

      <CardSection />
    </Box>
  )
}

const CardSection = () => (
  <Grid container spacing={2} width="740px">
    <Grid item xs={12}>

      <RoundCard dir="horizontal" color='#F8F7F4' hPadding='36px' vPadding='36px'
        height='260px' gap='40px' align='center'>

        <Box display='flex' flexDirection='column' justifyContent='space-between' width='100%' height='100%'>
          <Image src={iconNotificationMessage} width='56px' height='56px' />
          <Paragraph gap='14px' titleVariant='rayse-24700' bodyVariant='rayse-20400' color='#171717'
            title={`Transparency`}
            body={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt utlabore et dolore magna aliqua.`}
          />
        </Box>

        <Box width='100%' alignSelf='flex-start'>
          <RoundCard dir='horizontal' color='#FFF' hPadding='20px' vPadding='24px' width='84%' gap='27px'
            height='40px' boxShadow='5px 5px 10px #EEE' position='relative' top='70px' left={0} zIndex={3}
          >
            <Box className={styles.agentButtonIcon} />
            <Box sx={{ 'text-align': 'left' }}>
              <Text variant="rayse-16400" color="#171717">We’re confirmed to see </Text>
              <Text variant="rayse-16700" color="#171717">8 West Ave </Text>
              <Text variant="rayse-16400" color="#171717">at </Text>
              <Text variant="rayse-16700" color="#171717">9:00am!</Text>
            </Box>
          </RoundCard>

          <RoundCard dir='horizontal' color='#FFF' hPadding='20px' vPadding='24px' width='78%' gap='16px'
            height='32px' boxShadow='5px 5px 10px #EEE' position='relative' top='2px' left='10px' zIndex={2} />
          <RoundCard dir='horizontal' color='#FFF' hPadding='20px' vPadding='24px' width='68%' gap='16px'
            height='32px' boxShadow='5px 5px 10px #EEE' position='relative' top='-66px' left='26px' zIndex={1} />
        </Box>

      </RoundCard>

    </Grid>
    <Grid item xs={6}>

      <RoundCard color='#EEECE6' hPadding='36px' vPadding='36px' height='360px' gap='80px' align='flex-start'>
        <Image src={iconStars} width='56px' height='56px' />
        <Paragraph gap='14px' titleVariant='rayse-24700' bodyVariant='rayse-20400' color='#171717'
          title={`Something about Rayse`}
          body={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt utlabore et dolore magna aliqua.`}
        />
      </RoundCard>

    </Grid>
    <Grid item xs={6}>

      <RoundCard color='#D9D4C8' hPadding='36px' vPadding='36px' height='360px' gap='80px' align='flex-start'>
        <Image src={iconCalendarCheck} width='56px' height='56px' />
        <Paragraph gap='14px' titleVariant='rayse-24700' bodyVariant='rayse-20400' color='#171717'
          title={`Something about Rayse`}
          body={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt utlabore et dolore magna aliqua.`}
        />
      </RoundCard>

    </Grid>
    <Grid item xs={12} overflow='hidden'>

      <RoundCard dir="horizontal" color='#C6BDAC' hPadding='36px' vPadding='36px'
        height='260px' gap='40px' align='center'>

        <Box display='flex' flexDirection='column' justifyContent='space-between' width='100%' height='100%'>
          <Image src={iconHomeSmile} width='56px' height='56px' />
          <Paragraph gap='14px' titleVariant='rayse-24700' bodyVariant='rayse-20400' color='#171717'
            title={`Closing report`}
            body={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt utlabore et dolore magna aliqua.`}
          />
        </Box>
        <Box position='relative' top='10px'>
          <Image src={phoneScreen} width="285px" />
        </Box>
      </RoundCard>

    </Grid>
    <Grid item xs={12}>

      <RoundCard dir="horizontal" color='#FFD800' hPadding='36px' vPadding='36px'
        height='100px' gap='40px' align='center'>
        <Text variant='rayse-36700' color='#171717' width='60%'>
          Let’s get this Journey started!
        </Text>

        <WhiteButton>
          <Text variant="rayse-20700">
            Get started
          </Text>
          <YellowIcon material="arrow_forward" />
        </WhiteButton>
      </RoundCard>
    </Grid>
  </Grid>
)
