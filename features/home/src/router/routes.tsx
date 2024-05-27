import React from 'react'
import { type RouteObject } from '@rayseinc-core/types'
import { App, Login, Register } from '../screens'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]
