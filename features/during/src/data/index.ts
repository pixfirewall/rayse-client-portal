import { DURING_REDUCER_PATH } from '../constants'
import { DuringState, duringSlice } from './duringSlice'

export const reducers = { [DURING_REDUCER_PATH]: duringSlice.reducer }
export { duringSlice }

export const { setJourneyId, setIsJourneyClosed, setActiveStep, setAgentId, setAgentActivityData, setBrokerageInfo } =
  duringSlice.actions

export type DuringStore = {
  [DURING_REDUCER_PATH]: DuringState
}
