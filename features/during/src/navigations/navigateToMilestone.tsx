import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export const useNavigateToMilestone = () => {
  const navigate = useNavigate()

  return useCallback(
    (params: { title: string; description: string; milestoneId: number; date: string }) =>
      navigate(`/during/milestone`, { replace: false, state: params }),
    [],
  )
}
