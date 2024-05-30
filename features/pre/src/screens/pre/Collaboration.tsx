import React from 'react'
import { ScrollRestoration } from 'react-router-dom'

import { Box, Link, WhiteIcon, Text, RayseIcon, Image, LongButton, YellowIcon, Space } from '@rayseinc-packages/ui'
import styles from './styles/Collaboration.module.css'

import { useGetAgentInfoQuery } from '../../api'
import { useNavigateToYourAgent } from '../../'

import checkeredImage from './assets/checkered.png'

import { usePreSelector } from '../../'

const DEFAULT_AGENT_ID = 80208

export const Collaboration = () => {
  const navigateToYourAgent = useNavigateToYourAgent()

  const agentId = usePreSelector(state => state.PRE_REDUCER_PATH.agentId) || DEFAULT_AGENT_ID

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
        <Text variant="rayse-18700">Collaboration</Text>
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
          Enjoy the view(s)!
        </Text>

        <Box className={styles.roundCard} style={{ background: '#F8F7F4' }}>
          <Text variant="rayse-32700">Collaboration</Text>
          <Text variant="rayse-24400">
            Typically it takes touring three to 10 homes to get into contract. Whatever it takes,
            you’ll have an expert in your corner so you won’t have surprises in the corners.
          </Text>
        </Box>

        <Box className={styles.multiColumnSection}>
          <Box className={styles.imageCard} />
          <Box className={styles.roundCard} style={{
            background: '#FFE240'
          }}>
            <Text variant="rayse-32700">Review the homes you’ve seen with one tap</Text>
          </Box>
        </Box>

        <Box className={styles.multiColumnSection}>
          <Box className={styles.roundCard} style={{ background: '#EEECE6', width: '100%' }}>
            <Text variant="rayse-32700">Your happy place.</Text>
            <Text variant="rayse-24400">
              Prepare to be moved to cheers.
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
