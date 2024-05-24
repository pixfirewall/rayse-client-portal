import { combineReducers } from '@reduxjs/toolkit'
import { reducers as homeReducers, apiReducers as homeApiReducers } from '@rayseinc-features/home'
import { reducers as preReducers, apiReducers as preApiReducers } from '@rayseinc-features/pre'
import { reducers as duringReducers, apiReducers as duringApiReducers } from '@rayseinc-features/during'

import rootReducer from './rootSlice'

export const appReducers = combineReducers({
  root: rootReducer,
  ...homeReducers,
  ...homeApiReducers,
  ...preReducers,
  ...preApiReducers,
  ...duringReducers,
  ...duringApiReducers,
})
