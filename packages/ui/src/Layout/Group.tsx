import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const Group = styled(Box)<{
  dir?: 'vertical' | 'horizontal'
  alignV?: VerticalAlignment
  alignH?: HorizontalAlignment
	gap?: number
}>(({ dir = 'horizontal', alignV, alignH, gap }) => {
  return {
    display: 'flex',
    flexDirection: dir === 'horizontal' ? 'row' : 'column',
    justifyContent: alignH,
    alignItems: alignV,
		gap
  }
})
type VerticalAlignment = 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'self-start' | 'self-end'
type HorizontalAlignment =
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
