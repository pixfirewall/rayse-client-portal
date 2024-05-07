import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface RootState {
  appName: string
}

const initialState: RootState = {
  appName: 'frontend',
}

export const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    renameApp: (state, action: PayloadAction<string>) => {
      state.appName = action.payload
    },
  },
})

export const { renameApp } = rootSlice.actions
export default rootSlice.reducer
