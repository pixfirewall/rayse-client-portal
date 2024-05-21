import { createBrowserRouter } from 'react-router-dom'
import { routes as homeRoutes } from '@rayseinc-features/home'
import { routes as duringRoutes } from '@rayseinc-features/during'
import { routes as preRoutes } from '@rayseinc-features/pre'
import { routes as postRoutes } from '@rayseinc-features/post'

export const router = createBrowserRouter([...homeRoutes, ...duringRoutes, ...preRoutes, ...postRoutes])

export { RouterProvider } from 'react-router-dom'
export type { RouteObject } from 'react-router-dom'
