import './style.css'
import React, { FunctionComponent } from 'react'
import { Box, Group } from '@rayseinc-packages/ui'

import { Menu } from './Menu'
import { Review } from './Review'
import { Contact } from './Contact'

interface HeaderProps {
  review?: boolean
  agentImage?: string
}

export const Header: FunctionComponent<HeaderProps> = ({ agentImage, review = false }) => {
  return (
    <Box className="Header-Container">
      <Group alignH="space-between">
        <Contact image={agentImage} />
        <Menu />
      </Group>
      <Review show={review} />
    </Box>
  )
}
