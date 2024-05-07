import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, router } from '@rayseinc-core/router'
import { store } from '@rayseinc-core/store'
import { Provider } from '@rayseinc-core/redux'
import { ThemeProvider, createTheme } from '@mui/material'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

// doc: https://mui.com/material-ui/customization/theming
const theme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
})

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
