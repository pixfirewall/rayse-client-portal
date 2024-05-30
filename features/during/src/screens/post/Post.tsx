import React, { useRef, useState, useEffect, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { useDuringSelector } from '../../hooks'
import { setJourneyId, setAgentActivityData } from '../../data'
import { Box, Grid, Image } from '@rayseinc-packages/ui'
import { usePrepareActivityData, usePrepareHomeData, usePrepareJourneyData, usePrepareClosingPropertyData } from '../../hooks'
import {
  Header,
  MenuRef,
  Menu,
  TimeTaken,
  PostHomeInfo,
  Footer,
  BrandFooter,
  OtherHomes,
  ContactInfo,
  Matrix,
  HomeSlider,
  Loading,
} from '../../components'
import { MenuProvider } from '../../contexts'
import { useGetMyJourneyListQuery, useGetMyJourneyByIdQuery, useGetMyJourneyDataQuery } from '../../api'

import styles from './Closing.module.css'

import home1 from './assets/home1.jpg'

export const getClosingProperty = (data: any) :number | null => {
  if (!data?.milestones || data?.milestones.length === 0) {
    return null;
}

for (const milestone of data.milestones) {
    if (milestone.outcomes && milestone.outcomes.length > 0) {
        for (const outcome of milestone.outcomes) {
            if (outcome.journeyPropertyId) {
                return outcome.journeyPropertyId;
            }
        }
    }
}

return null;
}

export const Post = () => {
  const menuRef = useRef<MenuRef>(null)
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


	// const myJourneyData = usePrepareJourneyData(journeyData?.steps)
  const closingData = usePrepareClosingPropertyData(journey, journeyData);

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
    if (journeyList?.length && !journeyId) {
      dispatch(setJourneyId(journeyList[0].id))
      if (journeySkip && journeyDataSkip) {
        setJourneySkip(false)
        setJourneyDataSkip(false)
      }
    }
  }, [journeyId])

  useEffect(() => {
  dispatch(setAgentActivityData(closingData));
  }, [journeyData, journeyId, journeyList, closingData])

  if (!closingData) {
    return (
      <Loading/>
    )
  }

  return (
    <MenuProvider menuRef={menuRef}>
      <Menu ref={menuRef} />
      <Grid container className={styles.topContainer}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12} className={styles.sectionContainer}>
          {/* @ts-expect-error resolve this later           */}
          <TimeTaken days={closingData?.closingReport?.daysWorked} />
        </Grid>

        {/* @ts-expect-error resolve this later           */}
        {(closingData?.currentProperty) &&
        <React.Fragment>
        <Grid item xs={12}>
        {/* @ts-expect-error resolve this later           */}
        <HomeSlider images={closingData?.currentProperty?.images} />
        </Grid>

        <Grid item xs={12}>
          <PostHomeInfo
            title=""
            //@ts-expect-error resolve this later
            address={closingData?.currentProperty?.address}
            //@ts-expect-error resolve this later
            price={closingData?.currentProperty?.price}
            //@ts-expect-error resolve this later
            discount={closingData?.closingReport?.report?.purchaseVsListPrice}
            //@ts-expect-error resolve this later
            finalFee={closingData?.closingReport?.report?.purchasePrice}
            specs={[
              //@ts-expect-error resolve this later
              { value: `${closingData?.currentProperty?.bed}`, feature: 'bed' },
            //@ts-expect-error resolve this later
              { value: `${closingData?.currentProperty?.bath}`, feature: 'bath' },
            //@ts-expect-error resolve this later
              { value: `${closingData?.currentProperty?.squareFootage || 0}`, feature: 'sqft' }
            ]}
            seenStatus='SEEN 4 DAYS AGO'
          />
        </Grid>
        </React.Fragment>
        }

        <Grid item xs={12}>
          <Matrix
            title="Everything we did to close on your new home"
            agentName={journey?.primaryAgent.user.firstName ?? ''}
            agentImage={journey?.primaryAgent.user.imagePath ?? ''}
            activities={journey?.statistics.activities ?? 0}
            outcomes={journey?.statistics.outcomesFinished ?? 0}
            tours={journey?.statistics.homesToured ?? 0}
            offers={journey?.statistics.offers ?? 0}
            isJourneyClosed={true}
          />
        </Grid>

        <Grid item xs={12}>
          <OtherHomes />
        </Grid>

        <Grid item xs={12}>
          <ContactInfo
            // @ts-expect-error resolve post demo
            picture={journey?.primaryAgent.user.imagePath ?? ''}
            email="email@gmail.com"
            phone="(512) 123 - 1234"
          />
        </Grid>

        <Grid item xs={12}>
          <BrandFooter />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </MenuProvider>
  )
}
