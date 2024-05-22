import React, { FunctionComponent } from 'react'
import { Group, MainPaper, Text, Image } from '@rayseinc-packages/ui'

import LinkedIn from '../../fixtures/assets/LinkedIn.png'
import Facebook from '../../fixtures/assets/Facebook.png'
import Instagram from '../../fixtures/assets/Instagram.png'
import TikTok from '../../fixtures/assets/TikTok.png'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AgentBioProps {}

export const AgentBio: FunctionComponent<AgentBioProps> = () => {
  return (
    <MainPaper style={{ boxShadow: 'none', backgroundColor: '#3F947D', border: '1px solid #EEECE6' }}>
      <Group dir="vertical" gap={40}>
        <Text color='white' variant="rayse-24700">Julie Capinstand</Text>
        <Text color='white' variant="rayse-20400">
          I’m committed to being your advocate on-demand, honoring your trust and partnership through your unique
          home-buying journey.
        </Text>
        <Group dir="vertical" gap={12}>
          <Group alignV="center" gap={8}>
            <Image size={36} src={LinkedIn} />
            <Text color='white' variant="rayse-18400">@julie</Text>
          </Group>
          <Group alignV="center" gap={8}>
            <Image size={36} src={Facebook} />
            <Text color='white' variant="rayse-18400">@julie</Text>
          </Group>
          <Group alignV="center" gap={8}>
            <Image size={36} src={Instagram} />
            <Text color='white' variant="rayse-18400">@julie</Text>
          </Group>
          <Group alignV="center" gap={8}>
            <Image size={36} src={TikTok} />
            <Text color='white' variant="rayse-18400">@julie</Text>
          </Group>
        </Group>
      </Group>
    </MainPaper>
  )
}
