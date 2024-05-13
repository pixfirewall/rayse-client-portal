import React, { FunctionComponent, PropsWithChildren } from 'react'
import { ThemeProvider, createTheme } from '@mui/material'

export enum Colors {
  Y1 = '#FFCE31',
}

const themeGenerator = (color: Colors) =>
  createTheme({
    palette: {
      primary: {
        main: color,
      },
    },
  })

interface CustomThemeProps {
  primary: Colors
}

export const CustomTheme: FunctionComponent<PropsWithChildren<CustomThemeProps>> = ({ children, primary }) => {
  const theme = themeGenerator(primary)
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
