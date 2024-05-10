import React from 'react'
import {
  Box,
  Text,
  YellowIcon,
  WhiteButton,
  Image,
  Divider,
  GreenButton,
  WhiteIcon
 } from '@rayseinc-packages/ui'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import { AgentProfile } from '../../components'

import './styles/main.css'

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
    <Box className="top-container">

      <Box className="section-container">
        <Box className="top-section">
          <Text fontSize="68px" fontWeight="500">
            Let's find your way home!
          </Text>
          <Text fontSize="24px">
            As your advocate on-demand, I’m committed to honoring your trust and partnership through every step of the journey.
          </Text>

          <Box className="image-slide-container">
            <Swiper
              slidesPerView={1}
              loop
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="image-swiper-container"
            >
              {sliderImages.map((value, index) => (
                <SwiperSlide key={index}>
                  <Image src={value} width="740.07px" height="414.428px" style={{ borderRadius: '24px 24px 0 0' }} />
                  <Text fontSize="32px" className="image-slide-caption" height="50px">
                    {sliderCaptions[index]}
                  </Text>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      </Box>

      <Box className="section-container">
        <Box className="section-two">
          <Text fontSize="68px" fontWeight="500" width="600px" lineHeight="78px">
            The search is only 5% of the process.
          </Text>
          <Text fontSize="24px">
            I’ll help you navigate 100 percent of it, all mapped out in advance, with easy information sharing and real-time collaboration.
          </Text>

          <Box className="meet-rayse-container">
            <WhiteButton>
              <Text fontSize="24px" fontWeight="600">
                Meet Rayse
              </Text>
              <YellowIcon material="arrow_forward" />
            </WhiteButton>
          </Box>
        </Box>
      </Box>

      <Box className="section-container">
        <AgentProfile />
      </Box>

      <Box className="section-container">
        <Box className="collaboration-container">
          <Box className="collab-top">
            <Image src={berkshireImage} width="351" height="68" />

            <WhiteButton>
              <Text fontSize="24px" fontWeight="600">
                Learn more
              </Text>
              <YellowIcon material="arrow_forward" />
            </WhiteButton>
          </Box>

          <Divider className="collab-divider" orientation="horizontal" flexItem />
          <Text fontSize="32px" color="#FFF" fontWeight={700}>
            Our collaboration is all the more valuable with the support, access and expertise of the team
            I’m proud to be a part of in leading the way forward in residential real estate. 
          </Text>
        </Box>
      </Box>

      <Box className="section-container">
        <Box className="duty-section">
          <Box className="duty-section-top">
            <Image src={graduationHat} width="64px" height="64px" />
            <Image src={shieldPlus} width="64px" height="64px" />
          </Box>

          <Text fontSize="44px" color="#171717" fontWeight={700} textAlign="left">
            I take my fiduciary duty seriously.
          </Text>

          <Text fontSize="24px" color="#171717" textAlign="left">
            You’re making a new future for yourself and your family. I’m making it my job to protect you—from surprises,
            from unknowns, from bad actors and small print and potential obstacles that range from the size of two termites
            to a four-lane highway or flood zone. I’m here as your first line of defense to help you anticipate,
            negotiate and pre-empt the many legal and financial challenges to successful homeowning.
          </Text>
        </Box>
      </Box>

      <Box className="section-container">
        <Box className="bottom-section">
          <Text fontSize="44px" color="#171717" fontWeight={700} textAlign="left" padding="40px">
            Clarity. Accountability. Collaboration.
          </Text>
          <Divider className="collab-divider" orientation="horizontal" flexItem />

          <Box className="bottom-section-lower">
            <Image src={rayseLogo} width="360px" height="108px" />
            <GreenButton>
              <Box className="agent-button-icon" />
              <Text fontSize="20px">
                Get started
              </Text>
              <WhiteIcon material="arrow_forward" />
            </GreenButton>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
