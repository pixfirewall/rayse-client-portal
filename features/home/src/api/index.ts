import { homeApi } from './homeApi'

export const apiReducers = {
  [homeApi.reducerPath]: homeApi.reducer,
}

export * from './homeApi'
