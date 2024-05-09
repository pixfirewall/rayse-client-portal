import React from 'react'
import { Box } from '../Box'
import { Icon } from '../Icon'
import styled from '@emotion/styled'

const IconBox = styled(Box)({
  backgroundColor: '#FFF',
  borderRadius: 444,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 0,
  margin: 0,
  gap: 8,
})

type Material = 'arrow_forward' | 'check'

export const WhiteIcon = ({ material, size = 40 }: { material: Material; size?: number }) => {
  return (
    <IconBox className="Icon-Amir" sx={{ width: size, height: size }}>
      <Icon sx={{ color: 'black' }}>{material}</Icon>
    </IconBox>
  )
}
