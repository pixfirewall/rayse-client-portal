import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, router } from '@rayseinc-core/router'
import { store } from '@rayseinc-core/store'
import { Provider } from '@rayseinc-core/redux'
import { ThemeProvider } from '@mui/material'

import { theme } from './theme'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

// TEMPORARILY COMMENTED OUT
//import '@fontsource/inter/300.css'
//import '@fontsource/inter/400.css'
//import '@fontsource/inter/500.css'
//import '@fontsource/inter/700.css'

export const render = () => {
  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
  return root.render(
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>,
  )
}
