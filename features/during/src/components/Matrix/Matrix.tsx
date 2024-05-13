import React, { FunctionComponent } from 'react'
import { Group, Text, MainPaper } from '@rayseinc-packages/ui'

import { CTA } from './CTA'
import { Info } from './Info'

interface MatrixProps {
  agentName: string
  activities: number
  outcomes: number
  tours: number
  offers: number
}

export const Matrix: FunctionComponent<MatrixProps> = ({ agentName, ...data }) => {
  return (
    <MainPaper bgcolor="#D9D4C8" padding="24px 20px">
      <Group dir="vertical" gap={32}>
        <Text variant="rayse-24700">This is what Julie has been up to on your behalf</Text>
        <Info {...data} />
        <CTA agentName={agentName} />
      </Group>
    </MainPaper>
  )
}
