import React from 'react'
import { Text, Link, RayseIcon, Group, RayseDivider, MainPaper } from '@rayseinc-packages/ui'

export const Footer = () => {
  return (
    <MainPaper bgcolor="#C6BDAC" padding="40px 24px">
      <Group dir="vertical" alignV="center" gap={24}>
        <Group dir="vertical" gap={12} alignV="center">
          <Group gap={12}>
            <Link href="https://www.rayse.com/about">About</Link>
            <RayseDivider size={24} center />
            <Link href="https://www.rayse.com/terms">Terms</Link>
            <RayseDivider size={24} center />
            <Link href="https://www.rayse.com/privacy">Privacy</Link>
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
