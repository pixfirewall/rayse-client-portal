import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { YourAgentProps } from '../screens'

export const useNavigateToYourAgent = (props: YourAgentProps) => {
  const navigate = useNavigate()

  return useCallback(() => navigate(`/during/your-agent`, { replace: false, state: props }), [props])
}
