import React, { FunctionComponent } from 'react'
import { Group, MainPaper, Text, Image, Link } from '@rayseinc-packages/ui'

import LinkedIn from '../../fixtures/assets/LinkedIn.png'
import Facebook from '../../fixtures/assets/Facebook.png'
import Instagram from '../../fixtures/assets/Instagram.png'
import TikTok from '../../fixtures/assets/TikTok.png'
import LuxTeam from '../../fixtures/assets/Lux-Team.png'

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
            <Link href={linkedIn} target="_blank">
              <Text color="white" variant="rayse-18400">
                LinkedIn
              </Text>
            </Link>
          </Group>
          <Group alignV="center" gap={8}>
            <Image size={36} src={Facebook} />
            <Link href={facebook} target="_blank">
              <Text color="white" variant="rayse-18400">
                Facebook
              </Text>
            </Link>
          </Group>
          <Group alignV="center" gap={8}>
            <Image size={36} src={Instagram} />
            <Link href={instagram} target="_blank">
              <Text color="white" variant="rayse-18400">
                Instagram
              </Text>
            </Link>
          </Group>
          <Group alignV="center" gap={8}>
            <Image size={36} src={LuxTeam} />
            <Link href={website} target="_blank">
              <Text color="white" variant="rayse-18400">
                Website
              </Text>
            </Link>
          </Group>
        </Group>
      </Group>
    </MainPaper>
  )
}
