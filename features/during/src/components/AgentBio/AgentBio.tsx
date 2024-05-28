import React, { FunctionComponent } from 'react'
import { Group, MainPaper, Text, Image } from '@rayseinc-packages/ui'

import LinkedIn from '../../fixtures/assets/LinkedIn.png'
import Facebook from '../../fixtures/assets/Facebook.png'
import Instagram from '../../fixtures/assets/Instagram.png'
import TikTok from '../../fixtures/assets/TikTok.png'

export interface AgentBioProps {
  name?: string
  description?: string
  linkedIn?: string
  instagram?: string
  facebook?: string
  website?: string
}

export const AgentBio: FunctionComponent<AgentBioProps> = ({
  name,
  description,
  facebook,
  linkedIn,
  instagram,
  website,
}) => {
  return (
    <MainPaper style={{ boxShadow: 'none', backgroundColor: '#3F947D', border: '1px solid #EEECE6' }}>
      <Group dir="vertical" gap={40}>
        <Text color="white" variant="rayse-24700">
          {name}
        </Text>
        <Text color="white" variant="rayse-20400">
          {description}
        </Text>
        <Group dir="vertical" gap={12}>
          <Group alignV="center" gap={8}>
            <Image size={36} src={LinkedIn} />
            <Text color="white" variant="rayse-18400">
              {linkedIn}
            </Text>
          </Group>
          <Group alignV="center" gap={8}>
            <Image size={36} src={Facebook} />
            <Text color="white" variant="rayse-18400">
              {facebook}
            </Text>
          </Group>
          <Group alignV="center" gap={8}>
            <Image size={36} src={Instagram} />
            <Text color="white" variant="rayse-18400">
              {instagram}
            </Text>
          </Group>
          <Group alignV="center" gap={8}>
            <Image size={36} src={TikTok} />
            <Text color="white" variant="rayse-18400">
              {website}
            </Text>
          </Group>
        </Group>
      </Group>
    </MainPaper>
  )
}
