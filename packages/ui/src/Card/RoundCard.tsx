import React, { FunctionComponent, PropsWithChildren } from 'react'
import { Box, BoxProps } from '@mui/material'

type ItemAlignment = 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'self-start' | 'self-end'
type ContentSpread =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'left'
  | 'right'
  | 'normal'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'

interface RoundCardProps {
  dir?: 'vertical' | 'horizontal'
  align?: ItemAlignment
  spread?: ContentSpread
  gap?: string
  color: string
  radius?: string
  hPadding: string
  vPadding: string
  style?: React.CSSProperties
}

export const RoundCard: FunctionComponent<PropsWithChildren<RoundCardProps & BoxProps>> = ({
  children,
  dir = 'vertical',
  align = 'flex-start',
  spread = 'space-between',
  gap,
  color,
  radius = '24px',
  hPadding,
  vPadding,
  style,
  ...props
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: dir === 'horizontal' ? 'row' : 'column',
        justifyContent: spread,
        alignItems: align,
        gap,
        background: color,
        borderRadius: radius,
        padding: [vPadding, hPadding, vPadding, hPadding].join(' '),
        ...style,
      }}
      {...props}
    >
      {children}
    </Box>
  )
}
