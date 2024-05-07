import { createBrowserRouter } from 'react-router-dom'
import { routes as homeRoutes } from '@rayseinc-features/home'

export const router = createBrowserRouter([...homeRoutes])

export { RouterProvider } from 'react-router-dom'
export type { RouteObject } from 'react-router-dom'
