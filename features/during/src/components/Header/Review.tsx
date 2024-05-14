import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Image, Text, Paper, Box, Blank, Group } from '@rayseinc-packages/ui'

import home from './icons/home.png'

interface ReviewProps {
  show?: boolean
}

export const Review: FunctionComponent<ReviewProps> = ({ show = false }) => {
  if (show) {
    return (
      <WhitePaper>
        <Group alignH="space-between">
          <Box>
            <Text variant="rayse-16700">Review your home</Text>
            <Text>Tell me how you felt about 123 Maine Street</Text>
          </Box>
          <Blank space={16} />
          <Group alignV="center">
            <Image src={home} style={{ borderRadius: 6 }} size={56} />
          </Group>
        </Group>
      </WhitePaper>
    )
  }
  return null
}

const WhitePaper = styled(Paper)({
  backgroundColor: '#FFFFFF',
  borderRadius: 16,
  paddingTop: 24,
  paddingBottom: 24,
  paddingRight: 20,
  paddingLeft: 20,
})
