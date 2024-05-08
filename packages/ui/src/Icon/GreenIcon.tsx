import React from 'react'
import { Box } from '../Box'
import { Text } from '../Text'
import styled from '@emotion/styled'

const IconBox = styled(Box)({
  borderRadius: 444,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 0,
  margin: 0,
  gap: 8,
})

export const GreenIcon = ({
  active = false,
  material,
  size = 40,
}: {
  active?: boolean
  material: number
  size?: number
}) => {
  return (
    <IconBox
      className="Icon-Amir"
      sx={{ width: size, height: size }}
      style={{ backgroundColor: active ? '#3F947D' : '#E5E5E5', color: active ? '#FFFFFF' : '#A3A3A3' }}
    >
      <Text>{material}</Text>
    </IconBox>
  )
}
