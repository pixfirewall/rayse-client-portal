import { HOME_REDUCER_PATH } from '../constants'
import { HomeGlobalState, homeSlice } from './homeSlice'

export const reducers = { homeReducer: homeSlice.reducer }
export { homeSlice }

export const { setBooksInfo } = homeSlice.actions

export type HomeStore = {
  [HOME_REDUCER_PATH]: HomeGlobalState
}
