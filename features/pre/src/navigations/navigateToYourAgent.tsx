import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export const useNavigateToYourAgent = () => {
  const navigate = useNavigate()

  return useCallback(() => navigate(`/during/your-agent`, { replace: false }), [])
}
