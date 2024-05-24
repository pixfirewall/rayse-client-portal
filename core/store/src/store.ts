import { configureStore } from '@reduxjs/toolkit'
import { homeApi } from '@rayseinc-features/home'
import { duringApi } from '@rayseinc-features/during'
import { appReducers } from './reducers'

export const store = configureStore({
  reducer: appReducers,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(homeApi.middleware, duringApi.middleware),
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppReducers = typeof appReducers
