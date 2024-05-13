import React from 'react'
import { Group, MainPaper, Text, YellowIcon, WhiteButton, Image, RayseDivider } from '@rayseinc-packages/ui'

import logo from './assets/logo.png'

export const BrandFooter = () => {
  return (
    <MainPaper bgcolor="#2A6656" padding="20px">
      <Group dir="vertical" gap={24}>
        <Group gap={24} alignH="space-between" alignV="center">
          <Image src={logo} width={96} height={96} style={{borderRadius: '12px'}} />
          <WhiteButton>
            Learn more
            <YellowIcon material="arrow_forward" />
          </WhiteButton>
        </Group>
        <RayseDivider center dir="horizontal" size={330} color="rgba(0, 0, 0, 0.32)" />
        <Group dir="vertical">
          <Text variant="rayse-24700" color="#FFFFFF">
            25% of buyers end up
          </Text>
          <Text variant="rayse-24700" color="#FFFFFF">
            seeking a lawyer
          </Text>
        </Group>
      </Group>
    </MainPaper>
  )
}
