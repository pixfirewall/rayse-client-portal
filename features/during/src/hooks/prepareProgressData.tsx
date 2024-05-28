import { useCallback, useEffect, useState } from 'react'

import { Outcome } from '../types'
import { ProgressData } from '../components'
import { CardIcons } from '../components/Progress/ProgressCard'

export const usePrepareProgressData = (outcomes: Outcome[] = []) => {
  const [data, setData] = useState<ProgressData[]>([])

  const processData = useCallback(() => {
    const progressData = outcomes.map(outcome => {
      const pickDate = new Date(outcome.updatedOn)
      const date = `${pickDate.getDay()}/${pickDate.getMonth()}`

      return {
        image: CardIcons.Accepted,
        title: outcome.name ?? '',
        date,
      }
    })
    setData(progressData)
  }, [JSON.stringify(outcomes)])

  useEffect(() => {
    processData()
  }, [processData])

  return data
}
