import React, { FunctionComponent } from 'react'
import { Group, MainPaper, Text, PerViewSlider } from '@rayseinc-packages/ui'
import { CardIcons, ProgressCard } from './ProgressCard'

interface ProgressProps {
  p?: number
  data: {
    image: CardIcons
    title: string
    progress: string
  }[]
}

export const Progress: FunctionComponent<ProgressProps> = ({ p = 0, data }) => {
  return (
    <MainPaper style={{ boxShadow: 'none' }}>
      <Group dir="vertical" gap={24} sx={{ overflow: 'hidden' }}>
        <Group alignV="center" gap={24}>
          <Text variant="rayse-24700">Your progress</Text>
          <Group
            alignH="center"
            alignV="center"
            sx={{ backgroundColor: 'black', width: '40px', height: '40px', borderRadius: '25px' }}
          >
            <Text variant="rayse-16700" color="white">
              {p}
            </Text>
          </Group>
        </Group>
        <Group sx={{ width: 470, boxSizing: 'border-box', flexShrink: 1, flexGrow: 0 }}>
          <PerViewSlider
					loop
            ns={3}
            slides={data.map(d => (
              <ProgressCard {...d} />
            ))}
          />
        </Group>
      </Group>
    </MainPaper>
  )
}
