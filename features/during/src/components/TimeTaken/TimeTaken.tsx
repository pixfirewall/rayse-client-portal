import React, { FunctionComponent } from 'react'
import { Group, Box, Text, Space, MainPaper, Image } from '@rayseinc-packages/ui'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

import homeSmile from './home-smile.png'

interface TimeLeftProps {
  days: number
}

export const TimeTaken: FunctionComponent<TimeLeftProps> = ({ days }) => {
  return (
    <MainPaper padding="20px">
      <Group alignH="space-between">
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <Text variant="rayse-24700" alignSelf="flex-start">
              It took us a total
            </Text>
            <Text variant="rayse-24700" color="rayse-green.main">
              {days}
            </Text>
          </Box>

          <Box
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Text variant="rayse-24700" color="rayse-green.main">
              {`days`}
            </Text>
            <Space />
            <Text variant="rayse-24700">to close</Text>
          </Box>
        </Box>

        <Box style={{ width: 52, height: 52 }}>
          <CircularProgressbarWithChildren
            value={100}
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
