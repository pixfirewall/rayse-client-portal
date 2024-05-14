import React, { FunctionComponent } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import './style.css'
import { Image } from './Image'

interface PropsPaginationSlider {
  images: string[]
}

export const PaginationSlider: FunctionComponent<PropsPaginationSlider> = ({ images }) => {
  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      {images.map(image => (
        <SwiperSlide key={image}>
          <Image
            src={image}
            style={{
              display: 'block',
              width: '100%',
              height: '400px',
							borderRadius: '24px'
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
