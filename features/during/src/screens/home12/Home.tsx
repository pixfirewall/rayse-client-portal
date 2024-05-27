import { useDispatch } from 'react-redux'
import { Group, PageLayout } from '@rayseinc-packages/ui'
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
} from '../../components'
import { setJourneyId } from '../../data'
import { MenuProvider } from '../../contexts'
import { useDuringSelector, usePrepareHomeData, usePrepareJourneyData } from '../../hooks'
import { useGetMyJourneyListQuery, useGetMyJourneyByIdQuery, useGetMyJourneyDataQuery } from '../../api/during'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Home12Props {}

export const Home12: FunctionComponent<Home12Props> = () => {
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

	const homeData = usePrepareHomeData(journey?.properties)
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
    // do something if required
  }, [journey])

  useEffect(() => {
    // do something if required
  }, [journeyData])

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
          <Evaluating evaluating={homeData?.evaluating} offers={homeData?.offers} />
          <RejectedHomes homes={homeData?.rejected} />
          <Group dir="vertical" gap={12}>
            <Matrix
              title="This is what Julie has been up to on your behalf"
              agentName="Julie"
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
