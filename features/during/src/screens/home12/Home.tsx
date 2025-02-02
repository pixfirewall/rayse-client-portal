import { useDispatch } from 'react-redux'
import { Group, MainPaper, PageLayout, Showif, Grid } from '@rayseinc-packages/ui'
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
  PostHomeInfo,
  ActivityList,
  Loading,
  ContactInfoSmall,
  OtherHomes,
} from '../../components'
import {
  setActiveStep,
  setAgentId,
  setJourneyId,
  setIsJourneyClosed,
  setAgentActivityData,
  setBrokerageInfo,
} from '../../data'
import { MenuProvider } from '../../contexts'
import {
  useDuringSelector,
  usePrepareActivityData,
  usePrepareHomeData,
  usePrepareJourneyData,
  usePrepareDuringPropertyData,
} from '../../hooks'
import { useGetMyJourneyListQuery, useGetMyJourneyByIdQuery, useGetMyJourneyDataQuery } from '../../api/during'
import { State } from '../../components/Journey/JourneyCard'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Home12Props {}

export const Home12: FunctionComponent<Home12Props> = () => {
  const [journeySkip, setJourneySkip] = useState(true)
  const [journeyDataSkip, setJourneyDataSkip] = useState(true)
  const [journeyListSkip, setJourneyListSkip] = useState(true)

  const menuRef = useRef<MenuRef>(null)

  const isJourneyClosed = useDuringSelector(state => state.DURING_REDUCER_PATH.isJourneyClosed)
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
  const closingData = usePrepareDuringPropertyData(journey, journeyData)
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
    if (journey?.closeDate) {
      dispatch(setIsJourneyClosed(true))
    }
    if (!agentId && journey?.primaryAgent.id) {
      dispatch(setAgentId(journey?.primaryAgent.id))
    }
    if (journey?.primaryAgent?.team?.brokerage) {
      const { name, logoImagePath, websiteUrl } = journey.primaryAgent.team.brokerage
      dispatch(setBrokerageInfo({ name, logoImagePath, websiteUrl }))
    }
  }, [journey])

  useEffect(() => {
    dispatch(setAgentActivityData(closingData))
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
    return <Loading />
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
              {/* @ts-expect-error resolve this later           */}
              <HomeSlider images={closingData?.currentProperty?.images || []} />
              <MainPaper>
                <PostHomeInfo
                  //@ts-expect-error resolve this later
                  address={closingData?.currentProperty?.address}
                  //@ts-expect-error resolve this later
                  price={closingData?.currentProperty?.price}
                  //@ts-expect-error resolve this later
                  discount={isJourneyClosed ? closingData?.closingReport?.report?.purchaseVsListPrice : null}
                  //@ts-expect-error resolve this later
                  finalFee={isJourneyClosed ? closingData?.closingReport?.report?.purchasePrice : null}
                  specs={[
                    //@ts-expect-error resolve this later
                    { value: `${closingData?.currentProperty?.bed}`, feature: 'bed' },
                    //@ts-expect-error resolve this later
                    { value: `${closingData?.currentProperty?.bath}`, feature: 'bath' },
                    //@ts-expect-error resolve this later
                    { value: `${closingData?.currentProperty?.squareFootage || 0}`, feature: 'sqft' },
                  ]}
                />
              </MainPaper>
              {!isJourneyClosed && <ActivityList activities={activities} />}
            </Group>
          </Showif>
          <Showif con={activeStep.reduce((a, b) => a + b) === 3}>
            <Evaluating evaluating={homeData?.evaluating} offers={homeData?.offers} />
            <RejectedHomes homes={homeData?.rejected} />
          </Showif>
          <Group dir="vertical" gap={12}>
            <Matrix
              title={
                isJourneyClosed
                  ? `Everything we did to close on your new home`
                  : `Here's what ${journey?.primaryAgent.user.firstName} has been up to on your behalf`
              }
              agentName={journey?.primaryAgent.user.firstName ?? ''}
              agentImage={journey?.primaryAgent.user.imagePath ?? ''}
              activities={journey?.statistics.activities ?? 0}
              outcomes={journey?.statistics.outcomesFinished ?? 0}
              tours={journey?.statistics.homesToured ?? 0}
              offers={journey?.statistics.offers ?? 0}
              isJourneyClosed={isJourneyClosed}
            />
            {!isJourneyClosed && <Journey data={myJourneyData} />}
            {isJourneyClosed && (
              <React.Fragment>
                <Grid item xs={12}>
                  <OtherHomes />
                </Grid>
                <Grid item xs={12}>
                  <ContactInfoSmall
                    picture={journey?.primaryAgent.user.imagePath ?? ''}
                    //@ts-expect-error resolve later
                    email={closingData?.closingReport?.agentEmail}
                    //@ts-expect-error resolve later
                    phone={closingData?.closingReport?.agentPhone}
                  />
                </Grid>
              </React.Fragment>
            )}
            <BrandFooter logoUrl={journey?.primaryAgent?.team?.brokerage?.logoImagePath || ''} />
            <Footer />
          </Group>
        </Group>
      </PageLayout>
    </MenuProvider>
  )
}
