import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export const useNavigateToPre = (agentId?: number) => {
  const navigate = useNavigate()

  const url = `/pre` + (agentId ? `?agentId=${agentId}` : '')
  return useCallback(() => navigate(url, { replace: false }), [])
}

export const useNavigateToPreSecondaryPage = () => {
  const navigate = useNavigate()

  return useCallback((agentId?: number) => {
    const url = `/pre-2nd` + (agentId ? `?agentId=${agentId}` : '')
    navigate(url, { replace: false })
  }, [])
}
