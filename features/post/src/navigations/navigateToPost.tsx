import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export const useNavigateToPost = () => {
  const navigate = useNavigate()

  return useCallback(() => navigate(`/post`, { replace: false }), [])
}

export const useNavigateToClosingReport = () => {
  const navigate = useNavigate()

  return useCallback(() => navigate(`/closing-report`, { replace: false }), [])
}
