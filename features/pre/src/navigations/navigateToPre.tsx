import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export const useNavigateToPre = (agentId?: number, code?: string) => {
  const navigate = useNavigate()

  const url = `/intro` + (agentId ? `?agentId=${agentId}` : '') + `&code=${encodeURIComponent(code || '')}`
  return useCallback(() => navigate(url, { replace: false }), [])
}

export const useNavigateToPreSecondaryPage = () => {
  const navigate = useNavigate()

  return useCallback((agentId?: number) => {
    const url = `/pre-2nd` + (agentId ? `?agentId=${agentId}` : '')
    navigate(url, { replace: false })
  }, [])
}

export const useNavigateToClarity = () => {
  const navigate = useNavigate()

  return useCallback(() => navigate('/clarity', { replace: false }), [])
}

export const useNavigateToAccountability = () => {
  const navigate = useNavigate()

  return useCallback(() => navigate('/accountability', { replace: false }), [])
}

export const useNavigateToCollaboration = () => {
  const navigate = useNavigate()

  return useCallback(() => navigate('/collaboration', { replace: false }), [])
}

export const useNavigateToPreClosingReport = () => {
  const navigate = useNavigate()

  return useCallback(() => navigate('/pre-closing-report', { replace: false }), [])
}
