import { createTheme } from '@mui/material'

// doc: https://mui.com/material-ui/customization/theming
export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      mobile: 360,
      sm: 480,
      tablet: 1024,
      desktop: 1440,
    },
  },
  typography: {
    'rayse-12600': {
      fontSize: 12,
      fontWeight: 600,
      fontFamily: 'inter',
    },
    'rayse-14400': {
      fontSize: 14,
      fontWeight: 400,
      fontFamily: 'inter',
    },
    'rayse-14700': {
      fontSize: 14,
      fontWeight: 700,
      fontFamily: 'inter',
    },
    'rayse-16400': {
      fontSize: 16,
      fontWeight: 400,
      fontFamily: 'inter',
    },
    'rayse-16700': {
      fontSize: 16,
      fontWeight: 700,
      fontFamily: 'inter',
    },
    'rayse-18400': {
      fontSize: 18,
      fontWeight: 400,
      fontFamily: 'inter',
    },
    'rayse-18700': {
      fontSize: 18,
      fontWeight: 700,
      fontFamily: 'inter',
    },
    'rayse-20400': {
      fontSize: 20,
      fontWeight: 400,
      fontFamily: 'inter',
    },
    'rayse-20700': {
      fontSize: 20,
      fontWeight: 700,
      fontFamily: 'inter',
    },
    'rayse-24400': {
      fontSize: 24,
      fontWeight: 400,
      fontFamily: 'inter',
    },
    'rayse-24700': {
      fontSize: 24,
      fontWeight: 700,
      fontFamily: 'inter',
    },
    'rayse-32400': {
      fontSize: 32,
      fontWeight: 400,
      fontFamily: 'inter',
    },
    'rayse-32700': {
      fontSize: 32,
      fontWeight: 700,
      fontFamily: 'inter',
    },
    'rayse-36700': {
      fontSize: 36,
      fontWeight: 700,
      fontFamily: 'inter',
    },
    'rayse-44700': {
      fontSize: 44,
      fontWeight: 700,
      fontFamily: 'inter',
    },
    'rayse-68700': {
      fontSize: 68,
      fontWeight: 700,
      fontFamily: 'inter',
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
        typography: 'body1',
        color: 'text.primary',
      },
    },
  },
  palette: {
    'rayse-green': {
      main: '#3F947D',
      light: '#E9DB5D',
      dark: '#A29415',
      contrastText: '#242105',
    },
    'rayse-blue': {
      main: '#006ECE',
      light: '#E9DB5D',
      dark: '#A29415',
      contrastText: '#242105',
    },
  },
})
