import React from 'react'
import { type RouteObject } from '@rayseinc-core/types'
import { Home12, Home34} from '../screens'

export const routes: RouteObject[] = [
  {
    path: '/during/12',
    element: <Home12 />,
  },
  {
    path: '/during/34',
    element: <Home34 />,
  },
]
