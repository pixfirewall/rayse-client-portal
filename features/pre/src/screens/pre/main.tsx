import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'

import { useTheme } from '@mui/material/styles'

import { useGetAgentInfoQuery } from '../../api'
import { setAgentId } from '../../data'
import { usePreSelector } from '../../hooks'

import { clsx } from 'clsx'
import useMediaQuery from '@mui/material/useMediaQuery'
import {
  Box,
  Text,
  YellowIcon,
  WhiteButton,
  Image,
  Divider,
  LongButton,
  WhiteIcon,
  RayseIcon,
  Grid,
  Skeleton
} from '@rayseinc-packages/ui'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import { AgentProfile } from '../../components'

import styles from './styles/main.module.css'

import berkshireImage from './berkshire.png'
import graduationHat from './graduation-hat.png'
import shieldPlus from './shield-plus.png'
import rayseLogo from './rayse-logo.png'
import checkeredImage from './assets/checkered.png'

import slide1 from './slide01.png'
import slide2 from './slide02.png'
import slide3 from './slide03.png'

export type MatchSizes = {
  xs: boolean
  mobile: boolean
  sm: boolean
  tablet: boolean
  desktop: boolean
  min600: boolean
  min860: boolean
}

const DEFAULT_AGENT_ID = 80224

export const Main = () => {
  const location = useLocation()
  const agentId = Number(queryString.parse(location.search)?.['agent'])

  if (isNaN(agentId)) {
    return (<Box>
      * ERROR: Please provide the agent id in the url. Example: /pre?agent={DEFAULT_AGENT_ID}
    </Box>)
  }

  const dispatch = useDispatch()
  dispatch(setAgentId(agentId))

  const theme = useTheme()
  const matchSize: MatchSizes = {
    xs: useMediaQuery(theme.breakpoints.up('xs')),
    mobile: useMediaQuery(theme.breakpoints.up('mobile')),
    sm: useMediaQuery(theme.breakpoints.up('sm')),
    tablet: useMediaQuery(theme.breakpoints.up('tablet')),
    desktop: useMediaQuery(theme.breakpoints.up('desktop')),
    min600: useMediaQuery('(min-width:600px)'),
    min860: useMediaQuery('(min-width:860px)')
  }

  const {
    data: agentInfo,
    error,
    isLoading
  } = useGetAgentInfoQuery({ id: agentId as number })

  const dutySectionIconSize = matchSize.tablet ? '64px' : '56px'

  const sliderImages = [slide1, slide2, slide3]
  const sliderCaptions = [
    'Because having an expert is key(s).',
    'Because homeowning > homescrolling.',
    'Because you can’t return a house.'
  ]

  return (
    <Grid container className={styles.topContainer}>

      <Grid container item className={styles.topNavBar} xs={12}>
        <Grid item>
          <RayseIcon size={56} iconSize={40} />
        </Grid>
        <Grid item>
          <LongButton color="darkGreen">
            <Box className={styles.agentButtonIcon} />
            <Text variant="rayse-20700">
              Get started
            </Text>
            {matchSize.sm && <Box style={{ width: '24px' }} />}
            <WhiteIcon material="arrow_forward" />
          </LongButton>
        </Grid>
      </Grid>

      <Grid container item className={styles.sectionContainer} xs={12}>
        <Grid item xs={12} paddingTop="30px">
          <Text variant={matchSize.tablet ? 'rayse-68700' : 'rayse-36700'}>
            Let's find your way home!
          </Text>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Text variant={matchSize.tablet ? 'rayse-24400' : 'rayse-20400'} width="880px" align="center">
              As your advocate on-demand, I’m committed to honoring your trust and partnership through every step of the journey.
            </Text>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" alignItems="center" justifyContent="center" margin="10px">
            <Swiper
              slidesPerView={1}
              loop
              spaceBetween={20}
              pagination={{
                bulletActiveClass: clsx('swiper-pagination-bullet-active', styles.swiperBulletActive),
                bulletClass: clsx('swiper-pagination-bullet', styles.swiperBullet)
              }}
              modules={[Pagination]}
              className={styles.imageSwiperContainer}
            >
              {sliderImages.map((value, index) => (
                <SwiperSlide key={index}>
                  <Image src={value}
                    width="100%"
                    height="414.428px"
                    style={{
                      borderRadius: '24px 24px 0 0',
                      objectPosition: '50% 50%',
                      objectFit: 'cover'
                    }}
                  />
                  <Text
                    variant={matchSize.sm ? "rayse-32700" : "rayse-24700"}
                    className={styles.imageSlideCaption}
                    height="50px"
                  >
                    {sliderCaptions[index]}
                  </Text>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Grid>
      </Grid>

      <Grid container item className={styles.sectionTwo} paddingTop="30px" xs={12}>
        <Grid item xs={12}>
          <Text
            variant={matchSize.tablet ? "rayse-68700" : "rayse-32700"}
            width="700px"
            lineHeight={matchSize.tablet ? "78px" : "36px"}
          >
            The search is only 5% of the process.
          </Text>
        </Grid>
        <Grid item xs={12}>
          <Text variant={matchSize.tablet ? "rayse-24400" : "rayse-20400"}>
            I’ll help you navigate 100 percent of it, all mapped out in advance, with easy information sharing and real-time collaboration.
          </Text>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Box className={styles.meetRayseContainer}>
              <WhiteButton>
                <Text variant="rayse-32700">
                  Meet Rayse
                </Text>
                <YellowIcon material="arrow_forward" />
              </WhiteButton>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Grid item className={styles.sectionContainer} xs={12}>
        <AgentProfile matchSize={matchSize} data={agentInfo} isLoading={isLoading} />
      </Grid>

      <Grid item className={styles.sectionContainer} xs={12}>
        <Box className={styles.collaborationContainer} margin="auto">
          <Box className={styles.collabTop}>
            <Image
              src={matchSize.tablet ? berkshireImage : checkeredImage}
              className={matchSize.tablet ? styles.companyLogo
                : (matchSize.sm ? styles.companyLogoMobile : styles.companyLogoTiny)}
            />

            <WhiteButton>
              <Text variant="rayse-20700">
                Learn more
              </Text>
              <YellowIcon material="arrow_forward" />
            </WhiteButton>
          </Box>

          <Divider className={styles.collabDivider} orientation="horizontal" flexItem />
          <Text variant={matchSize.tablet ? "rayse-32700" : "rayse-18400"} color="#FFF" align="left">
            Our collaboration is all the more valuable with the support, access and expertise of the team
            I’m proud to be a part of in leading the way forward in residential real estate.
          </Text>
        </Box>
      </Grid>

      <Grid item className={styles.sectionContainer} xs={12}>
        <Box className={styles.dutySection} margin="auto">
          <Box className={styles.dutySectionTop}>
            <Image src={graduationHat} width={dutySectionIconSize} height={dutySectionIconSize} />
            <Image src={shieldPlus} width={dutySectionIconSize} height={dutySectionIconSize} />
          </Box>

          <Text variant={matchSize.tablet ? "rayse-44700" : "rayse-32700"} color="#171717" textAlign="left">
            I take my fiduciary duty seriously.
          </Text>

          <Text variant={matchSize.tablet ? "rayse-24400" : "rayse-18400"} color="#171717" textAlign="left">
            You’re making a new future for yourself and your family. I’m making it my job to protect you—from surprises,
            from unknowns, from bad actors and small print and potential obstacles that range from the size of two termites
            to a four-lane highway or flood zone. I’m here as your first line of defense to help you anticipate,
            negotiate and pre-empt the many legal and financial challenges to successful homeowning.
          </Text>
        </Box>
      </Grid>

      <Grid item className={styles.sectionContainer} xs={12}>
        <Box className={styles.bottomSection} margin="auto">
          <Text variant={matchSize.tablet ? "rayse-44700" : "rayse-32700"} color="#171717" textAlign="left" padding="40px">
            Clarity. Accountability. Collaboration.
          </Text>
          <Divider
            sx={{ background: '#FFF', 'border-width': '2px', opacity: 0.9, 'border-color': '#FFF' }}
            orientation="horizontal"
            flexItem
          />

          <Box className={styles.bottomSectionLower}>
            <Image src={rayseLogo} className={matchSize.tablet ? styles.rayseLogo : styles.rayseLogoMobile} />

            <LongButton color="lightGreen">
              <Box className={styles.agentButtonIcon} />
              <Text variant="rayse-20700">
                Get started
              </Text>
              {matchSize.sm && <Box style={{ width: '24px' }} />}
              <WhiteIcon material="arrow_forward" />
            </LongButton>

          </Box>
        </Box>
      </Grid>

    </Grid>
  )
}
