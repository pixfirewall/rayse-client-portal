import React from 'react'
import { type RouteObject } from '@rayseinc-core/types'
import { Main, SecondaryPage } from '../screens'

export const routes: RouteObject[] = [
  {
    path: '/pre',
    element: <Main />
  },
  {
    path: '/pre-2nd',
    element: <SecondaryPage />
  }
]
