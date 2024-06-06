import React, { useState, useRef } from 'react'
import { Box, Text, Grid, Modal, YellowIconPre, PlainHoverButton, Skeleton } from '@rayseinc-packages/ui'
import { clsx } from 'clsx'

import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'

import { SocialContact } from '../'
import type { AgentPublicInfoRecord } from '../../types'

import styles from './AgentProfile.module.css'

import type { MatchSizes } from '../../screens/pre/index'

type Props = {
  matchSize: MatchSizes
  data?: AgentPublicInfoRecord
  isLoading: boolean
}

export const AgentProfile = ({ matchSize, data, isLoading }: Props) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalText, setModalText] = useState('')

  const swiperRef = useRef<SwiperType>()

  const handleModalOpen = (text: string) => {
    setModalText(text)
    setModalOpen(true)
  }
  const handleModalClose = () => setModalOpen(false)

  return (
    <Box className={styles.profileContainer} margin="auto">
      <Box className={matchSize.tablet ? styles.profileTopSection : styles.profileTopSectionMobile}>
        {data?.headshotImagePath ? (
          <Box
            className={matchSize.tablet ? styles.profileImage : styles.profileImageMobile}
            style={{
              backgroundImage: `url(${data.headshotImagePath})`,
            }}
          />
        ) : (
          <Box
            className={clsx(matchSize.tablet ? styles.profileImage : styles.profileImageMobile, styles.checkeredImage)}
          />
        )}

        <Box
          className={styles.profileDetailsContainer}
          style={matchSize.tablet ? { height: '730px' } : { gap: '48px' }}
        >
          <Text
            variant={matchSize.tablet ? 'rayse-36700' : 'rayse-32700'}
            color="#FFF"
            padding="40px 40px 0 40px"
            textAlign="left"
          >
            {isLoading ? (
              <Skeleton width="220px" />
            ) : (
              <>
                {data?.user?.firstName} {data?.user?.lastName}
              </>
            )}
          </Text>
          <Text
            variant={matchSize.tablet ? 'rayse-32700' : 'rayse-20700'}
            color="#FFF"
            padding="0 40px 0 40px"
            textAlign="left"
          >
            I’m committed to being your advocate on-demand, honoring your trust and partnership through your unique
            home-buying journey.
          </Text>
          <Box className={styles.profileContactInfoContainer}>
            <Text variant={matchSize.tablet ? 'rayse-24400' : 'rayse-20400'} color="#FFF" textAlign="left">
              Eliot Park Residential
            </Text>
            <Text variant={matchSize.tablet ? 'rayse-24400' : 'rayse-20400'} color="#FFF" textAlign="left">
              DRE #02095311
            </Text>
            <Text variant={matchSize.tablet ? 'rayse-24400' : 'rayse-20400'} color="#FFF" textAlign="left">
              {Boolean(data?.user?.phones?.length) && data?.user.phones[0].number}
            </Text>
            <Text variant={matchSize.tablet ? 'rayse-24400' : 'rayse-20400'} color="#FFF" textAlign="left">
              {data?.user?.emailAddress}
            </Text>
          </Box>

          <Grid container style={{ padding: '0 40px 40px 40px' }} rowSpacing={2} columnSpacing={4}>
            {data?.agentLinks?.length &&
              data.agentLinks.map((record, index) => (
                <Grid key={index} item xs={12} tablet={6}>
                  {matchSize.tablet ? (
                    <SocialContact name={record.name} url={record.url} variant="rayse-32400" size="52px" />
                  ) : (
                    <SocialContact name={record.name} url={record.url} variant="rayse-20400" size="36px" />
                  )}
                </Grid>
              ))}
          </Grid>
        </Box>
      </Box>

      <Box className={matchSize.tablet ? styles.profileBottomSection : styles.profileBottomSectionMobile}>
        <Box>
          {!isLoading ? (
            <Text
              variant={matchSize.tablet ? 'rayse-44700' : 'rayse-32700'}
              color="#FFF"
              width="210px"
              textAlign="left"
            >
              {data?.user?.firstName}'s reviews
            </Text>
          ) : (
            <Skeleton variant="rounded" width="210px" height="110px" />
          )}
        </Box>

        <Box className={styles.reviewSlideContainer}>
          {!isLoading ? (
            <Swiper
              slidesPerView={matchSize.min860 ? 3 : matchSize.min600 ? 2 : 1}
              spaceBetween={10}
              className={styles.reviewSwiperContainer}
              onSwiper={swp => (swiperRef.current = swp)}
            >
              {data?.testimonials?.map((value, index) => (
                <SwiperSlide key={index}>
                  <Box className={styles.reviewBox}>
                    <Box onClick={() => handleModalOpen(value?.text)} style={{ cursor: 'pointer' }}>
                      <Text className={styles.reviewText} variant="rayse-20400">
                        {value?.text}
                      </Text>
                    </Box>
                    <Text className={styles.reviewText} variant="rayse-16400">
                      - {value?.clientName}
                    </Text>
                  </Box>
                </SwiperSlide>
              ))}

              <PlainHoverButton
                onClick={() => swiperRef.current?.slideNext()}
                style={{
                  position: 'absolute',
                  right: '0px',
                  top: '40%',
                  zIndex: 1,
                  overflow: 'visible',
                }}
              >
                <YellowIconPre material="chevron_right" size={50} fontSize="36px" />
              </PlainHoverButton>
            </Swiper>
          ) : (
            <Skeleton variant="rounded" width="180px" height="248px" />
          )}

          <Modal
            open={modalOpen}
            onClose={handleModalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className={styles.modalStyle}>
              <Text variant="rayse-20400">{modalText}</Text>
            </Box>
          </Modal>
        </Box>
      </Box>
    </Box>
  )
}
////////////////////
/////////
////////////////////////////////////////
