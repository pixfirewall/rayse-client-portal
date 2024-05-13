import React from 'react'
import { Box } from '../Box'
import { Icon, IconOwnProps } from '../Icon'
import styled from '@emotion/styled'

const IconBox = styled(Box)({
  backgroundColor: '#FFD800',
  borderRadius: 444,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 0,
  margin: 0,
  gap: 8,
})

type Material = 'arrow_forward' | 'check' | 'chevron_right'

export const YellowIcon = ({ material, size = 40, ...props }: { material: Material; size?: number } & IconOwnProps) => {
  return (
    <IconBox className="Icon-Amir" sx={{ width: size, height: size }}>
      <Icon sx={{ color: 'black' }} {...props}>
        {material}
      </Icon>
    </IconBox>
  )
}

export const YellowIconPre = ({ material, size = 40, fontSize = '24px' }: {
  material: Material; size?: number, fontSize?: string
}) => {
  return (
    <IconBox className="Icon-Amir" sx={{ width: size, height: size }}>
      <Icon sx={{ color: 'black', 'font-size': fontSize }}>{material}</Icon>
    </IconBox>
  )
}
