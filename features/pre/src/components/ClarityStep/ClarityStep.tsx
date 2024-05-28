import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import { Box, Text, Divider, Image } from '@rayseinc-packages/ui'

import type { ClarityStepProps } from '../../types'

import styles from './ClarityStep.module.css'

type Props = {
  steps: ClarityStepProps
}

export const ClarityStep = ({ steps }: Props) => {
  const {
    number, days, activities, details
  } = steps

  return (
    <Box className={styles.container}>
      <Divider orientation="horizontal" flexItem style={{
        backgroundColor: '#FCFCFC',
        height: '1px',
        width: '100%'
      }} />
      <Box style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: '#A3A3A3'
      }}>
        <Text variant="rayse-24400">Step {number}</Text>
        <Box sx={{
          width: '265px',
          'text-align': 'right'
        }}>
          <Text variant="rayse-24400">
            Typically takes {days} days & {activities} agent activities
          </Text>
        </Box>
      </Box>

      <Box style={{ width: '100%' }}>
        <VerticalTimeline lineColor="#EEECE6">
          {details.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              position={(index % 2) === 0 ? 'left' : 'right'}
              className="vertical-timeline-element--work"
              contentStyle={{
                display: 'flex',
                'flex-direction': 'column',
                padding: 0,
                gap: '8px',
                'box-shadow': 'none'
              }}
              iconStyle={{
                background: '#EEECE6'
              }}
            >
              <Text variant="rayse-24700" color="#171717">{item.title}</Text>
              <Text variant="rayse-24400" color="#525252">{item.body}</Text>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Box>
    </Box>
  )
}
