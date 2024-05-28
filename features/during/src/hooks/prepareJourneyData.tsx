import { useCallback, useEffect, useState } from 'react'

import { Step } from '../types'
import { JourneyData } from '../components'
import { State } from '../components/Journey/JourneyCard'

export const usePrepareJourneyData = (stepsData: Step[] = []) => {
  const [data, setData] = useState<JourneyData[]>([])

  const processData = useCallback(() => {
    const journeyData = stepsData.map(step => {
			const state = step.isComplete ? State.Done : step.milestones.length > 0 ? State.Inprogres : State.Todo
			return {
        order: step.id,
        outcomes: step.milestones.reduce((acc, curr) => {
          return acc + curr.outcomes.length
        }, 0),
        info: step.name || 'null',
        state,
        description: step.agentLongDescription ?? '',
        clickable: state === State.Todo ? false : true,
      }
		})
    setData(journeyData)
  }, [JSON.stringify(stepsData)])

  useEffect(() => {
    processData()
  }, [processData])

  return data
}
