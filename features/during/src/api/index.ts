import { duringApi } from './during'

export const apiReducers = {
  [duringApi.reducerPath]: duringApi.reducer,
}

export const apiMiddlewares = [duringApi.middleware]

export * from './during'
