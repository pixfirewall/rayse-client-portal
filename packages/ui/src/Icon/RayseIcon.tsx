import React from 'react'
import { Avatar } from '../Avatar'

import logo from './img.png'

export const RayseIcon = () => {
  return (
    <Avatar
      src={logo}
      sx={{ backgroundColor: '#FFE240', width: 32, height: 32 }}
      slotProps={{ img: { style: { margin: 10, width: 24, height: 24 } } }}
    />
  )
}