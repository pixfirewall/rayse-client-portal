import React, { FunctionComponent } from 'react'
import { Group, Text, MainPaper } from '@rayseinc-packages/ui'

interface ReviewCardProps {
  text: string
  name: string
}

export const ReviewCard: FunctionComponent<ReviewCardProps> = ({ text, name }) => {
  return (
    <MainPaper style={{ boxShadow: 'none', width: 'calc(90% - 40px)' }}>
      <Group dir="vertical" gap={40}>
        <Text
          variant="rayse-20400"
          sx={{
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 4,
            lineHeight: '28px',
          }}
        >
          {text}
        </Text>
        <Text>{name}</Text>
      </Group>
    </MainPaper>
  )
}
