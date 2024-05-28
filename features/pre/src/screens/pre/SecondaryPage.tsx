import React from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, ScrollRestoration } from 'react-router-dom'
import queryString from 'query-string'

import {
  Box,
  Text,
  LongButton,
  WhiteIcon,
  RayseIcon,
  RoundCard,
  Link,
  Image
} from '@rayseinc-packages/ui'

import styles from './styles/secondary.module.css'

import { useGetAgentInfoQuery } from '../../api'
import { setAgentId } from '../../data'
import { useNavigateToPre } from '../../'

import brixtonCard from './assets/brixton-card.png'

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
      <ScrollRestoration />

      <Box className={styles.topNavBar}>
        <LongButton color="darkGreen" onClick={() => navigateToPre()}>
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

        <Link href={'#'} target="_blank"
          style={{
            cursor: 'pointer'
          }}>
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
        </Link>

        <Box className={styles.twoColumnSection}>
          <Link href={'#'} target="_blank"
            style={{
              cursor: 'pointer'
            }}>
            <RoundCard color='#EEECE6' hPadding='36px' vPadding='36px' height='410px' gap='80px' align='flex-start'>
              <Box width='100%' alignSelf='flex-start'>
                <RoundCard dir='horizontal' color='#FFF' hPadding='20px' vPadding='24px' width='84%' gap='16px'
                  height='40px' boxShadow='5px 5px 10px #EEE' position='relative' top="10px" left={0} zIndex={3}
                >
                  <Box
                    className={styles.agentButtonIcon}
                    style={{
                      backgroundImage: `url(${agentInfo?.user?.imagePath})`
                    }}
                  />
                  <Box sx={{ 'text-align': 'left' }}>
                    <Text variant="rayse-14400" color="#171717">
                      {agentInfo?.user?.firstName} just scheduled a tour for
                    </Text>
                    <Text variant="rayse-14700" color="#171717"> 208 Brixton Ave</Text>
                  </Box>
                </RoundCard>

                <RoundCard dir='horizontal' color='#FFF' hPadding='20px' vPadding='24px' width='78%' gap='16px'
                  height='32px' boxShadow='5px 5px 10px #EEE' position='relative' top='-58px' left='10px' zIndex={2} />
                <RoundCard dir='horizontal' color='#FFF' hPadding='20px' vPadding='24px' width='68%' gap='16px'
                  height='32px' boxShadow='5px 5px 10px #EEE' position='relative' top='-126px' left='26px' zIndex={1} />
              </Box>

              <Box position="relative" top="-100px">
                <Text variant="rayse-24700" color="#171717">Accountability. </Text>
                <Text variant="rayse-24400" color="#171717">
                  What exactly does a buyer’s agent do? You’ll always know my efforts on your behalf.
                </Text>
              </Box>
            </RoundCard>
          </Link>

          <Link href={'#'} target="_blank"
            style={{
              cursor: 'pointer'
            }}>
            <RoundCard color='#D9D4C8' hPadding='36px' vPadding='36px' height='410px' gap='80px' align='flex-start'>
              <Box className={styles.sampleHouseInfo}>
                <Image src={brixtonCard} width="185px" />

                <RoundCard dir='horizontal' color='#FFF' hPadding='20px' vPadding='24px' width='84%' gap='16px'
                  height='40px' position='relative' top="-180px" left={0}
                >
                  <Box
                    className={styles.houseThumbnail}
                  />
                  <Box sx={{ 'text-align': 'left' }}>
                    <Text variant="rayse-16400" color="#171717">Tell me how you felt about</Text>
                    <Text variant="rayse-16700" color="#171717"> 208 Brixton Ave</Text>
                  </Box>
                </RoundCard>
              </Box>

              <Box position="relative" top="-146px" paddingRight="10px">
                <Text variant="rayse-24700" color="#171717">Collaboration. </Text>
                <Text variant="rayse-24400" color="#171717">
                  What’s the value of our partnership? You’ll always know where we’ve found success.
                </Text>
              </Box>
            </RoundCard>
          </Link>
        </Box>

        <Link href={'#'} target="_blank"
          style={{
            cursor: 'pointer',
            width: '100%'
          }}>
          <RoundCard dir="horizontal" color='#C6BDAC' hPadding='36px' vPadding='36px'
            height='256px' gap='40px' align='center'>

            <Box width="80%">
              <Text variant="rayse-24700" color="#171717">Your data-rich closing report </Text>
              <Text variant="rayse-24400" color="#171717">
                will document our entire journey, days invested to homes toured to move in day.
              </Text>
            </Box>

            <Box style={{
              flex: '1 0 0',
              alignSelf: 'stretch',
              padding: '0 32px'
            }}>
              <Box className={styles.reportImage}>
                <Box className={styles.reportBlur} />
              </Box>
            </Box>
          </RoundCard>
        </Link>

        <Link href={'https://www.rayse.com/'} target="_blank"
          style={{
            cursor: 'pointer',
            width: '100%'
          }}>
          <RoundCard dir="horizontal" color='#FFD800' hPadding='36px' vPadding='36px'
            height='64px' gap='40px' align='center'>

            <Text variant="rayse-36700" color="#171717">
              Meet Rayse, the company.
            </Text>
            <WhiteIcon material="arrow_forward" size={64} />
          </RoundCard>
        </Link>

      </Box >
    </Box >
  )
}
