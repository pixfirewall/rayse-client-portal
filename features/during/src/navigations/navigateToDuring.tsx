import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export const useNavigateToDuring = () => {
  const navigate = useNavigate()

  return useCallback(() => navigate(`/during/12`, { replace: false }), [])
}
