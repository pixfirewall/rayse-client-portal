import React from 'react'
import { type RouteObject } from '@rayseinc-core/types'
import { Main, SecondaryPage } from '../screens'

export const routes: RouteObject[] = [
  {
    path: '/pre',
    element: <Main />
  },
  {
    path: '/meet-rayse',
    element: <SecondaryPage />
  }
]
