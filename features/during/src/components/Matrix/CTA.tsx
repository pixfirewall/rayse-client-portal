import React, { FunctionComponent } from 'react'
import { Avatar, Blank, Group, WhiteButton, YellowIcon } from '@rayseinc-packages/ui'

interface CTAProps {
  agentName?: string
	agentImage?: string
}

export const CTA: FunctionComponent<CTAProps> = ({ agentName, agentImage }) => {
  return (
    <WhiteButton style={{ justifyContent: 'space-between' }}>
      Contact {agentName}
      <Group>
        <Avatar src={agentImage} />
        <Blank space={8} />
        <YellowIcon material="arrow_forward" />
      </Group>
    </WhiteButton>
  )
}
