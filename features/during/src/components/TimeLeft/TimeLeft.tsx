import React, { FunctionComponent } from 'react'
import { Group, Box, Text, Space, MainPaper, Image } from '@rayseinc-packages/ui'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

import homeSmile from './home-smile.png'

interface TimeLeftProps {
  value?: number
}

export const TimeLeft: FunctionComponent<TimeLeftProps> = ({ value = 0 }) => {
  return (
    <MainPaper>
      <Group alignH="space-between">
        <Group alignV="center">
          <Text variant="rayse-24700" color="rayse-green.main">
            {value}
          </Text>
          <Space />
          <Text variant="rayse-24700">
            {`days left to close`}
          </Text>
        </Group>
        <Box style={{ width: 52, height: 52 }}>
          <CircularProgressbarWithChildren
            value={value}
            styles={buildStyles({
              pathColor: '#3F947D',
              trailColor: '#E5E5E5',
              strokeLinecap: 'butt',
            })}
          >
            <Image style={{ width: 32, marginTop: -5 }} src={homeSmile} />
          </CircularProgressbarWithChildren>
        </Box>
      </Group>
    </MainPaper>
  )
}
