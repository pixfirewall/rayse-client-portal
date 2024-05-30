import { PayloadAction } from '@rayseinc-core/types'
import { createSlice } from '@rayseinc-core/redux'
import { POST_REDUCER_PATH } from '../constants'

export interface PostState {
  journeyId: number
  agentActivityData: any | null
}

const initialState: PostState = {
  journeyId: 0,
  agentActivityData: null,
}

export const postSlice = createSlice({
  name: POST_REDUCER_PATH,
  initialState,
  reducers: {
    setJourneyId: (state, action: PayloadAction<number>) => {
      state.journeyId = action.payload
    },
    setAgentActivityData: (state, action: PayloadAction<any>) => { 
      state.agentActivityData = action.payload;
    },
  },
})

export default postSlice.reducer
