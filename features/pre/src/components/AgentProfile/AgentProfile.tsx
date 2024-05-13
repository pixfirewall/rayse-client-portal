import React from 'react'
import { Box, Text, Grid, Image, YellowIconPre, PlainHoverButton } from '@rayseinc-packages/ui'

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'

import { SocialContact } from '../'

import styles from './AgentProfile.module.css'

import avatar1 from './avatar1.png'
import avatar2 from './avatar2.png'
import avatar3 from './avatar3.png'

export const AgentProfile = () => {
  const avatarPics = [avatar1, avatar2, avatar3, avatar1, avatar2, avatar3, avatar1]
  const reviewTexts = [
    `Julie was so clear on everything on the path to finding our dream home (we did!) that…`,
    `As first-time homeowners we didn’t know what to expect. But Julie always made sure
    what whatever we did as customers never escaped the attention of the employers in god knows where!`,
    `10/10. I tell everyone who will listen: Julie Capinstand! Julie Capinstand!`,
    `Julie was so clear on everything on the path to finding our dream home (we did!) that…`,
    `As first-time homeowners we didn’t know what to expect. But Julie always made sure`,
    `10/10. I tell everyone who will listen: Julie Capinstand! Julie Capinstand!`,
    `Julie was so clear on everything on the path to finding our dream home (we did!) that…`
  ]
  let swiper = useSwiper()

  return (
    <Box className={styles.profileContainer}>
      <Box className={styles.profileTopSection}>
        <Box className={styles.profileImage} />

        <Box className={styles.profileDetailsContainer}>
          <Text variant="rayse-36700" color="#FFF" padding="40px 40px 0 40px">
            Julie Capinstand
          </Text>
          <Text variant="rayse-32700" color="#FFF" padding="0 40px 0 40px" textAlign="left">
            I’m committed to being your advocate on-demand, honoring your trust and partnership
            through your unique home-buying journey.
          </Text>
          <Box className={styles.profileContactInfoContainer}>
            <Text variant="rayse-24400" color="#FFF" textAlign="left">
              Eliot Park Residential DRE #02095311
            </Text>
            <Text variant="rayse-24400" color="#FFF" textAlign="left">
              (555) 654-6675
            </Text>
            <Text variant="rayse-24400" color="#FFF" textAlign="left">
              jcapinstand@eliotpark.com
            </Text>
          </Box>

          <Grid container style={{ padding: '0 40px 40px 40px' }} rowSpacing={2} columnSpacing={4}>
            <Grid item xs={6}>
              <SocialContact socialNetwork="facebook" infoText="@13579" />
            </Grid>
            <Grid item xs={6}>
              <SocialContact socialNetwork="facebook" infoText="@13579" />
            </Grid>
            <Grid item xs={6}>
              <SocialContact socialNetwork="facebook" infoText="@13579" />
            </Grid>
            <Grid item xs={6}>
              <SocialContact socialNetwork="facebook" infoText="@13579" />
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box className={styles.profileBottomSection}>
        <Box>
          <Text variant="rayse-44700" color="#FFF" width="210px" textAlign="left">
            Julie's reviews
          </Text>
        </Box>

        <Box className={styles.reviewSlideContainer}>
          <Swiper
            slidesPerView={3}
            loop
            spaceBetween={10}
            className={styles.reviewSwiperContainer}
            onSwiper={swp => swiper = swp }
          >
            {avatarPics.map((value, index) => (
              <SwiperSlide key={index}>
                <Box className={styles.reviewBox}>
                  <Text className={styles.reviewText} variant="rayse-20400">
                    {reviewTexts[index]}
                  </Text>
                  <Image src={value} width="40px" height="40px" />
                </Box>
              </SwiperSlide>
            ))}

            <PlainHoverButton onClick={() => swiper.slideNext()} style={{
              position: 'absolute',
              right: '0px',
              top: '40%',
              zIndex: 1,
              overflow: 'visible'
            }}>
              <YellowIconPre material="chevron_right" size={50} fontSize="36px" />
            </PlainHoverButton>
          </Swiper>
        </Box>
      </Box>
    </Box>
  )
}
