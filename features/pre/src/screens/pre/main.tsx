import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, ScrollRestoration, Link as RouterLink } from 'react-router-dom'
import queryString from 'query-string'

import { useTheme } from '@mui/material/styles'

import { useGetAgentInfoQuery } from '../../api'
import { setAgentId, setCode } from '../../data'
import { useNavigateToPreSecondaryPage } from '../../'

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
  Link
} from '@rayseinc-packages/ui'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import { AgentProfile, TextWithHighlight } from '../../components'

import styles from './styles/main.module.css'

import graduationHat from './assets/graduation-hat.png'
import shieldPlus from './assets/shield-plus.png'
import rayseLogo from './assets/rayse-logo.png'
import checkeredImage from './assets/checkered.png'

import emptyImage from '../../assets/checkered.png'
import slide2 from './assets/slide02.png'
import slide3 from './assets/slide03.png'
import meetRaysePosterVideo from './assets/blur.jpg'
import meetRayseBgVideo from './assets/meet_rayse_bg.mp4'

export type MatchSizes = {
  xs: boolean
  mobile: boolean
  sm: boolean
  md: boolean
  tablet: boolean
  desktop: boolean
  min600: boolean
  min860: boolean
}

export const Main = () => {
  const dispatch = useDispatch()
  const location = useLocation();
  const navigateToPreSecondaryPage = useNavigateToPreSecondaryPage()
  // @ts-expect-error resolve these after demo
  const code = useSelector(state => state.PRE_REDUCER_PATH.code)
  // @ts-expect-error resolve these after demo
  const agentId = useSelector(state => state.PRE_REDUCER_PATH.agentId)

  useEffect(() => {
    const parsedQuery = queryString.parse(location.search);
    const rawCode = parsedQuery?.['code'] || '';
    const rawAgentId = parsedQuery?.['agentId'] || '';

    // @ts-expect-error resolve these after demo
    const decodedCode = decodeURIComponent(rawCode);
    // @ts-expect-error resolve these after demo
    const decodedAgentId = decodeURIComponent(rawAgentId);

    dispatch(setCode(decodedCode));
    dispatch(setAgentId(Number(decodedAgentId)));
  }, [dispatch, location.search]);

  if (isNaN(agentId)) {
    return (<Box>
      * ERROR: Please provide the agent id in the url. Example: <Link href={`/intro?agentId=${80208}`} color="primary">
        /intro?agentId=80208
      </Link>
    </Box>)
  }



  const theme = useTheme()
  const matchSize: MatchSizes = {
    xs: useMediaQuery(theme.breakpoints.up('xs')),
    mobile: useMediaQuery(theme.breakpoints.up('mobile')),
    sm: useMediaQuery(theme.breakpoints.up('sm')),
    md: useMediaQuery(theme.breakpoints.up('md')),
    tablet: useMediaQuery(theme.breakpoints.up('tablet')),
    desktop: useMediaQuery(theme.breakpoints.up('desktop')),
    min600: useMediaQuery('(min-width:600px)'),
    min860: useMediaQuery('(min-width:860px)')
  }

  const {
    data: agentInfo,
    isLoading
  } = useGetAgentInfoQuery({ id: agentId as number })

  const dutySectionIconSize = matchSize.tablet ? '64px' : '56px'

  const sliderImages = [slide2, slide3]
  const sliderCaptions = [
    ['Because having an', 'expert', 'is key(s).'],
    ['Because', 'homeowning >', 'homescrolling.'],
    ['Because you can’t return', 'a house.', '']
  ]

  return (
    <Grid container className={styles.topContainer}>
      <ScrollRestoration />

      <Grid container item className={styles.topNavBar} xs={12}>
        <Grid item>
          <RayseIcon size={56} iconSize={40} />
        </Grid>
        <Grid item>
          <RouterLink to={`/register`}>
            <LongButton color="darkGreen">
              <Box
                className={styles.agentButtonIcon}
                style={{
                  backgroundImage: `url(${agentInfo?.user?.imagePath})`
                }}
              />
              <Text variant="rayse-20700">
                Get started
              </Text>
              {matchSize.sm && <Box style={{ width: '24px' }} />}
              <WhiteIcon material="arrow_forward" />
            </LongButton>
          </RouterLink>
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
              spaceBetween={20}
              pagination={{
                bulletActiveClass: clsx('swiper-pagination-bullet-active', styles.swiperBulletActive),
                bulletClass: clsx('swiper-pagination-bullet', styles.swiperBullet)
              }}
              modules={[Pagination]}
              className={styles.imageSwiperContainer}
            >
              {(agentInfo?.headshotImagePath
                ? [agentInfo.headshotImagePath, ...sliderImages]
                : [emptyImage, ...sliderImages])
                .map((value, index) => (
                  <SwiperSlide key={index}>
                    <Image src={value}
                      width="100%"
                      height={414.428}
                      style={{
                        borderRadius: '24px 24px 0 0',
                        objectPosition: '50% 20%',
                        objectFit: 'cover'
                      }}
                    />
                    <Box
                      className={styles.imageSlideCaption}
                      height="50px"
                    >
                      <TextWithHighlight
                        pre={sliderCaptions[index][0]}
                        highlighted={sliderCaptions[index][1]}
                        post={sliderCaptions[index][2]}
                        highlightColor="#FFD800"
                        variant={matchSize.sm ? "rayse-32700" : "rayse-24700"}
                      />
                    </Box>
                  </SwiperSlide>
                ))}
            </Swiper>
          </Box>
        </Grid>
      </Grid>

      <Grid container item className={styles.sectionTwo} paddingTop="30px" xs={12}>
        <Grid item xs={12}>
          <Box style={{ maxWidth: '700px', margin: 'auto' }}>
            <Text
              variant={matchSize.tablet ? "rayse-68700" : "rayse-32700"}
              lineHeight={matchSize.tablet ? "78px" : "36px"}
            >
              The search is only 5% of the process.
            </Text>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box style={{ maxWidth: '920px', margin: 'auto' }}>
            <Text variant={matchSize.tablet ? "rayse-24400" : "rayse-20400"}>
              I’ll help you navigate 100 percent of it, all mapped out in advance, with easy information sharing and real-time collaboration.
            </Text>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" alignItems="center" justifyContent="center" className={styles.meetRayseWrapper}>
            <Box className={styles.meetRayseContainer}>
              <video
                className={styles.meetRayseVideoBg}
                src={meetRayseBgVideo}
                poster={meetRaysePosterVideo}
                loop
                muted
                autoPlay
                playsInline
              />
              <WhiteButton onClick={() => navigateToPreSecondaryPage(agentId)}>
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
            <Box className={
              matchSize.md
                ? styles.brokerageIdSection
                : styles.brokerageIdSectionSmall
            }>
              <Image
                src={agentInfo?.team?.brokerage?.logoImagePath || checkeredImage}
                className={matchSize.tablet ? styles.companyLogo
                  : (matchSize.sm ? styles.companyLogoMobile : styles.companyLogoTiny)}
              />
              {agentInfo?.team?.imagePath &&
              <React.Fragment>
                <Divider className={styles.collabDivider} orientation="vertical" flexItem />
                <Image
                  src={agentInfo?.team?.imagePath || checkeredImage}
                  className={matchSize.tablet ? styles.companyLogo
                    : (matchSize.sm ? styles.companyLogoMobile : styles.companyLogoTiny)}
                />
              </React.Fragment>
                }
            </Box>

            <Box paddingTop={matchSize.md ? '32px' : '0'}>
              <Link href={agentInfo?.team?.brokerage?.websiteUrl} target="_blank" style={{ cursor: 'pointer' }}>
                <WhiteButton>
                  <Text variant="rayse-20700">
                    Learn more
                  </Text>
                  <YellowIcon material="arrow_forward" />
                </WhiteButton>
              </Link>
            </Box>
          </Box>

          <Divider className={styles.collabDivider} orientation="horizontal" flexItem />
          <Text variant={matchSize.tablet ? "rayse-32700" : "rayse-18400"} color="#FFF" align="left">
          Our collaboration is all the more valuable with the support, access and expertise of my team I’m proud to be a part of. Together, we are leading the way forward in residential real estate.
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

            <RouterLink to={`/register`}>
              <LongButton color="lightGreen">
                <Box
                  className={styles.agentButtonIcon}
                  style={{
                    backgroundImage: `url(${agentInfo?.headshotImagePath})`
                  }}
                />
                <Text variant="rayse-20700">
                  Get started
                </Text>
                {matchSize.sm && <Box style={{ width: '24px' }} />}
                <WhiteIcon material="arrow_forward" />
              </LongButton>
            </RouterLink>

          </Box>
        </Box>
      </Grid>

    </Grid>
  )
}
