import { PayloadAction } from '@rayseinc-core/types'
import { createSlice } from '@rayseinc-core/redux'
import { DURING_REDUCER_PATH } from '../constants'

type BrokerageInfo = {
  name: string | null
  logoImagePath: string | null
  websiteUrl: string | null
}

export interface DuringState {
  journeyId: number
  agentId: number
  activeStep: number[]
  agentActivityData: any | null
  brokerageInfo: BrokerageInfo
}

const initialState: DuringState = {
  journeyId: 0,
  agentId: 0,
  activeStep: [0],
  agentActivityData: null,
  brokerageInfo: {
    name: '',
    logoImagePath: '',
    websiteUrl: '',
  },
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
      state.agentActivityData = action.payload
    },
    setBrokerageInfo: (state, action: PayloadAction<BrokerageInfo>) => {
      state.brokerageInfo = action.payload
    },
  },
})

export default duringSlice.reducer
