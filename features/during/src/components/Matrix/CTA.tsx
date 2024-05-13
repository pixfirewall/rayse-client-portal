import React, { FunctionComponent } from 'react'
import { Avatar, Blank, Group, WhiteButton, YellowIcon } from '@rayseinc-packages/ui'

import avatar from './icons/avatar.png'

interface CTAProps {
  agentName: string
}

export const CTA: FunctionComponent<CTAProps> = ({ agentName }) => {
  return (
    <WhiteButton style={{ justifyContent: 'space-between' }}>
      Contact {agentName}
      <Group>
        <Avatar src={avatar} />
        <Blank space={8} />
        <YellowIcon material="arrow_forward" />
      </Group>
    </WhiteButton>
  )
}
