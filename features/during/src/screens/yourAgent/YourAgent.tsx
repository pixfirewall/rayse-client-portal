import React, { FunctionComponent } from 'react'
import { ScrollRestoration } from 'react-router-dom'

import { Group, Image, PageLayout } from '@rayseinc-packages/ui'

import { AgentBio, AgentReviews, BrandFooter, ContactInfo, Footer, NavBar } from '../../components'

import agent from '../../fixtures/assets/agent.png'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface YourAgentProps {}

export const YourAgent: FunctionComponent<YourAgentProps> = () => {
  return (
    <PageLayout>
      <ScrollRestoration />
      <Group
        dir="vertical"
        gap={72}
        padding="12px"
        sx={{ background: 'linear-gradient(179.99deg, #FFFFFF 0.01%, #EEECE6 66.41%)' }}
      >
        <Group dir="vertical" gap={24}>
          <NavBar title="Your agent" />
          <Group dir="vertical" gap={12}>
            <Image src={agent} style={{ borderRadius: 25, border: '1px solid #EEECE6' }} blackAndWhite />
            <ContactInfo />
            <AgentBio />
            <AgentReviews />
          </Group>
        </Group>
        <Group dir="vertical" gap={12}>
          <BrandFooter />
          <Footer />
        </Group>
      </Group>
    </PageLayout>
  )
}
