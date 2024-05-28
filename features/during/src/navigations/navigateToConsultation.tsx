import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export type StepInfo = {
  title: string
  description: string
	stepId: number
}

export const useNavigateToConsultation = () => {
  const navigate = useNavigate()

  return useCallback((stepInfo: StepInfo) => navigate(`/during/consultation`, { replace: false, state: stepInfo }), [])
}
