import { useSelector } from 'react-redux'
import { PreStore } from '../data'
export const usePreSelector = useSelector.withTypes<PreStore>()
