import React from 'react'
import { type RouteObject } from '@rayseinc-core/types'
import { Main, SecondaryPage, Clarity, Accountability, Collaboration } from '../screens'

export const routes: RouteObject[] = [
  {
    path: '/intro',
    element: <Main />
  },
  {
    path: '/pre-2nd',
    element: <SecondaryPage />
  },
  {
    path: '/clarity',
    element: <Clarity />
  },
  {
    path: '/accountability',
    element: <Accountability />
  },
  {
    path: '/collaboration',
    element: <Collaboration />
  }
]
