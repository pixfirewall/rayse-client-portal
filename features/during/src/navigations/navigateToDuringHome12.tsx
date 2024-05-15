import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export const useNavigateToDuringHome12 = () => {
  const navigate = useNavigate()

  return useCallback(() => navigate(`/during/12`, { replace: false }), [])
}
