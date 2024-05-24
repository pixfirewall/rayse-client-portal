import { PayloadAction } from '@rayseinc-core/types'
import { createSlice } from '@rayseinc-core/redux'
import { PRE_REDUCER_PATH } from '../constants'

export interface PreState {
  agentId: number
}

const initialState: PreState = {
  agentId: 0,
}

export const preSlice = createSlice({
  name: PRE_REDUCER_PATH,
  initialState,
  reducers: {
    setAgentId: (state, action: PayloadAction<number>) => {
      state.agentId = action.payload
    },
  },
})

export default preSlice.reducer
