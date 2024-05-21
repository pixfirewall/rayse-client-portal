import React, { FunctionComponent } from 'react'
import { Group, Text, MainPaper } from '@rayseinc-packages/ui'
import { Activity, ActivityProps } from './Activity'
import { useNavigateToMilestone } from '../../navigations'

interface ActivityListProps {
  activities: (ActivityProps & { clickable: boolean })[]
}

export const ActivityList: FunctionComponent<ActivityListProps> = ({ activities }) => {
	const navigateToMilestone = useNavigateToMilestone()
  return (
    <MainPaper>
      <Group dir="vertical" gap={24}>
        <Text variant="rayse-24700">What’s happening</Text>
        <Group dir="vertical" gap={18}>
          {activities.map((activity, index) => (
            <Activity
              title={activity.title}
              subtitle={activity?.subtitle}
              progress={activity?.progress}
              status={activity.status}
              line={!(index + 1 === activities.length)}
              onClick={activity.clickable ? navigateToMilestone : undefined}
            />
          ))}
        </Group>
      </Group>
    </MainPaper>
  )
}
