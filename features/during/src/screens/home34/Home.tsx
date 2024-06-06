import { useDispatch } from 'react-redux'
import { Group, MainPaper, PageLayout } from '@rayseinc-packages/ui'
import React, { FunctionComponent, useEffect, useRef, useState } from 'react'

import {
  Footer,
  BrandFooter,
  Journey,
  Matrix,
  Header,
  HomeSlider,
  TimeLeft,
  HomeDetails,
  ActivityList,
  Menu,
  type MenuRef,
} from '../../components'
import { setJourneyId, setBrokerageInfo } from '../../data'
import { MenuProvider } from '../../contexts'
import { useDuringSelector, usePrepareActivityData, usePrepareJourneyData } from '../../hooks'
import { useGetMyJourneyByIdQuery, useGetMyJourneyDataQuery, useGetMyJourneyListQuery } from '../../api'

import home01 from '../../fixtures/assets/home-01.png'
import home02 from '../../fixtures/assets/home-02.png'
import home03 from '../../fixtures/assets/home-03.png'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Home34Props {}

export const Home34: FunctionComponent<Home34Props> = () => {
  const [journeySkip, setJourneySkip] = useState(true)
  const [journeyDataSkip, setJourneyDataSkip] = useState(true)
  const [journeyListSkip, setJourneyListSkip] = useState(true)

  const menuRef = useRef<MenuRef>(null)

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

  const activities = usePrepareActivityData(journeyData?.steps.find(s => s.id === 3)?.milestones)
  const myJourneyData = usePrepareJourneyData(journeyData?.steps)

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

  useEffect(() => {
    if (journey?.primaryAgent?.team?.brokerage) {
      const { name, logoImagePath, websiteUrl } = journey.primaryAgent.team.brokerage
      dispatch(setBrokerageInfo({ name, logoImagePath, websiteUrl }))
    }
  }, [journey])

  return (
    <MenuProvider menuRef={menuRef}>
      <PageLayout>
        <Group dir="vertical" gap={48} padding="12px">
          <Menu ref={menuRef} />
          <Header agentImage={journey?.primaryAgent.user.imagePath ?? ''} />
          <Group dir="vertical" gap={12}>
            <TimeLeft value={24} />
            <HomeSlider images={[home01, home02, home03]} />
            <MainPaper>
              <HomeDetails address="731 kettner Ave" price="$8,400,000" bed={2} bath={4} sqft="4,660" />
            </MainPaper>
            <ActivityList activities={activities} />
          </Group>
          <Group dir="vertical" gap={12}>
            <Matrix
              title="Here's what Julie has been up to on your behalf"
              agentName="Julie"
              activities={journey?.statistics.activities ?? 0}
              outcomes={journey?.statistics.outcomesFinished ?? 0}
              tours={journey?.statistics.homesToured ?? 0}
              offers={journey?.statistics.offers ?? 0}
            />
            <Journey data={myJourneyData} />
            <BrandFooter logoUrl={journey?.primaryAgent?.team?.brokerage?.logoImagePath || ''} />
            <Footer />
          </Group>
        </Group>
      </PageLayout>
    </MenuProvider>
  )
}
