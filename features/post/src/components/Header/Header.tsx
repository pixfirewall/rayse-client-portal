import React from 'react'
import { Box } from '@rayseinc-packages/ui'

import { Menu } from './Menu'
import { Contact } from './Contact'

export const Header = () => {
  return (
    <Box style={{
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '100%',
      padding: '20px',
      gap: '16px',
      background: '#3F947D',
      borderRadius: '24px'
    }}>
      <Box style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Contact />
        <Menu />
      </Box>
    </Box>
  )
}
