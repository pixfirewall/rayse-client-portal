import React from 'react'
import { Box, Text } from '@rayseinc-packages/ui'

type Props = {
  number: number
  active?: boolean
}

export const NumberCircle = ({ number, active }: Props) => {
  return (
    <Box style={{
      display: 'flex',
      width: '32px',
      height: '32px',
      justifyContent: 'center',
      alignItems: 'center',
      flexShrink: 0,
      borderRadius: '25px',
      background: active? '#3F947D' : '#E5E5E5'
    }}>
      <Text variant="rayse-16700" color={active ? '#FFF' : '#A3A3A3'}>{number}</Text>
    </Box>
  )
}
