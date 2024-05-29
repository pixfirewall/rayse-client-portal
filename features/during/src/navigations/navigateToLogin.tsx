import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export const useNavigateToLogin = () => {
  const navigate = useNavigate()

  return useCallback(() => navigate(`/login`, { replace: false }), [])
}
