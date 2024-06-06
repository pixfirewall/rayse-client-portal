import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const TEST_AGENT_ID = 80208

export interface RootState {
  appName: string
  agentId: number
}

const initialState: RootState = {
  appName: 'frontend',
  agentId: TEST_AGENT_ID,
}

export const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    renameApp: (state, action: PayloadAction<string>) => {
      state.appName = action.payload
    },
    setAgentId: (state, action: PayloadAction<number>) => {
      state.agentId = action.payload
    },
  },
})

export const { renameApp, setAgentId } = rootSlice.actions
export default rootSlice.reducer
