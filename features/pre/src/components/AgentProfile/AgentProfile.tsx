import React from 'react'
import { Box, Text, Grid, Image, YellowIconPre, PlainHoverButton } from '@rayseinc-packages/ui'

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'

import { SocialContact } from '../'

import styles from './AgentProfile.module.css'

import avatar1 from './avatar1.png'
import avatar2 from './avatar2.png'
import avatar3 from './avatar3.png'

import type { MatchSizes } from '../../screens/pre/index'

type Props = {
  matchSize: MatchSizes
}

export const AgentProfile = ({ matchSize }: Props) => {
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
    <Box className={styles.profileContainer} margin="auto">
      <Box className={matchSize.tablet ? styles.profileTopSection : styles.profileTopSectionMobile}>
        <Box
          className={matchSize.tablet ? styles.profileImage : styles.profileImageMobile}
        />

        <Box
          className={styles.profileDetailsContainer}
          style={matchSize.tablet
            ? { height: '730px' }
            : { gap: '48px' }
          }
        >
          <Text variant={matchSize.tablet ? "rayse-36700" : "rayse-32700"} color="#FFF" padding="40px 40px 0 40px" textAlign="left">
            Julie Capinstand
          </Text>
          <Text variant={matchSize.tablet ? "rayse-32700" : "rayse-20700"} color="#FFF" padding="0 40px 0 40px" textAlign="left">
            I’m committed to being your advocate on-demand, honoring your trust and partnership
            through your unique home-buying journey.
          </Text>
          <Box className={styles.profileContactInfoContainer}>
            <Text variant={matchSize.tablet ? "rayse-24400" : "rayse-20400"} color="#FFF" textAlign="left">
              Eliot Park Residential
            </Text>
            <Text variant={matchSize.tablet ? "rayse-24400" : "rayse-20400"} color="#FFF" textAlign="left">
              DRE #02095311
            </Text>
            <Text variant={matchSize.tablet ? "rayse-24400" : "rayse-20400"} color="#FFF" textAlign="left">
              (555) 654-6675
            </Text>
            <Text variant={matchSize.tablet ? "rayse-24400" : "rayse-20400"} color="#FFF" textAlign="left">
              jcapinstand@eliotpark.com
            </Text>
          </Box>

          <Grid container style={{ padding: '0 40px 40px 40px' }} rowSpacing={2} columnSpacing={4}>
            <Grid item xs={12} tablet={6}>
              {matchSize.tablet ? (
                <SocialContact socialNetwork="linkedin" infoText="@13579" variant="rayse-32400" size="52px" />
              ) : (
                <SocialContact socialNetwork="linkedin" infoText="@13579" variant="rayse-20400" size="36px" />
              )}
            </Grid>
            <Grid item xs={12} tablet={6}>
              {matchSize.tablet ? (
                <SocialContact socialNetwork="facebook" infoText="@13579" variant="rayse-32400" size="52px" />
              ) : (
                <SocialContact socialNetwork="facebook" infoText="@13579" variant="rayse-20400" size="36px" />
              )}
            </Grid>
            <Grid item xs={12} tablet={6}>
              {matchSize.tablet ? (
                <SocialContact socialNetwork="instagram" infoText="@13579" variant="rayse-32400" size="52px" />
              ) : (
                <SocialContact socialNetwork="instagram" infoText="@13579" variant="rayse-20400" size="36px" />
              )}
            </Grid>
            <Grid item xs={12} tablet={6}>
              {matchSize.tablet ? (
                <SocialContact socialNetwork="tiktok" infoText="@13579" variant="rayse-32400" size="52px" />
              ) : (
                <SocialContact socialNetwork="tiktok" infoText="@13579" variant="rayse-20400" size="36px" />
              )}
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box className={matchSize.tablet ? styles.profileBottomSection : styles.profileBottomSectionMobile}>
        <Box>
          <Text variant={matchSize.tablet ? "rayse-44700" : "rayse-32700"} color="#FFF" width="210px" textAlign="left">
            Julie's reviews
          </Text>
        </Box>

        <Box className={styles.reviewSlideContainer}>
          <Swiper
            slidesPerView={
              matchSize.min860 ? 3 : (matchSize.min600 ? 2 : 1)
            }
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
