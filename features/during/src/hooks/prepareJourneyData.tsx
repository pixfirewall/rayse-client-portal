import { useCallback, useEffect, useState } from "react"

import { Steps } from "../types"
import { JourneyData } from "../components"
import { State } from "../components/Journey/JourneyCard"

export const usePrepareJourneyData = (stepsData: Steps[]) => {
  const [data, setData] = useState<JourneyData[]>([])

  const processData = useCallback(() => {
    const journeyData = stepsData.map(step => ({
      order: step.id,
      outcomes: step.milestones.reduce((acc, curr) => {
        return acc + curr.outcomes.length
      }, 0),
      info: step.name || 'null',
      state: step.isComplete ? State.Done : State.Inprogres,
    }))
    setData(journeyData)
  }, [JSON.stringify(stepsData)])

  useEffect(() => {
    processData()
  }, [processData])

  return data
}
