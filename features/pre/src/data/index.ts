import { PRE_REDUCER_PATH } from '../constants'
import { PreState, preSlice } from './preSlice'
export const reducers = { [PRE_REDUCER_PATH]: preSlice.reducer }
export { preSlice }
export const { setAgentId, setCode } = preSlice.actions
export type PreStore = {
  [PRE_REDUCER_PATH]: PreState
}
