import { postApi } from './postApi'

export const apiReducers = {
  [postApi.reducerPath]: postApi.reducer,
}

export * from './postApi'