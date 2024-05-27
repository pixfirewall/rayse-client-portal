import React, { FunctionComponent } from 'react'
import { Group, PerViewSlider, Text } from '@rayseinc-packages/ui'
import { HomeCard, HomeCardProps } from '../HomeCard'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface RejectedHomesProps {
  homes?: HomeCardProps[]
}

export const RejectedHomes: FunctionComponent<RejectedHomesProps> = ({ homes = [] }) => {
  return (
    <Group dir="vertical" gap={24}>
      <Text variant="rayse-24700">Rejected homes ({homes.length})</Text>
      <Group sx={{width: 470}}>
        <PerViewSlider loop
          ns={1.4}
          slides={homes.map(home => (
            <HomeCard {...home} />
          ))}
        />
      </Group>
    </Group>
  )
}
