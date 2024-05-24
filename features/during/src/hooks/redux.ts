import { useSelector } from 'react-redux'
import { DuringStore } from '../data'

export const useDuringSelector = useSelector.withTypes<DuringStore>()
