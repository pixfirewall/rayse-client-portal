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
import { useDuringSelector } from '../../hooks'
import { homeData } from '../../fixtures/homeData'
import { useGetMyJourneyListQuery, useGetMuJourneyByIdQuery } from '../../api/during'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Home12Props {}

export const Home12: FunctionComponent<Home12Props> = () => {
  const [journeySkip, setJourneySkip] = useState(true)
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
  } = useGetMuJourneyByIdQuery({ journeyId }, { skip: journeySkip })

  useEffect(() => {
		if (journeySkip && journeyListSkip) {
			if (journeyId) {
				setJourneySkip(false)
      } else {
        setJourneyListSkip(false)
      }
    }
  }, [])

  useEffect(() => {
    if (journeyList?.length) {
      dispatch(setJourneyId(journeyList[0].id))
      if (journeySkip) {
        setJourneySkip(false)
      }
    }
  }, [journeyList])

  useEffect(() => {
    // do something if required
  }, [journey])

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
          <Header review={true} />
          <Evaluating homes={homeData} />
          <RejectedHomes homes={homeData.map(home => ({ ...home, label: true }))} />
          <Group dir="vertical" gap={12}>
            <Matrix
              title="This is what Julie has been up to on your behalf"
              agentName="Julie"
              activities={34}
              outcomes={42}
              tours={15}
              offers={1}
            />
            <Journey />
            <BrandFooter />
            <Footer />
          </Group>
        </Group>
      </PageLayout>
    </MenuProvider>
  )
}
