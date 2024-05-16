import React, { FunctionComponent } from 'react'
import { MainPaper, PaginationSlider } from '@rayseinc-packages/ui'
import { Ribbon } from '../HomeCard/Ribbon'

interface HomeSliderProps {
  images: string[]
  ribbon?: boolean
}

export const HomeSlider: FunctionComponent<HomeSliderProps> = ({ images, ribbon = false }) => {
  return (
    <MainPaper padding="12px">
      <PaginationSlider images={images} ribbon={<Ribbon show={ribbon} />} />
    </MainPaper>
  )
}
