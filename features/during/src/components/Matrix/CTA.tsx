import React, { FunctionComponent } from 'react'
import { Avatar, Blank, Group, WhiteButton, YellowIcon } from '@rayseinc-packages/ui'
import { useNavigateToYourAgent } from '../../navigations'

interface CTAProps {
  agentName?: string
	agentImage?: string
}

export const CTA: FunctionComponent<CTAProps> = ({ agentName, agentImage }) => {
	const natigateToYourAgent = useNavigateToYourAgent({})
  return (
    <WhiteButton style={{ justifyContent: 'space-between' }} onClick={natigateToYourAgent}>
      Contact {agentName}
      <Group>
        <Avatar src={agentImage} />
        <Blank space={8} />
        <YellowIcon material="arrow_forward" />
      </Group>
    </WhiteButton>
  )
}
