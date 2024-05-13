import React from 'react'
import { Avatar } from '../Avatar'

import logo from './img.png'

type Props = {
  size?: number
  iconSize?: number
}

export const RayseIcon = ({ size = 32, iconSize = 24 }: Props) => {
  return (
    <Avatar
      src={logo}
      sx={{ backgroundColor: '#FFE240', width: size, height: size }}
      slotProps={{ img: { style: { margin: 10, width: iconSize, height: iconSize } } }}
    />
  )
}
