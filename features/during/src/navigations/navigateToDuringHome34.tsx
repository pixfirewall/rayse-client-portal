import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export const useNavigateToDuringHome34 = () => {
  const navigate = useNavigate()

  return useCallback(() => navigate(`/during/34`, { replace: false }), [])
}
