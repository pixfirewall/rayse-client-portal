import { PayloadAction } from '@rayseinc-core/types'
import { createSlice } from '@rayseinc-core/redux'
import { DURING_REDUCER_PATH } from '../constants'

export interface DuringState {
  journeyId: number
  activeStep: number[]
}

const initialState: DuringState = {
  journeyId: 0,
  activeStep: [0],
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
  },
})

export default duringSlice.reducer
