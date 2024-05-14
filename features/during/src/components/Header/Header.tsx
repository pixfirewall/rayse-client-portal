import './style.css'
import React, { FunctionComponent } from 'react'
import { Box, Group } from '@rayseinc-packages/ui'

import { Menu } from './Menu'
import { Review } from './Review'
import { Contact } from './Contact'

interface HeaderProps {
  review?: boolean
}

export const Header: FunctionComponent<HeaderProps> = ({ review = false }) => {
  return (
    <Box className="Header-Container">
      <Group alignH="space-between">
        <Contact />
        <Menu />
      </Group>
      <Review show={review} />
    </Box>
  )
}
