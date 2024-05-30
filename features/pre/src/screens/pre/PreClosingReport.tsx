import React from 'react'
import { useLocation, ScrollRestoration } from 'react-router-dom'
import queryString from 'query-string'

import { Box, Link, WhiteIcon, Text, RayseIcon, Image, LongButton, YellowIcon, Space } from '@rayseinc-packages/ui'
import styles from './styles/PreClosingReport.module.css'

import { useGetAgentInfoQuery } from '../../api'
import { useNavigateToYourAgent } from '../../'

import checkeredImage from './assets/checkered.png'

const DEFAULT_AGENT_ID = 80224

export const PreClosingReport = () => {
  const navigateToYourAgent = useNavigateToYourAgent()
  const location = useLocation()
  const agentId = Number(queryString.parse(location.search)?.['agentId'])

  if (isNaN(agentId)) {
    return (<Box>
      * ERROR: Please provide the agent id in the url. Example: <Link href={`/pre-closing-report?agentId=${DEFAULT_AGENT_ID}`} color="primary">
        /pre-closing-report?agentId={DEFAULT_AGENT_ID}
      </Link>
    </Box>)
  }

  const {
    data: agentInfo
  } = useGetAgentInfoQuery({ id: agentId as number })

  return (
    <Box className={styles.mainContainer}>
      <ScrollRestoration />

      <Box className={styles.topNavBar}>
        <Link href={`/pre-2nd?agentId=${agentId}`}>
          <WhiteIcon material="arrow_back" size={48} />
        </Link>
        <Text variant="rayse-18700">Closing report</Text>
        <RayseIcon size={48} iconSize={32} />
      </Box>

      <Box className={styles.mainSection}>

        <Text
          variant="rayse-68700"
          sx={{
            'padding-top': '48px',
            'padding-bottom': '24px',
            'text-align': 'center'
          }}>
          Congratulations on your new home!
        </Text>

        <Box className={styles.roundCard} style={{ background: '#F8F7F4' }}>
          <Text variant="rayse-32700">Closing report</Text>
          <Text variant="rayse-24400">
            Presenting your highly detailed, meticulously documented, all-in-one forever
            record of your unique path to home ownership. This is what success looks like.
          </Text>
        </Box>

        <Box className={styles.multiColumnSection}>
          <Box className={styles.multiRowSection}>
            <Box className={styles.roundCard} style={{ background: '#EEECE6', height: '100%', paddingRight: '80px' }}>
              <Text variant="rayse-32700">Metrics & Data Points</Text>
            </Box>
            <Box className={styles.roundCard} style={{ background: '#EEECE6', height: '100%' }}>
              <Text variant="rayse-32700">Time & Activities</Text>
            </Box>
          </Box>

          <Box className={styles.imageCard}>
            <Box className={styles.imageStyle}>
              <Box className={styles.imageBlur} />
            </Box>
          </Box>
        </Box>

        <Box className={styles.multiColumnSection}>
          <Box className={styles.roundCard} style={{ background: '#D9D4C8', width: '100%' }}>
            <Text variant="rayse-32700">We did it.</Text>
            <Text variant="rayse-24400">
              It’s been a pleasure to share this journey. Thank you.
            </Text>
          </Box>

          <Box className={styles.logoCard}>
            <Image
              src={agentInfo?.team?.brokerage?.logoImagePath || checkeredImage}
              className={styles.companyLogo}
            />
          </Box>
        </Box>

        <Box className={styles.bottomCard}>
          <Text variant="rayse-36700" color="#FFF">Any questions?</Text>

          <LongButton color="darkGreen" onClick={navigateToYourAgent}>
            <Space />
            <Text variant="rayse-20700">
              Contact {agentInfo?.user?.firstName}
            </Text>
            <Box
              className={styles.agentButtonIcon}
              style={{
                backgroundImage: `url(${agentInfo?.user?.imagePath})`
              }}
            />
            <YellowIcon material="arrow_forward" />
          </LongButton>
        </Box>

      </Box>
    </Box>
  )
}
