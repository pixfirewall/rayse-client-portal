import { useCallback, useEffect, useState } from 'react'

import { Step } from '../types'
import { JourneyData } from '../components'
import { State } from '../components/Journey/JourneyCard'

const getStepStatus = (step: Step): State => {
  if (step.milestones.length === 0) {
    return State.Todo;
  }

  const allRequiredOutcomesChecked = step.milestones.every(milestone => {
    const requiredOutcomes = milestone.outcomes.filter(o => o.requiredForMilestoneCompletion);
    const checkedRequiredOutcomes = requiredOutcomes.filter(o => o.status === 'Checked');
    return requiredOutcomes.length > 0 && requiredOutcomes.length === checkedRequiredOutcomes.length;
  });

  if (allRequiredOutcomesChecked) {
    return State.Done;
  }

  const isActive = step.milestones.some(milestone =>
    milestone.outcomes.some(outcome => outcome.status === 'Checked')
  );

  return isActive ? State.Inprogres : State.Todo;
};



export const usePrepareJourneyData = (stepsData: Step[] = []) => {
  const [data, setData] = useState<JourneyData[]>([])


  const processData = useCallback(() => {
    const journeyData = stepsData.map(step => {
			const state = step.isComplete ? State.Done : getStepStatus(step)
      const outcomesCompleted = step.milestones.reduce((acc, milestone) => {
        return (
          acc +
          milestone.outcomes.filter(outcome => outcome.status === 'Checked').length
        );
      }, 0);
			return {
        order: step.id,
        outcomes: step.milestones.reduce((acc, curr) => {
          return acc + curr.outcomes.length
        }, 0),
        info: step.name || 'null',
        state,
        description: step.agentLongDescription ?? '',
        clickable: state === State.Todo ? false : true,
        outcomesCompleted,
      }
		})
    setData(journeyData)
  }, [JSON.stringify(stepsData)])

  useEffect(() => {
    processData()
  }, [processData])

  return data
}
