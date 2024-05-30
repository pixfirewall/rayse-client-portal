import { useSelector } from 'react-redux'
import { PostStore } from '../data'

export const usePostSelector = useSelector.withTypes<PostStore>()