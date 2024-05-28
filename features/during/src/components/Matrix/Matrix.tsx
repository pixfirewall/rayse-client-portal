import React, { FunctionComponent } from 'react'
import { Group, Text, MainPaper, Showif } from '@rayseinc-packages/ui'

import { CTA } from './CTA'
import { Info } from './Info'

interface MatrixProps {
  title: string
  agentName?: string
  agentImage?: string
  activities: number
  outcomes: number
  tours: number
  offers: number
}

export const Matrix: FunctionComponent<MatrixProps> = ({ title, agentName, agentImage, ...data }) => {
  return (
    <MainPaper bgcolor="#D9D4C8" padding="24px 20px">
      <Group dir="vertical" gap={32}>
        <Text variant="rayse-24700">{title}</Text>
        <Info {...data} />
        <Showif con={agentName !== undefined}>
          <CTA agentName={agentName} agentImage={agentImage} />
        </Showif>
      </Group>
    </MainPaper>
  )
}
