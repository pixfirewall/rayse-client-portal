import { createBrowserRouter } from 'react-router-dom'
import { routes as homeRoutes } from '@rayseinc-features/home'
import { routes as duringRoutes } from '@rayseinc-features/during'

export const router = createBrowserRouter([...homeRoutes, ...duringRoutes])

export { RouterProvider } from 'react-router-dom'
export type { RouteObject } from 'react-router-dom'
