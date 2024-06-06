import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReportProps } from '../types'

export const useNavigateToMilestone = () => {
  const navigate = useNavigate()

  return useCallback((params: ReportProps) => navigate(`/closing-report`, { replace: false, state: params }), [])
}
