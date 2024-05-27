import React, { FunctionComponent } from 'react'
import { Box, RayseDivider, Group, Text } from '@rayseinc-packages/ui'

interface HomeDetailsProps {
  address: string
  price: string
  bed: number
  bath: number
  sqft: string
}

export const HomeDetails: FunctionComponent<HomeDetailsProps> = ({ address, price, bed, bath, sqft }) => {
  return (
    <Group dir="vertical" gap={2}>
      <Text
        variant="rayse-20700"
        sx={{
          display: '-webkit-box',
          overflow: 'hidden',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 1,
          lineHeight: '28px',
        }}
      >
        {address}
      </Text>
      <Text variant="rayse-16700">{price}</Text>
      <Group>
        <Box>
          <Text variant="rayse-16700">{bed}</Text>
          <Text variant="rayse-16400"> bed</Text>
        </Box>
        <RayseDivider color="#C5C2BA" gap={8} />
        <Box>
          <Text variant="rayse-16700">{bath}</Text>
          <Text variant="rayse-16400"> bath</Text>
        </Box>
        <RayseDivider color="#C5C2BA" gap={8} />
        <Box>
          <Text variant="rayse-16700">{sqft}</Text>
          <Text variant="rayse-16400"> sqft</Text>
        </Box>
      </Group>
    </Group>
  )
}
