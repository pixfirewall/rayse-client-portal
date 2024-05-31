import { useCallback, useEffect, useState } from 'react'

import { Milestone } from '../types'
import { Activity } from '../components'
import { ActivityStatus } from '../components/ActivityList/Activity'

const getMilestoneStatus = (milestone: Milestone): ActivityStatus => {
  const requiredOutcomes = milestone.outcomes.filter(o => o.requiredForMilestoneCompletion);
  const checkedRequiredOutcomes = requiredOutcomes.filter(o => o.status === 'Checked');
  const hasCheckedOutcomes = milestone.outcomes.some(o => o.status === 'Checked');

  if (requiredOutcomes.length === 0) {
    return hasCheckedOutcomes ? ActivityStatus.Inprogres : ActivityStatus.Todo;
  }

  if (requiredOutcomes.length === checkedRequiredOutcomes.length) {
    return ActivityStatus.Done;
  } else if (hasCheckedOutcomes) {
    return ActivityStatus.Inprogres;
  } else {
    return ActivityStatus.Todo;
  }
};

export const usePrepareActivityData = (milestones: Milestone[] = [], clickable = true) => {
  const [data, setData] = useState<Activity[]>([])

  const processData = useCallback(() => {
    const milestoneData = milestones.map<Activity>(m => {
      const pickDate = m.outcomes.map(o => new Date(o.updatedOn)).sort((a, b) => b.valueOf() - a.valueOf()).pop() as Date
			const date = `${pickDate.getDay()}/${pickDate.getMonth()}`
      return {
        clickable,
        title: m.name ?? '',
        status: getMilestoneStatus(m),
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
