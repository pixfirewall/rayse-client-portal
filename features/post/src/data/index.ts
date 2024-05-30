import { POST_REDUCER_PATH } from '../constants'
import { PostState, postSlice } from './postSlice'

export const reducers = { [POST_REDUCER_PATH]: postSlice.reducer }
export { postSlice }

export const { setJourneyId, setAgentActivityData } = postSlice.actions

export type PostStore = {
  [POST_REDUCER_PATH]: PostState
}
