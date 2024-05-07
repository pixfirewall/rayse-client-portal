import React from 'react'
import { type RouteObject } from '@rayseinc-core/types'
import { App } from '../screens'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
  },
]
