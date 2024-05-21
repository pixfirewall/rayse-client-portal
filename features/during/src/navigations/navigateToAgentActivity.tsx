import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export const useNavigateToAgentActivity = () => {
  const navigate = useNavigate()

  return useCallback(() => navigate(`/during/agent-activity`, { replace: false }), [])
}
