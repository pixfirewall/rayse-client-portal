import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const RoundCard = styled(Box)<{
  dir?: 'vertical' | 'horizontal'
  align?: ItemAlignment
  spread?: ContentSpread
	gap?: string
  color: string
  radius?: string
  hPadding: string
  vPadding: string
  width?: string
  height?: string
  boxShadow?: string
  position?: string
  top?: string
  left?: string
  bottom?: string
  right?: string
}>(({ dir = 'vertical', align = 'flex-start', spread = 'space-between', gap, color, radius = '24px',
  hPadding, vPadding, width, height, boxShadow }) =>
{
  return {
    display: 'flex',
    flexDirection: dir === 'horizontal' ? 'row' : 'column',
    justifyContent: spread,
    alignItems: align,
		gap,
    background: color,
    borderRadius: radius,
    padding: [vPadding, hPadding, vPadding, hPadding].join(' '),
    width,
    height,
    boxShadow
  }
})

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
