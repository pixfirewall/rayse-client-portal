import type { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes'
import type { MaybePromise } from '@reduxjs/toolkit/dist/query/tsHelpers'
import type { FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/query'
import type { Dispatch, AnyAction, MiddlewareAPI } from 'redux'
export type { Middleware } from 'redux'
export type { PayloadAction } from '@reduxjs/toolkit'

export type Query<T> = MaybePromise<QueryReturnValue<T, FetchBaseQueryError, FetchBaseQueryMeta>>

export interface ReduxMiddleware<Action, S = any, D extends Dispatch = Dispatch> {
  (api: MiddlewareAPI<D, S>): (next: Dispatch<AnyAction>) => (action: Action) => any
}
