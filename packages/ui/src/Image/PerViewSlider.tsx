import React, { FunctionComponent, useMemo, useRef } from 'react'
import { Swiper, SwiperSlide, SwiperClass, useSwiper } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import { PlainHoverButton } from '../Button'
import { YellowIconPre } from '../Icon'

import 'swiper/css'
import 'swiper/css/pagination'
import { Showif } from '../Layout'

interface PerViewSliderProps {
  slides: React.ReactNode[]
  ns: number
  pgr?: boolean
  loop?: boolean
}

export const PerViewSlider: FunctionComponent<PerViewSliderProps> = ({ slides, ns, pgr = false, loop = false }) => {
  const swiper = useRef<SwiperClass | null>(null)

  return (
    <Swiper
      slidesPerView={ns}
      spaceBetween={0}
      pagination={false}
      modules={[Pagination]}
      style={{
        width: '100%',
        height: '100%',
      }}
      onSwiper={swp => (swiper.current = swp)}
      loop={loop}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
      <Showif con={pgr}>
        <PlainHoverButton
          onClick={() => swiper.current?.slideNext()}
          style={{
            position: 'absolute',
            right: '20px',
            top: '40%',
            zIndex: 1,
            overflow: 'visible',
          }}
        >
          <YellowIconPre material="chevron_right" size={50} fontSize="36px" />
        </PlainHoverButton>
      </Showif>
    </Swiper>
  )
}
