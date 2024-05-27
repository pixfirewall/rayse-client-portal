import React from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'

import {
  Box,
  Text,
  Grid,
  LongButton,
  WhiteIcon,
  RayseIcon,
  RoundCard,
  Paragraph,
  WhiteButton,
  YellowIcon,
  Link
} from '@rayseinc-packages/ui'

import styles from './styles/secondary.module.css'

import { useGetAgentInfoQuery } from '../../api'
import { setAgentId } from '../../data'
import { useNavigateToPre } from '../../'

const DEFAULT_AGENT_ID = 80224

export const SecondaryPage = () => {
  const location = useLocation()
  const agentId = Number(queryString.parse(location.search)?.['agent'])

  if (isNaN(agentId)) {
    return (<Box>
      * ERROR: Please provide the agent id in the url. Example: <Link href={`/pre-2nd?agent=${DEFAULT_AGENT_ID}`} color="primary">
        /pre-2nd?agent={DEFAULT_AGENT_ID}
      </Link>
    </Box>)
  }

  const navigateToPre = useNavigateToPre(agentId)
  const dispatch = useDispatch()
  dispatch(setAgentId(agentId))

  const {
    data: agentInfo
  } = useGetAgentInfoQuery({ id: agentId as number })

  return (
    <Box className={styles.topContainer}>
      <Box className={styles.topNavBar}>
        <LongButton color="purple" onClick={() => navigateToPre()}>
          <WhiteIcon material="arrow_back" />
          <Text variant="rayse-20700">
            Back to {agentInfo?.user?.firstName}
          </Text>
          <Box
            className={styles.agentButtonIcon}
            style={{
              backgroundImage: `url(${agentInfo?.user?.imagePath})`
            }}
          />
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
        <Text variant="rayse-68700">I see you. And,</Text>
        <Text variant="rayse-68700">I Rayse you.</Text>

        <Text variant="rayse-40700" paddingTop="16px">I can make it appear effortless.</Text>
        <Text variant="rayse-40700">Rayse makes my efforts appear.</Text>
      </Box>

      <Box className={styles.cardSection}>

        <RoundCard dir="horizontal" color='#F8F7F4' hPadding='36px' vPadding='36px'
          height='240px' gap='40px' align='center'>

          <Box width="80%">
            <Text variant="rayse-24700" color="#171717">Clarity. </Text>
            <Text variant="rayse-24400" color="#171717">
              What does the process look like? You’ll always know where we are and what’s next.
            </Text>
          </Box>
          <Box className={styles.clarityImage}>
            <Box className={styles.clarityBlur} />
          </Box>

        </RoundCard>

      </Box>
    </Box>
  )
}

// Kept temporarily for reference
const OldCardSection = () => (
  <Grid container spacing={2} width="740px">
    <Grid item xs={12}>

      <RoundCard dir="horizontal" color='#F8F7F4' hPadding='36px' vPadding='36px'
        height='260px' gap='40px' align='center'>

        <Box>
          <Text variant="rayse-24700" color="#171717">Clarity. </Text>
          <Text variant="rayse-24400" color="#171717">
            What does the process look like? You’ll always know where we are and what’s next.
          </Text>
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

        <Paragraph gap='14px' titleVariant='rayse-24700' bodyVariant='rayse-20400' color='#171717'
          title={`Something about Rayse`}
          body={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt utlabore et dolore magna aliqua.`}
        />
      </RoundCard>

    </Grid>
    <Grid item xs={6}>

      <RoundCard color='#D9D4C8' hPadding='36px' vPadding='36px' height='360px' gap='80px' align='flex-start'>

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

          <Paragraph gap='14px' titleVariant='rayse-24700' bodyVariant='rayse-20400' color='#171717'
            title={`Closing report`}
            body={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt utlabore et dolore magna aliqua.`}
          />
        </Box>
        <Box position='relative' top='10px'>

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
