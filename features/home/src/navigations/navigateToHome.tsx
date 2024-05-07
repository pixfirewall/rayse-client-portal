import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export const useNavigateToHome = () => {
  const navigate = useNavigate()

  return useCallback(() => navigate(`/test`, { replace: false }), [])
}
