import React, { useState } from 'react'
import { useInView } from "react-intersection-observer"

import { ScrollRestoration } from 'react-router-dom'

import { Box, Link, WhiteIcon, Text, RayseIcon } from '@rayseinc-packages/ui'

import { NumberCircle, MetricsBar, ClarityStep } from '../../components'

import { CLARITY_STEPS, CLARITY_METRICS } from '../../constants'

import styles from './styles/clarity.module.css'

import { usePreSelector } from '../../'

const DEFAULT_AGENT_ID = 80208

export const Clarity = () => {
  const [activeMetric, setActiveMetric] = useState(0)

  const agentId = usePreSelector(state => state.PRE_REDUCER_PATH.agentId) || DEFAULT_AGENT_ID

  const { ref } = useInView({
    onChange: inView => {
      inView && setActiveMetric(0)
    },
    threshold: 0.25
  })

  const onStepVisibilityChange = (number: number, visible: boolean) => {
    if (visible) {
      setActiveMetric(number)
    }
  }

  return (
    <Box className={styles.mainContainer}>
      <ScrollRestoration />

      <Box className={styles.topNavBar}>
        <Link href={`/pre-2nd?agentId=${agentId}`}>
          <WhiteIcon material="arrow_back" size={48} />
        </Link>
        <Text variant="rayse-18700">Clarity</Text>
        <RayseIcon size={48} iconSize={32} />
      </Box>

      <Box className={styles.multiColumnSection} paddingTop="96px">
        <Box className={styles.multiRowSection} justifyContent={'center'}>
          <Text variant="rayse-68700">100% Visibility</Text>
          <Text variant="rayse-24400">
            You’re not expected to know which monumental to minor issues will arise for us.
            Or how to illuminate or eliminate them as they do. It’s not like you’re navigating
            the process of buyinga home every day!
          </Text>
          <Text variant="rayse-24400">
            But I am. And as your agent, I welcome the opportunity to demonstrate exactly what
            we’ve accomplishedand what’s next—together building trusting and lifting anxiety.
          </Text>
        </Box>

        <Box className={styles.visibilityRightCol}>
          <Box style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Box style={{ display: 'flex', flexDirection: 'row', gap: '12px' }}>
              <Box className={styles.visibilityCard}>
                <NumberCircle number={1} active />
                <Text variant="rayse-18700">Consultation</Text>
              </Box>
              <Box className={styles.visibilityCard}>
                <NumberCircle number={2} />
                <Text variant="rayse-18700">Touring & Offers</Text>
              </Box>
            </Box>

            <Box style={{ display: 'flex', flexDirection: 'row', gap: '12px' }}>
              <Box className={styles.visibilityCard}>
                <NumberCircle number={3} />
                <Text variant="rayse-18700">Contract</Text>
              </Box>
              <Box className={styles.visibilityCard}>
                <NumberCircle number={4} />
                <Text variant="rayse-18700">Closing</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box style={{ width: '550px', textAlign: 'center' }} paddingTop="96px" ref={ref}>
        <Text variant="rayse-44700">This is what my work typically looks like</Text>
      </Box>

      <Box style={{ width: '100%', position: 'sticky', top: '94px', zIndex: 1 }}>
        <MetricsBar
          metrics={CLARITY_METRICS[activeMetric]}
        />
      </Box>

      <Box paddingTop="64px" />
      {CLARITY_STEPS.map((entry, index) =>
        <ClarityStep steps={entry} key={index} onVisibilityChange={onStepVisibilityChange} />)}

      <Box paddingTop="24px" />
      <Text variant="rayse-44700">Welcome Home!</Text>
    </Box>
  )
}
