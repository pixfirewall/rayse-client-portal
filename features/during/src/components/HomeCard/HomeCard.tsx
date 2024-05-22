// import './style.css'
import React, { FunctionComponent } from 'react'
import { Box, Button, Group, MainPaper, Showif } from '@rayseinc-packages/ui'

import { Ribbon } from './Ribbon'
import { HomeLabel, HomeLabelType } from '../HomeLabel'
import { CardImage } from './CardImage'
import { HomeDetails } from '../HomeDetails'
import { useNavigateToHomeInfo } from '../../navigations'

export interface HomeCardProps {
  ribbon: boolean
  label: boolean
  images: string[]
  address: string
  price: string
  bed: string
  bath: string
  sqft: string
}

export const HomeCard: FunctionComponent<HomeCardProps> = ({ images, ribbon, label, ...details }) => {
	const navigateToHomeInfo = useNavigateToHomeInfo({ images, ...details })

  return (
    <Button sx={{ all: 'unset' }} onClick={() => navigateToHomeInfo()}>
      <MainPaper padding="0" width="301px">
        <Group dir="vertical" padding="20px" gap={12} className="Home-Card-Container">
          <Box>
            <Ribbon show={ribbon} />
            <CardImage src={images[0]} />
          </Box>
          <HomeDetails {...details} />
          <Showif con={label}>
            <Group gap={14}>
              <HomeLabel type={HomeLabelType.OutOfBudget} />
              <HomeLabel type={HomeLabelType.SeenDayAgo} day={2} />
            </Group>
          </Showif>
        </Group>
      </MainPaper>
    </Button>
  )
}
