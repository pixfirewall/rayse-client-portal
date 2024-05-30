import { useDispatch } from 'react-redux'
import { Group, MainPaper, PageLayout, Showif } from '@rayseinc-packages/ui'
import React, { FunctionComponent, useEffect, useRef, useState } from 'react'

import {
  Footer,
  BrandFooter,
  Journey,
  Matrix,
  Header,
  Evaluating,
  RejectedHomes,
  MenuRef,
  Menu,
  TimeLeft,
  HomeSlider,
  HomeDetails,
  ActivityList,
  Loading
} from '../../components'
import { setActiveStep, setAgentId, setJourneyId, setAgentActivityData } from '../../data'
import { MenuProvider } from '../../contexts'
import { useDuringSelector, usePrepareActivityData, usePrepareHomeData, usePrepareJourneyData, usePrepareClosingPropertyData } from '../../hooks'
import { useGetMyJourneyListQuery, useGetMyJourneyByIdQuery, useGetMyJourneyDataQuery } from '../../api/during'
import { State } from '../../components/Journey/JourneyCard'

import home01 from '../../fixtures/assets/home-01.png'
import home02 from '../../fixtures/assets/home-02.png'
import home03 from '../../fixtures/assets/home-03.png'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Home12Props {}

export const Home12: FunctionComponent<Home12Props> = () => {
  const [journeySkip, setJourneySkip] = useState(true)
  const [journeyDataSkip, setJourneyDataSkip] = useState(true)
  const [journeyListSkip, setJourneyListSkip] = useState(true)

  const menuRef = useRef<MenuRef>(null)

  const journeyId = useDuringSelector(state => state.DURING_REDUCER_PATH.journeyId)
  const agentId = useDuringSelector(state => state.DURING_REDUCER_PATH.agentId)
  const activeStep = useDuringSelector(state => state.DURING_REDUCER_PATH.activeStep)
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

  const homeData = usePrepareHomeData(journey?.properties)
  const myJourneyData = usePrepareJourneyData(journeyData?.steps)
  const closingData = usePrepareClosingPropertyData(journey, journeyData);
  const activities = usePrepareActivityData(
    journeyData?.steps.filter(s => activeStep.includes(s.id)).flatMap(s => s.milestones),
  )

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
		if (!agentId && journey?.primaryAgent.id) {
      dispatch(setAgentId(journey?.primaryAgent.id))
    }
  }, [journey])

  useEffect(() => {
    dispatch(setAgentActivityData(closingData));
  }, [journeyData, journeyId, journeyList, closingData])

  useEffect(() => {
    const steps =
      journeyData?.steps.reduce<{ stepId: number; state: State }[]>((acc, curr) => {
        let state: State = curr.isComplete ? State.Done : State.Inprogres
        if (!curr.isComplete && curr.milestones.length === 0) {
          state = State.Todo
        }
        acc.push({ stepId: curr.id, state })
        return acc
      }, []) ?? []
    const stepIds = steps?.filter(s => s.state === State.Inprogres).map(s => s.stepId)
    const maxStepIds = Math.max(...stepIds)
    if (maxStepIds === 1 || maxStepIds === 2) {
      dispatch(setActiveStep([1, 2]))
    }
    if (maxStepIds === 3 || maxStepIds === 4) {
      dispatch(setActiveStep([3, 4]))
    }
  }, [journeyData])

  if (!journeyData || !journey) {
    return (
      <Loading/>
    )
  }

  return (
    <MenuProvider menuRef={menuRef}>
      <Menu ref={menuRef} />
      <PageLayout>
        <Group
          dir="vertical"
          gap={48}
          padding="12px"
          sx={{
            background: 'linear-gradient(179.99deg, #FFFFFF 0.01%, #EEECE6 66.41%)',
            overflow: 'hidden',
          }}
        >
          <Header agentImage={journey?.primaryAgent.user.imagePath ?? ''} review={true} />
          <Showif con={activeStep.reduce((a, b) => a + b) === 7}>
            <Group dir="vertical" gap={12}>
              <TimeLeft value={24} />
              <HomeSlider images={[home01, home02, home03]} />
              <MainPaper>
                <HomeDetails address="731 kettner Ave" price="$8,400,000" bed={2} bath={4} sqft="4,660" />
              </MainPaper>
              <ActivityList activities={activities} />
            </Group>
          </Showif>
          <Showif con={activeStep.reduce((a, b) => a + b) === 3}>
            <Evaluating evaluating={homeData?.evaluating} offers={homeData?.offers} />
            <RejectedHomes homes={homeData?.rejected} />
          </Showif>
          <Group dir="vertical" gap={12}>
            <Matrix
              title={`This is what ${journey?.primaryAgent.user.firstName} has been up to on your behalf`}
              agentName={journey?.primaryAgent.user.firstName ?? ''}
              agentImage={journey?.primaryAgent.user.imagePath ?? ''}
              activities={journey?.statistics.activities ?? 0}
              outcomes={journey?.statistics.outcomesFinished ?? 0}
              tours={journey?.statistics.homesToured ?? 0}
              offers={journey?.statistics.offers ?? 0}
            />
            <Journey data={myJourneyData} />
            <BrandFooter />
            <Footer />
          </Group>
        </Group>
      </PageLayout>
    </MenuProvider>
  )
}
