import React, { FunctionComponent } from 'react'
import { ScrollRestoration, useLocation } from 'react-router-dom'
import { Group, Text, MainPaper, Image, PageLayout } from '@rayseinc-packages/ui'

import { useGetMyJourneyDataQuery } from '../../api'
import { useDuringSelector, usePrepareProgressData } from '../../hooks'
import { ActivityHead, BrandFooter, Footer, NavBar, Progress } from '../../components'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface MilestoneProps {}

export const Milestone: FunctionComponent<MilestoneProps> = () => {
  const {
    state: { title, description, milestoneId, date, outcomes },
  } = useLocation()

  const journeyId = useDuringSelector(state => state.DURING_REDUCER_PATH.journeyId)
  const brokerageInfo = useDuringSelector(state => state.DURING_REDUCER_PATH.brokerageInfo)

  const {
    data: journeyData,
    error: journeyDataError,
    isLoading: journeyDataLoading,
  } = useGetMyJourneyDataQuery({ journeyId })

  const progressData = usePrepareProgressData(
    journeyData?.steps.flatMap(s => s.milestones).find(m => m.id === milestoneId)?.outcomes || [],
  )

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
          <Group>
            <NavBar title={title} />
          </Group>
          <ActivityHead title={title} />
          <Progress data={outcomes} />
          <MainPaper style={{ boxShadow: 'none' }}>
            <Group dir="vertical">
              <Text variant="rayse-24700" style={{ paddingBottom: 8 }}>
                Important information
              </Text>
              <Text variant="rayse-18400">{description}</Text>
            </Group>
          </MainPaper>
        </Group>
        <Group dir="vertical" gap={12}>
          <BrandFooter logoUrl={brokerageInfo.logoImagePath || ''} />
          <Footer />
        </Group>
      </Group>
    </PageLayout>
  )
}
