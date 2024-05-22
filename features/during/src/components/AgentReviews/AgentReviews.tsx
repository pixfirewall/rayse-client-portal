import React, { FunctionComponent } from 'react'
import { Group, MainPaper, PerViewSlider, Text } from '@rayseinc-packages/ui'
import { ReviewCard } from './ReviewCard'

import { agentReciews } from '../../fixtures/agentReciews'
import avatar from '../../fixtures/assets/agent.png';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AgentReviewsProps {}

export const AgentReviews: FunctionComponent<AgentReviewsProps> = () => {
  return (
    <MainPaper style={{ boxShadow: 'none', backgroundColor: '#2A6656', border: '1px solid #EEECE6' }}>
      <Group dir="vertical" gap={40}>
        <Text color="white" variant="rayse-24700">
          Julie’s reviews
        </Text>
        <PerViewSlider pgr loop
          slides={agentReciews.map(review => (
            <ReviewCard text={review} image={avatar} />
          ))}
          ns={1.2}
        />
      </Group>
    </MainPaper>
  )
}
