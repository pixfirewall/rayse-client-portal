import React, { FunctionComponent } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { clsx } from 'clsx'

import 'swiper/css'
import 'swiper/css/pagination'
import styles from './paginationSlider.module.css'

import { Image } from './Image'

interface PropsPaginationSlider {
  images: string[]
  ribbon?: React.ReactNode
}

export const PaginationSlider: FunctionComponent<PropsPaginationSlider> = ({ images, ribbon }) => {
  return (
    <Swiper
      pagination={{
        bulletActiveClass: clsx('swiper-pagination-bullet-active', styles.swiperBulletActive),
        bulletClass: clsx('swiper-pagination-bullet', styles.swiperBullet)
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {images.map(image => (
        <SwiperSlide key={image}>
          {ribbon}
          <Image
            src={image}
            style={{
              display: 'block',
              width: '100%',
              height: '400px',
              borderRadius: '24px',
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
