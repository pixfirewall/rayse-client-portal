import { PayloadAction } from '@rayseinc-core/types'
import { createSlice } from '@rayseinc-core/redux'
import { PRE_REDUCER_PATH } from '../constants'

export interface PreState {
  agentId: number
  code: string
}

const initialState: PreState = {
  agentId: 0,
  code: ''
}

export const preSlice = createSlice({
  name: PRE_REDUCER_PATH,
  initialState,
  reducers: {
    setAgentId: (state, action: PayloadAction<number>) => {
      state.agentId = action.payload
    },
    setCode: (state, action: PayloadAction<string>) => {
      state.code = action.payload
    },
  },
})

export default preSlice.reducer
