import React, { FunctionComponent } from 'react'
import { Text, Group } from '@rayseinc-packages/ui'
import styled from '@emotion/styled'

export enum HomeLabelType {
  OutOfBudget = 'OutOfBudget',
  SeenDayAgo = 'SeenDayAgo',
}
interface HomeLabelProps {
  type: HomeLabelType
  day?: number
}

export const HomeLabel: FunctionComponent<HomeLabelProps> = ({ type, day }) => {
  switch (type) {
    case HomeLabelType.OutOfBudget:
      return (
        <Container alignH="center" color="#FDE7E6">
          <Text variant="rayse-12600" color="#961B34">
            OUT OF BUDGET
          </Text>
        </Container>
      )
    case HomeLabelType.SeenDayAgo:
      return (
        <Container alignH="center" color="#D9D4C8">
          <Text variant="rayse-12600" color="#2B241F">
            SEEN {day || '#'} DAYS AGO
          </Text>
        </Container>
      )

    default:
      return null
  }
}

export const Container = styled(Group)<{ color: string }>(({ color }) => ({
  borderRadius: 6,
  padding: 8,
  backgroundColor: color,
  width: 110,
}))
