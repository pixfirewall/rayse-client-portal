import React, { FunctionComponent, PropsWithChildren } from 'react'
import { Group } from '.'
import { Box } from '../Box'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PageLayoutProps {}

export const PageLayout: FunctionComponent<PropsWithChildren<PageLayoutProps>> = ({ children }) => {
  return (
    <Box
      sx={{
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        maxWidth: '440px',
        margin: '0 auto',
        boxSizing: 'content-box',
      }}
    >
      <Box sx={{ width: '100%' }}>{children}</Box>
    </Box>
  )
}
