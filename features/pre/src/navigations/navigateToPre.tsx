import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export const useNavigateToPre = () => {
  const navigate = useNavigate()

  return useCallback(() => navigate(`/pre`, { replace: false }), [])
}
