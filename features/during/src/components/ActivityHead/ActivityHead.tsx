import React, { FunctionComponent } from 'react'
import { Group, Box, MainPaper, Text, Space } from '@rayseinc-packages/ui'

interface ActivityHeadProps {
  title: string
  date?: string
}

export const ActivityHead: FunctionComponent<ActivityHeadProps> = ({ title, date }) => {
  return (
    <MainPaper style={{ boxShadow: 'none' }}>
      <Group dir="vertical" gap={9}>
        <Text variant="rayse-24700">{title}</Text>
        {date && (
          <Group>
            <Box
              sx={{
                margin: '7px 14px 7px 7px',
                width: '7px',
                height: '7px',
                backgroundColor: '#0E8345',
                borderRadius: '25px',
                boxShadow: '0 0 0 7px #DAFEE9',
              }}
            />
            <Text variant="rayse-18700" color="#0E8345">
              Scheduled
            </Text>
            <Space />
            <Text variant="rayse-18400" color="#0E8345">
              {date}
            </Text>
          </Group>
        )}
      </Group>
    </MainPaper>
  )
}
