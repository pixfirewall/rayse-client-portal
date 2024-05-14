import React, { FunctionComponent } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

interface PerViewSliderProps {
  slides: React.ReactNode[]
}

export const PerViewSlider: FunctionComponent<PerViewSliderProps> = ({ slides }) => {
  return (
    <Swiper
      slidesPerView={1.2}
      spaceBetween={0}
      pagination={false}
      modules={[Pagination]}
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      {slides.map(slide => (
        <SwiperSlide>{slide}</SwiperSlide>
      ))}
    </Swiper>
  )
}
