import { preApi } from './pre'

export const apiReducers = {
  [preApi.reducerPath]: preApi.reducer,
}

export const apiMiddlewares = [preApi.middleware]

export * from './pre'
