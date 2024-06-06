import React, { useEffect, useRef, ForwardedRef } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import './timelineComponent.css'
import { Box, Text, Divider } from '@rayseinc-packages/ui'
import type { ClarityStepProps } from '../../types'
import styles from './ClarityStep.module.css'

type Props = {
  steps: ClarityStepProps
  dataIndex: number
}

export const ClarityStep = React.forwardRef(({ steps, dataIndex }: Props, ref: ForwardedRef<HTMLElement>) => {
  const { number, days, activities, details } = steps
  const stepRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (ref && typeof ref === 'function') {
      ref(stepRef.current)
    } else if (ref && 'current' in ref) {
      //@ts-expect-error resolve
      ;(ref as MutableRefObject<HTMLElement | null>).current = stepRef.current
    }
  }, [ref])

  return (
    <Box className={styles.container} ref={stepRef} data-index={dataIndex}>
      <Divider
        orientation="horizontal"
        flexItem
        style={{
          backgroundColor: '#FCFCFC',
          height: '1px',
          width: '100%',
        }}
      />
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          color: '#A3A3A3',
        }}
      >
        <Text variant="rayse-24400">Step {number}</Text>
        <Box
          sx={{
            width: '265px',
            'text-align': 'right',
          }}
        >
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
              position={index % 2 === 0 ? 'left' : 'right'}
              className="vertical-timeline-element--work"
              contentStyle={{
                display: 'flex',
                'flex-direction': 'column',
                padding: 0,
                gap: '8px',
                'box-shadow': 'none',
              }}
              iconStyle={{
                background: '#EEECE6',
              }}
            >
              <Text variant="rayse-24700" color="#171717">
                {item.title}
              </Text>
              <Text variant="rayse-24400" color="#525252">
                {item.body}
              </Text>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Box>
    </Box>
  )
})
