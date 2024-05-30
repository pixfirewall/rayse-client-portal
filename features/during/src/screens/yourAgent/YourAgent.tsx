import React, { FunctionComponent } from 'react'
import { ScrollRestoration } from 'react-router-dom'

import { Group, Image, PageLayout } from '@rayseinc-packages/ui'

import { AgentBio, AgentReviews, BrandFooter, ContactInfo, Footer, NavBar } from '../../components'

import { useDuringSelector, usePrepareAgentData } from '../../hooks'
import { useGetAgentDataQuery } from '../../api'

import { usePreSelector } from '@rayseinc-features/pre'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface YourAgentProps {}

export const YourAgent: FunctionComponent<YourAgentProps> = () => {
  const agentIdFromDuring = useDuringSelector(state => state.DURING_REDUCER_PATH.agentId)
  const agentIdFromPre = usePreSelector(state => state.PRE_REDUCER_PATH.agentId)

  const agentId = agentIdFromDuring || agentIdFromPre
  const { data: agentData, error: agentError, isLoading: agentLoading } = useGetAgentDataQuery({ agentId })

  const processedAgentData = usePrepareAgentData(agentData)

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
            <Image
              src={processedAgentData?.image}
              style={{ borderRadius: 25, border: '1px solid #EEECE6' }}
              blackAndWhite
            />
            <ContactInfo {...processedAgentData?.contact} />
            <AgentBio {...processedAgentData?.bio} />
            <AgentReviews agentName={processedAgentData?.agentName} reviews={processedAgentData?.reviews} />
          </Group>
        </Group>
        <Group dir="vertical" gap={12}>
          <BrandFooter logoUrl={agentData?.team?.brokerage?.logoImagePath || ''} />
          <Footer />
        </Group>
      </Group>
    </PageLayout>
  )
}
