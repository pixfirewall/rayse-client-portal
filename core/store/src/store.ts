import { configureStore } from '@reduxjs/toolkit'
import { homeApi } from '@rayseinc-features/home'
import { preApi } from '@rayseinc-features/pre'
import { duringApi } from '@rayseinc-features/during'
import { appReducers } from './reducers'

export const store = configureStore({
  reducer: appReducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(homeApi.middleware, duringApi.middleware, preApi.middleware),
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppReducers = typeof appReducers
