import React from 'react'
import { Avatar } from '../Avatar'

import logo from './img.png'

type Props = {
  size?: number
  iconSize?: number
  borderRadius?: string
}

export const RayseIcon = ({ size = 32, iconSize = 24, borderRadius = '50%' }: Props) => {
  return (
    <Avatar
      src={logo}
      sx={{ backgroundColor: '#FFE240', width: size, height: size, borderRadius }}
      slotProps={{ img: { style: { margin: 10, width: iconSize, height: iconSize } } }}
    />
  )
}
