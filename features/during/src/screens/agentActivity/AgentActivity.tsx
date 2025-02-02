import React, { FunctionComponent } from 'react'
import { ScrollRestoration } from 'react-router-dom'

import { Group, PageLayout } from '@rayseinc-packages/ui'

import { NavBar } from '../../components'
import { RayseAccordion } from './Accordion'
import { agentActivityData } from '../../fixtures'
import { ActivityCard, ActivityCardType } from './ActivityCard'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AgentActivityProps {}

export const AgentActivity: FunctionComponent<AgentActivityProps> = () => {
  return (
    <PageLayout>
      <ScrollRestoration />
      <Group
        dir="vertical"
        gap={24}
        padding="12px"
        sx={{
          background: 'linear-gradient(179.99deg, #FFFFFF 0.01%, #EEECE6 66.41%)',
          height: '100vh',
        }}
      >
        <Group dir="vertical" gap={24}>
          <NavBar title="Agent activities" />
          <Group gap={12} alignH="center">
            <ActivityCard type={ActivityCardType.Days} value={6} />
            <ActivityCard type={ActivityCardType.Hours} value={34} />
            <ActivityCard type={ActivityCardType.Activities} value={42} />
          </Group>
        </Group>
        <Group dir="vertical" gap={12}>
          {agentActivityData.map(data => (
            <RayseAccordion {...data} />
          ))}
        </Group>
      </Group>
    </PageLayout>
  )
}
