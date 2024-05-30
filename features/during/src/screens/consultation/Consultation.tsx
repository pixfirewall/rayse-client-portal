import React, { FunctionComponent, useEffect, useState } from 'react'
import { ScrollRestoration, useLocation } from 'react-router-dom'

import { Group, PageLayout, Text } from '@rayseinc-packages/ui'

import { Footer, BrandFooter, Matrix, ActivityList, NavBar } from '../../components'
import { useDuringSelector, usePrepareActivityData } from '../../hooks'
import { useDispatch } from 'react-redux'
import { useGetMyJourneyByIdQuery, useGetMyJourneyDataQuery, useGetMyJourneyListQuery } from '../../api'
import { setJourneyId } from '../../data'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ConsultationProps {}

export const Consultation: FunctionComponent<ConsultationProps> = () => {
  const {
    state: { stepId, title, description },
  } = useLocation()

  const [journeySkip, setJourneySkip] = useState(true)
  const [journeyDataSkip, setJourneyDataSkip] = useState(true)
  const [journeyListSkip, setJourneyListSkip] = useState(true)

  const journeyId = useDuringSelector(state => state.DURING_REDUCER_PATH.journeyId)
  const dispatch = useDispatch()

  const {
    data: journeyList,
    error: journeyListError,
    isLoading: journeyListLoading,
  } = useGetMyJourneyListQuery({}, { skip: journeyListSkip })
  const {
    data: journey,
    error: journeyError,
    isLoading: journeyLoading,
  } = useGetMyJourneyByIdQuery({ journeyId }, { skip: journeySkip })
  const {
    data: journeyData,
    error: journeyDataError,
    isLoading: journeyDataLoading,
  } = useGetMyJourneyDataQuery({ journeyId }, { skip: journeyDataSkip })

  const activities = usePrepareActivityData(journeyData?.steps.find(s => s.id === stepId)?.milestones, false)

  useEffect(() => {
    if (journeySkip && journeyListSkip && journeyDataSkip) {
      if (journeyId) {
        setJourneySkip(false)
        setJourneyDataSkip(false)
      } else {
        setJourneyListSkip(false)
      }
    }
  }, [])

  useEffect(() => {
    if (journeyList?.length && !journeyId) {
      dispatch(setJourneyId(journeyList[0].id))
      if (journeySkip && journeyDataSkip) {
        setJourneySkip(false)
        setJourneyDataSkip(false)
      }
    }
  }, [journeyList])

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
          <Group dir="vertical">
            <Text variant="rayse-24700">{title}</Text>
            <Text variant="rayse-18400">{description}</Text>
          </Group>
          <ActivityList activities={activities} />
        </Group>
        <Group dir="vertical" gap={12}>
          <BrandFooter />
          <Footer />
        </Group>
      </Group>
    </PageLayout>
  )
}
