import React, { FunctionComponent } from 'react'
import { Group, Text, Image, MainPaper } from '@rayseinc-packages/ui'

interface ReviewCardProps {
  text: string
  image: string
}

export const ReviewCard: FunctionComponent<ReviewCardProps> = ({ text, image }) => {
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
        <Image size={40} src={image} style={{ borderRadius: '444px' }} />
      </Group>
    </MainPaper>
  )
}
