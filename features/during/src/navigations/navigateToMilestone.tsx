import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export const useNavigateToMilestone = () => {
  const navigate = useNavigate()

  return useCallback(() => navigate(`/during/milestone`, { replace: false }), [])
}
