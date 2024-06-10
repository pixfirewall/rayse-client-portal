import React from 'react'
import { type RouteObject } from '@rayseinc-core/types'
import { Home12, Consultation, Milestone, HomeInfo, Account, YourAgent, ClosingReport } from '../screens'

export const routes: RouteObject[] = [
  {
    path: '/during/12',
    element: <Home12 />,
  },
  {
    path: '/during/consultation',
    element: <Consultation />,
  },
  {
    path: '/during/milestone',
    element: <Milestone />,
  },
  {
    path: '/during/agent-activity',
    element: <ClosingReport isJourneyClosed={false} />,
  },
  {
    path: '/during/home-info',
    element: <HomeInfo />,
  },
  {
    path: '/during/your-agent',
    element: <YourAgent />,
  },
  {
    path: '/during/account',
    element: <Account />,
  },
  {
    path: '/closing-report',
    element: <ClosingReport isJourneyClosed={true} />,
  },
]
