import React from 'react'
import { Text, Link, RayseIcon, Group, RayseDivider, MainPaper } from '@rayseinc-packages/ui'

export const Footer = () => {
  return (
    <MainPaper bgcolor="#C6BDAC" padding="40px 24px">
      <Group dir="vertical" alignV="center" gap={24}>
        <Group dir="vertical" gap={12} alignV="center">
          <Group gap={12}>
            <Link href="http://google.com">About</Link>
            <RayseDivider size={24} center />
            <Link>Terms & Conditions</Link>
            <RayseDivider size={24} center />
            <Link>Legal</Link>
          </Group>
          <Group gap={12}>
            <Link>Link</Link>
            <RayseDivider size={24} center />
            <Link>Link</Link>
            <RayseDivider size={24} center />
            <Link>Link</Link>
          </Group>
        </Group>
        <Group gap={12} alignV="center">
          <RayseIcon />
          <Text>© Rayse 2024</Text>
        </Group>
      </Group>
    </MainPaper>
  )
}
