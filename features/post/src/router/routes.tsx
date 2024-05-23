import React from 'react'
import { type RouteObject } from '@rayseinc-core/types'
import { Closing, Report } from '../screens'

export const routes: RouteObject[] = [
  {
    path: '/post',
    element: <Closing />
  },
  {
    path: '/closing-report',
    element: <Report />
  }
]
