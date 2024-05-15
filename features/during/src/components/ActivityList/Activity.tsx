import React, { FunctionComponent } from 'react'
import { Group, Box, Text, Space, Icon, Showif, YellowIcon, Button } from '@rayseinc-packages/ui'

export enum Statu {
  Done = 'done',
  Inprogres = 'inprogres',
  Todo = 'todo',
}
export interface ActivityProps {
  status: Statu
  title: string
  subtitle?: string
  progress?: string
  line?: boolean
  onClick?: () => void
}

export const Activity: FunctionComponent<ActivityProps> = ({
  status,
  title,
  subtitle,
  progress,
  onClick,
  line = true,
}) => {
  return (
    <Button sx={{ all: 'unset' }} onClick={onClick}>
      <Group
        alignH="space-between"
        sx={{ borderBottom: line ? '1px solid #EEECE6' : undefined, paddingBottom: line ? '20px' : undefined }}
      >
        <Group dir="vertical" gap={4}>
          <Text variant="rayse-18400">{title}</Text>
          <Showif con={subtitle !== undefined && progress !== undefined}>
            <Group>
              <Text variant="rayse-14700" color="rayse-blue.main">
                {subtitle}
              </Text>
              <Space />
              <Text variant="rayse-14400" color="rayse-blue.main">
                {progress}
              </Text>
            </Group>
          </Showif>
        </Group>
        <Group gap={12}>
          <Showif con={status === 'done'}>
            <YellowIcon material="check" size={24} fontSize="small" />
          </Showif>
          <Showif con={status === 'todo'}>
            <Box
              sx={{
                width: '24px',
                height: '24px',
                border: '1px solid #D9D4C8',
                borderRadius: '25px',
              }}
            />
          </Showif>
          <Showif con={status === 'inprogres'}>
            <Box
              sx={{
                marginRight: '7px',
                marginTop: '7px',
                width: '9px',
                height: '9px',
                backgroundColor: '#006ECE',
                borderRadius: '25px',
                boxShadow: '0 0 0 9px #DFEEFF',
              }}
            />
          </Showif>
          <Icon>keyboard_arrow_right_icon</Icon>
        </Group>
      </Group>
    </Button>
  )
}
