import React from 'react'
import { ScrollRestoration } from 'react-router-dom'

import { Box, Link, WhiteIcon, Text, RayseIcon, Image, LongButton, YellowIcon, Space } from '@rayseinc-packages/ui'
import styles from './styles/Accountability.module.css'

import { useGetAgentInfoQuery } from '../../api'
import { useNavigateToYourAgent } from '../../'

import checkeredImage from './assets/checkered.png'

import { usePreSelector } from '../../'

const DEFAULT_AGENT_ID = 80208

export const Accountability = () => {
  const navigateToYourAgent = useNavigateToYourAgent()
  const agentId = usePreSelector(state => state.PRE_REDUCER_PATH.agentId) || DEFAULT_AGENT_ID

  const { data: agentInfo } = useGetAgentInfoQuery({ id: agentId as number })

  return (
    <Box className={styles.mainContainer}>
      <ScrollRestoration />

      <Box style={{ backgroundColor: '#3F947D' }} className={styles.topNavBar}>
        <Link href={`/pre-2nd?agentId=${agentId}`}>
          <WhiteIcon material="arrow_back" size={48} />
        </Link>
        <Text style={{ color: 'white' }} variant="rayse-18700">
          Accountability
        </Text>
        <RayseIcon size={48} iconSize={32} />
      </Box>

      <Box className={styles.mainSection}>
        <Text
          variant="rayse-68700"
          sx={{
            'padding-top': '48px',
            'padding-bottom': '24px',
            'text-align': 'center',
          }}
        >
          Look what we’ve accomplished!
        </Text>

        <Box className={styles.roundCard} style={{ background: '#F8F7F4' }}>
          <Text variant="rayse-32700">Accountability</Text>
          <Text variant="rayse-24400">
            We’ll be working together on the first platform to make visible—and effortlessly sharable—the questions and
            answers, activities and milestones.
          </Text>
        </Box>

        <Box className={styles.multiColumnSection}>
          <Box className={styles.imageCard}>
            <Box className={styles.imageStyle}>
              <Box className={styles.imageBlur} />
            </Box>
          </Box>

          <Box className={styles.multiRowSection}>
            <Box className={styles.roundCard} style={{ background: '#EEECE6' }}>
              <Text variant="rayse-24700">Up-Front Information</Text>
            </Box>
            <Box className={styles.roundCard} style={{ background: '#EEECE6' }}>
              <Text variant="rayse-24700">Real-Time Communication</Text>
            </Box>
            <Box className={styles.roundCard} style={{ background: '#EEECE6' }}>
              <Text variant="rayse-24700">Full-Transparency Documentation </Text>
            </Box>
          </Box>
        </Box>

        <Box className={styles.multiColumnSection}>
          <Box className={styles.logoCard}>
            <Image src={agentInfo?.team?.brokerage?.logoImagePath || checkeredImage} className={styles.companyLogo} />
          </Box>

          <Box className={styles.roundCard} style={{ background: '#D9D4C8' }}>
            <Text variant="rayse-32700">You are here.</Text>
            <Text variant="rayse-24400">And you are this much closer to your new home.</Text>
          </Box>
        </Box>

        <Box className={styles.bottomCard}>
          <Text variant="rayse-36700" color="#FFF">
            Any questions?
          </Text>

          <LongButton color="darkGreen" onClick={navigateToYourAgent}>
            <Space />
            <Box
              className={styles.agentButtonIcon}
              style={{
                backgroundImage: `url(${agentInfo?.user?.imagePath})`,
              }}
            />
            <Text variant="rayse-20700">Get started</Text>
            <YellowIcon material="arrow_forward" />
          </LongButton>
        </Box>
      </Box>
    </Box>
  )
}
