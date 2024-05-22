import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { HomeInfoProps } from '../screens'

export const useNavigateToHomeInfo = (props: HomeInfoProps) => {
  const navigate = useNavigate()

  return useCallback(() => navigate(`/during/home-info`, { replace: false, state: props }), [props])
}
