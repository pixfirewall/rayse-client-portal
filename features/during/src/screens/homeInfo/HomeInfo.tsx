import React from 'react'
import { ScrollRestoration, useLocation } from 'react-router-dom'

import { Group, MainPaper, PageLayout } from '@rayseinc-packages/ui'

import { useGetMyJourneyDataQuery } from '../../api'
import { HomeLabel, HomeLabelType } from '../../components/HomeLabel'
import { useDuringSelector, usePrepareProgressData } from '../../hooks'
import { BrandFooter, Footer, HomeDetails, HomeSlider, NavBar, Progress } from '../../components'

export interface HomeInfoProps {
  images: string[]
  address: string
  price: string
  bed: number
  bath: number
  sqft: string
}

export const HomeInfo = () => {
  const {
    state: { images, ...details },
  } = useLocation()

  const journeyId = useDuringSelector(state => state.DURING_REDUCER_PATH.journeyId)

  const {
    data: journeyData,
    error: journeyDataError,
    isLoading: journeyDataLoading,
  } = useGetMyJourneyDataQuery({ journeyId })

  const progressData = usePrepareProgressData(
    journeyData?.steps.filter(s => s.id === 1 || s.id === 2).flatMap(s => s.milestones).flatMap(m => m.outcomes) || [],
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
        <Group dir="vertical" gap={32}>
          <Group>
            <NavBar title={details.address} />
          </Group>
          <Group dir="vertical" gap={12}>
            <HomeSlider images={images} ribbon />
            <MainPaper style={{ boxShadow: 'none' }}>
              <Group dir="vertical" gap={12}>
                <HomeDetails {...details} />
                <HomeLabel type={HomeLabelType.SeenDayAgo} day={2} />
              </Group>
            </MainPaper>
            <Progress data={progressData} p={3} />
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
