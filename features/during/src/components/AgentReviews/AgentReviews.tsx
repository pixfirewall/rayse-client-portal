import React, { FunctionComponent } from 'react'
import { Group, MainPaper, PerViewSlider, Text } from '@rayseinc-packages/ui'
import { ReviewCard } from './ReviewCard'

import avatar from '../../fixtures/assets/agent.png'

export interface AgentReviewsProps {
  agentName?: string
  reviews?: { text: string; name: string }[]
}

export const AgentReviews: FunctionComponent<AgentReviewsProps> = ({ agentName, reviews }) => {
  return (
    <MainPaper style={{ boxShadow: 'none', backgroundColor: '#2A6656', border: '1px solid #EEECE6' }}>
      <Group dir="vertical" gap={40}>
        <Text color="white" variant="rayse-24700">
          {agentName}’s reviews
        </Text>
        <PerViewSlider
          pgr
          loop
          slides={reviews?.map(review => <ReviewCard text={review.text} name={review.name} />) ?? []}
          ns={1.2}
        />
      </Group>
    </MainPaper>
  )
}
