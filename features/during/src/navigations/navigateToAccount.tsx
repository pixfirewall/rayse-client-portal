import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export const useNavigateToAccount = () => {
  const navigate = useNavigate()

  return useCallback(() => navigate(`/during/account`, { replace: false }), [])
}
