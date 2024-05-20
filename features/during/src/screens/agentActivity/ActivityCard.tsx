import React, { FunctionComponent } from 'react'
import { Group, Text, MainPaper, Image } from '@rayseinc-packages/ui'

import Activities from '../../fixtures/assets/activities.png'
import Hours from '../../fixtures/assets/hours.png'
import Days from '../../fixtures/assets/days.png'

export enum ActivityCardType {
  Days = 'Days',
  Hours = 'Hours',
  Activities = 'Activities',
}

const activityCardIcons = {
  Days,
  Hours,
  Activities,
}

interface ActivityCardProps {
  type: ActivityCardType
  value: number
}

export const ActivityCard: FunctionComponent<ActivityCardProps> = ({type, value}) => {
  return (
    <MainPaper bgcolor="rayse-green.main" style={{ width: 115, height: 148, position: 'relative' }}>
      <Group dir="vertical" alignH="space-between">
        <Image size={36} src={activityCardIcons[type]} />
        <Group dir="vertical" sx={{ position: 'absolute', bottom: 30 }}>
          <Text variant="rayse-24700" color="white">
            {value}
          </Text>
          <Text variant="rayse-16400" color="white">
            {type}
          </Text>
        </Group>
      </Group>
    </MainPaper>
  )
}
