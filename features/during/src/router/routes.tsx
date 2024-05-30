import React from 'react'
import { type RouteObject } from '@rayseinc-core/types'
import { Home12, Home34, Consultation, Milestone, HomeInfo, AgentActivity, Account, YourAgent, Post, ClosingReport } from '../screens'

export const routes: RouteObject[] = [
  {
    path: '/during/12',
    element: <Home12 />,
  },
  {
    path: '/during/34',
    element: <Home34 />,
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
    element: <AgentActivity />,
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
    path: '/post',
    element: <Post />,
  },
  {
    path: '/closing-report',
    element: <ClosingReport />,
  },
]
