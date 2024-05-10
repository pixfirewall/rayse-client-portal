import './style.css'
import React from 'react'
import { Box, GreenIcon, YellowIcon, Text, Image } from '@rayseinc-packages/ui'

import logo from './logo.png'

type State = 'done' | 'inprogres' | 'todo'

export const JourneyCard = ({ info, state = 'done', order = 1 }: { info: string; state?: State; order?: number }) => {
  return (
    <Box className="Journey-Card">
      {state === 'done' ? <YellowIcon material="check" size={32} /> : null}
      {state === 'inprogres' ? <GreenIcon material={order} active={true} size={32} /> : null}
      {state === 'todo' ? <GreenIcon material={order} size={32} /> : null}
      <Box className="Journey-Card-Info">
        <Text variant="h6">
          <Box sx={{ lineHeight: 'normal' }}>{info}</Box>
        </Text>
        {state !== 'todo' ? (
          <Box className="Journey-Card-Info-Status">
            <Image src={logo} style={{ width: 11, height: 15 }} />
            <Text variant="caption"># Outcomes</Text>
          </Box>
        ) : null}
      </Box>
    </Box>
  )
}
