import React, { FunctionComponent } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

interface PerViewSliderProps {
  slides: React.ReactNode[]
	ns: number
}

export const PerViewSlider: FunctionComponent<PerViewSliderProps> = ({ slides, ns }) => {
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
    >
      {slides.map(slide => (
        <SwiperSlide>{slide}</SwiperSlide>
      ))}
    </Swiper>
  )
}
