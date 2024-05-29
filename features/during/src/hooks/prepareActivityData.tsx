import { useCallback, useEffect, useState } from 'react'

import { Milestone } from '../types'
import { Activity } from '../components'
import { ActivityStatus } from '../components/ActivityList/Activity'

export const usePrepareActivityData = (milestones: Milestone[] = [], clickable = true) => {
  const [data, setData] = useState<Activity[]>([])

  const processData = useCallback(() => {
    const milestoneData = milestones.map<Activity>(m => {
      const pickDate = m.outcomes.map(o => new Date(o.updatedOn)).sort((a, b) => b.valueOf() - a.valueOf()).pop() as Date
			const date = `${pickDate.getDay()}/${pickDate.getMonth()}`
      return {
        clickable,
        title: m.name ?? '',
        status: m.isComplete ? ActivityStatus.Done : ActivityStatus.Todo,
        description: m.clientLongDescription ?? '',
        date,
        // subtitle: m.isComplete ? 'Scheduled' : undefined,
				milestoneId: m.id
      }
    })
    setData(milestoneData)
  }, [JSON.stringify(milestones)])

  useEffect(() => {
    processData()
  }, [processData])

  return data
}
