import React from 'react'
import {
  Box,
  Text,
  YellowIcon,
  WhiteButton,
  Image,
  Divider,
  LongButton,
  WhiteIcon,
  RayseIcon
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

import slide1 from './slide01.png'
import slide2 from './slide02.png'
import slide3 from './slide03.png'

export const Main = () => {
  const sliderImages = [slide1, slide2, slide3]
  const sliderCaptions = [
    'Because having an expert is key(s).',
    'Because homeowning > homescrolling.',
    'Because you can’t return a house.'
  ]

  return (
    <Box className={styles.topContainer}>

      <Box className={styles.topNavBar}>
        <RayseIcon size={56} iconSize={40} />
        <LongButton color="darkGreen">
          <Box className={styles.agentButtonIcon} />
          <Text variant="rayse-20700">
            Get started
          </Text>
          <Box style={{ width: '24px' }} />
          <WhiteIcon material="arrow_forward" />
        </LongButton>
      </Box>

      <Box className={styles.sectionContainer}>
        <Box className={styles.topSection}>
          <Text variant="rayse-68700">
            Let's find your way home!
          </Text>
          <Text variant="rayse-24400">
            As your advocate on-demand, I’m committed to honoring your trust and partnership through every step of the journey.
          </Text>

          <Box className={styles.imageSlideContainer}>
            <Swiper
              slidesPerView={1}
              loop
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className={styles.imageSwiperContainer}
            >
              {sliderImages.map((value, index) => (
                <SwiperSlide key={index}>
                  <Image src={value} width="740.07px" height="414.428px" style={{ borderRadius: '24px 24px 0 0' }} />
                  <Text variant="rayse-32700" className={styles.imageSlideCaption} height="50px">
                    {sliderCaptions[index]}
                  </Text>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      </Box>

      <Box className={styles.sectionContainer}>
        <Box className={styles.sectionTwo}>
          <Text variant="rayse-68700" width="700px" lineHeight="78px">
            The search is only 5% of the process.
          </Text>
          <Text variant="rayse-24400">
            I’ll help you navigate 100 percent of it, all mapped out in advance, with easy information sharing and real-time collaboration.
          </Text>

          <Box className={styles.meetRayseContainer}>
            <WhiteButton>
              <Text variant="rayse-32700">
                Meet Rayse
              </Text>
              <YellowIcon material="arrow_forward" />
            </WhiteButton>
          </Box>
        </Box>
      </Box>

      <Box className={styles.sectionContainer}>
        <AgentProfile />
      </Box>

      <Box className={styles.sectionContainer}>
        <Box className={styles.collaborationContainer}>
          <Box className={styles.collabTop}>
            <Image src={berkshireImage} width="351" height="68" />

            <WhiteButton>
              <Text variant="rayse-20700">
                Learn more
              </Text>
              <YellowIcon material="arrow_forward" />
            </WhiteButton>
          </Box>

          <Divider className={styles.collabDivider} orientation="horizontal" flexItem />
          <Text variant="rayse-32700" color="#FFF">
            Our collaboration is all the more valuable with the support, access and expertise of the team
            I’m proud to be a part of in leading the way forward in residential real estate. 
          </Text>
        </Box>
      </Box>

      <Box className={styles.sectionContainer}>
        <Box className={styles.dutySection}>
          <Box className={styles.dutySectionTop}>
            <Image src={graduationHat} width="64px" height="64px" />
            <Image src={shieldPlus} width="64px" height="64px" />
          </Box>

          <Text variant="rayse-44700" color="#171717" textAlign="left">
            I take my fiduciary duty seriously.
          </Text>

          <Text variant="rayse-24400" color="#171717" textAlign="left">
            You’re making a new future for yourself and your family. I’m making it my job to protect you—from surprises,
            from unknowns, from bad actors and small print and potential obstacles that range from the size of two termites
            to a four-lane highway or flood zone. I’m here as your first line of defense to help you anticipate,
            negotiate and pre-empt the many legal and financial challenges to successful homeowning.
          </Text>
        </Box>
      </Box>

      <Box className={styles.sectionContainer}>
        <Box className={styles.bottomSection}>
          <Text variant="rayse-44700" color="#171717" textAlign="left" padding="40px">
            Clarity. Accountability. Collaboration.
          </Text>
          <Divider className={styles.collabDivider} orientation="horizontal" flexItem />

          <Box className={styles.bottomSectionLower}>
            <Image src={rayseLogo} width="360px" height="108px" />
            <LongButton color="lightGreen">
              <Box className={styles.agentButtonIcon} />
              <Text variant="rayse-20700">
                Get started
              </Text>
              <Box style={{ width: '24px' }} />
              <WhiteIcon material="arrow_forward" />
            </LongButton>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
