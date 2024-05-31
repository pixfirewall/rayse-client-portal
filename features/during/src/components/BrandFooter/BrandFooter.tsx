import React from 'react'
import { Group, MainPaper, Text, YellowIcon, WhiteButton, Image, RayseDivider } from '@rayseinc-packages/ui'

import nologo from './assets/logo.png'

type Props = {
  logoUrl: string
}

export const BrandFooter = ({ logoUrl }: Props) => {
  return (
    <MainPaper bgcolor="#2A6656" padding="20px">
      <Group dir="vertical" gap={24}>
        <Group gap={24} alignH="space-between" alignV="center">
          <Image src={logoUrl || nologo} style={{
            borderRadius: '12px',
            maxWidth: '90px',
            maxHeight: '90px',
            backgroundSize: 'contain'
          }} />
          <WhiteButton>
            Learn more
            <YellowIcon material="arrow_forward" />
          </WhiteButton>
        </Group>
        <RayseDivider center dir="horizontal" size={330} color="rgba(0, 0, 0, 0.32)" />
        <Group dir="vertical">
          <Text variant="rayse-24700" color="#FFFFFF">
            Making bold moves.
          </Text>
        </Group>
      </Group>
    </MainPaper>
  )
}
