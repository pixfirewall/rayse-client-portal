import { PayloadAction } from '@rayseinc-core/types'
import { createSlice } from '@rayseinc-core/redux'
import { DURING_REDUCER_PATH } from '../constants'

export interface DuringState {
  journeyId: number
  agentId: number
  activeStep: number[]
  agentActivityData: any | null
}

const initialState: DuringState = {
  journeyId: 0,
  agentId: 0,
  activeStep: [0],
  agentActivityData: null
}

export const duringSlice = createSlice({
  name: DURING_REDUCER_PATH,
  initialState,
  reducers: {
    setJourneyId: (state, action: PayloadAction<number>) => {
      state.journeyId = action.payload
    },
    setActiveStep: (state, action: PayloadAction<number[]>) => {
      state.activeStep = action.payload
    },
    setAgentId: (state, action: PayloadAction<number>) => {
      state.agentId = action.payload
    },
    setAgentActivityData: (state, action: PayloadAction<any>) => { 
      state.agentActivityData = action.payload;
    },
  },
})

export default duringSlice.reducer
