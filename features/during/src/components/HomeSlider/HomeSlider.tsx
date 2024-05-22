import React, { FunctionComponent, useState } from 'react'
import { Button, Colors, CustomTheme, Group, MainPaper, PaginationSlider, Text } from '@rayseinc-packages/ui'
import { Ribbon } from '../HomeCard/Ribbon'
import { Backdrop, IconButton } from '@mui/material'
import { Close } from '@mui/icons-material'

interface HomeSliderProps {
  images: string[]
  ribbon?: boolean
}

export const HomeSlider: FunctionComponent<HomeSliderProps> = ({ images, ribbon = false }) => {
  const [open, setOpen] = useState(false)
  const [imageIndex, setImageIndex] = useState(1)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Group dir="vertical">
      <Button sx={{ all: 'unset' }} onClick={handleOpen}>
        <MainPaper padding="12px">
          <PaginationSlider images={images} ribbon={<Ribbon show={ribbon} />} />
        </MainPaper>
      </Button>
      <Backdrop
        sx={{
          zIndex: theme => theme.zIndex.drawer + 1,
          backgroundColor: 'black',
          maxWidth: '440px',
          justifySelf: 'center',
        }}
        open={open}
      >
        <PaginationSlider
          images={images}
          borderRadius="0"
          pagination={false}
          onSlideChange={i => setImageIndex(i + 1)}
        />
        <Group alignH="space-between" alignV="center" sx={{ position: 'absolute', top: '40px', right: 40, left: 40 }}>
          <IconButton onClick={handleClose}>
            <CustomTheme primary={Colors.W1}>
              <Close color="primary" />
            </CustomTheme>
          </IconButton>
          <Text color="white">
            {imageIndex}/{images.length}
          </Text>
        </Group>
      </Backdrop>
    </Group>
  )
}
