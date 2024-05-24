import React from 'react'
import { Group, GreenIcon, YellowIcon, Text, Image, Showif, MainPaper, Button } from '@rayseinc-packages/ui'

import logo from './assets/logo.png'

export enum State {
  Done = 'done',
  Inprogres = 'inprogres',
  Todo = 'todo',
}

export const JourneyCard = ({
  info,
  onClick,
  state,
  order,
  outcomes,
}: {
  info: string
  onClick?: () => void
  state: State
  order: number
  outcomes: number
}) => {
  return (
    <MainPaper>
      <Button sx={{ all: 'unset' }} onClick={onClick}>
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
                <Text variant="caption">{outcomes} Outcomes</Text>
              </Group>
            ) : null}
          </Group>
        </Group>
      </Button>
    </MainPaper>
  )
}
