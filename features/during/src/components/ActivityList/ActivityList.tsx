import React, { FunctionComponent } from 'react'
import { Group, Text, MainPaper } from '@rayseinc-packages/ui'
import { Activity, ActivityProps } from './Activity'
import { useNavigateToMilestone } from '../../navigations'

export type Activity = ActivityProps & { clickable: boolean; description: string; milestoneId: number, date: string }
interface ActivityListProps {
  activities: Activity[]
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
              date={activity?.date}
              status={activity.status}
              line={!(index + 1 === activities.length)}
              onClick={() =>
                activity.clickable
                  ? navigateToMilestone({
                      title: activity.title,
                      description: activity.description,
                      milestoneId: activity.milestoneId,
                      date: activity.date,
                      //@ts-expect-error add outcomes array to type
                      outcomes: activity.outcomes
                    })
                  : undefined
              }
            />
          ))}
        </Group>
      </Group>
    </MainPaper>
  )
}
