import React from 'react'
import { Group, GreenIcon, YellowIcon, Text, Image, Showif, MainPaper } from '@rayseinc-packages/ui'

import logo from './assets/logo.png'

export enum State {
  Done = 'done',
  Inprogres = 'inprogres',
  Todo = 'todo',
}

export const JourneyCard = ({ info, state = State.Done, order = 1 }: { info: string; state?: State; order?: number }) => {
  return (
    <MainPaper>
      <Group dir="vertical" height="140px" alignH="space-between">
        <Showif con={state === 'done'}>
          <YellowIcon material="check" size={32} />
        </Showif>
        <Showif con={state === 'inprogres'}>
          <GreenIcon material={order} active={true} size={32} />
        </Showif>
        <Showif con={state === 'todo'}>
          <GreenIcon material={order} size={32} />
        </Showif>
        <Group dir="vertical" gap={2}>
          <Text variant="h6">
            <Group sx={{ lineHeight: 'normal' }}>{info}</Group>
          </Text>
          {state !== 'todo' ? (
            <Group gap={2}>
              <Image src={logo} style={{ width: 11, height: 15 }} />
              <Text variant="caption"># Outcomes</Text>
            </Group>
          ) : null}
        </Group>
      </Group>
    </MainPaper>
  )
}
