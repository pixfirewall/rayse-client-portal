import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export const useNavigateToPre = (agentId?: number) => {
  const navigate = useNavigate()

  const url = `/pre` + (agentId ? `?agent=${agentId}` : '')
  return useCallback(() => navigate(url, { replace: false }), [])
}

export const useNavigateToPreSecondaryPage = (agentId?: number) => {
  const navigate = useNavigate()

  const url = `/pre-2nd` + (agentId ? `?agent=${agentId}` : '')
  return useCallback(() => navigate(url, { replace: false }), [])
}
