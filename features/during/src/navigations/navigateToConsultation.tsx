import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export const useNavigateToConsultation = () => {
  const navigate = useNavigate()

  return useCallback(() => navigate(`/during/consultation`, { replace: false }), [])
}
