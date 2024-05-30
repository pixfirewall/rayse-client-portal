import React, { FunctionComponent } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { clsx } from 'clsx'

import 'swiper/css'
import 'swiper/css/pagination'
import styles from './paginationSlider.module.css'

import { Image } from './Image'

interface PaginationSliderProps {
  images: string[]
  ribbon?: React.ReactNode
  borderRadius?: string
  loop?: boolean
  pagination?: boolean
  onSlideChange?: (i: number) => void
}

export const PaginationSlider: FunctionComponent<PaginationSliderProps> = ({
  images,
  ribbon,
  borderRadius = '24px',
  loop = true,
  pagination = true,
  onSlideChange,
}) => {
  return (
    <Swiper
      pagination={{
        bulletActiveClass: clsx('swiper-pagination-bullet-active', styles.swiperBulletActive),
        bulletClass: clsx('swiper-pagination-bullet', styles.swiperBullet),
        enabled: pagination,
      }}
      modules={[Pagination]}
      className="mySwiper"
      loop={loop}
      onSlideChange={s => onSlideChange && onSlideChange(s.realIndex)}
    >
      {images.map(image => (
        <SwiperSlide key={image}>
          {ribbon}
          <Image
            src={image}
            style={{
              width: '100%',
              overflow: 'hidden',
              display: 'block',
              objectFit: 'cover',
              borderRadius,
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
