import React from 'react'
import styled from '@emotion/styled'
import { Divider, DividerProps } from '@mui/material'

export const RayseDivider = styled(
  ({
    gap,
    color,
    size,
		center,
    dir = 'vertical',
    ...props
  }: DividerProps & { gap?: number; size?: number; color?: string; dir?: 'vertical' | 'horizontal', center?: boolean }) => {
    return <Divider orientation={dir} flexItem {...props} />
  },
)(({ dir = 'vertical', size, color = '#FFFFFF', gap = 0, center }) => {
  let width = dir === 'vertical' ? 1 : undefined
  let height = dir === 'horizontal' ? 1 : undefined

  if (size !== undefined) {
    switch (dir) {
      case 'vertical':
				height = size
				break
				case 'horizontal':
        width = size
        break
      default:
        break
    }
  }

  return {
    width,
    height,
    backgroundColor: color,
    marginLeft: gap,
    marginRight: gap,
    alignSelf: center ? 'center' : undefined,
  }
})
