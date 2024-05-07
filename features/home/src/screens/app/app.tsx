import React from 'react'
import { Button, Box, Text, Link, Image } from '@rayseinc-packages/ui'

import './styles/App.css'

import logo from './logo.svg'
import { useNavigateToHome } from '../../navigations'

export const App = () => {
  const navigateToHome = useNavigateToHome()

  return (
    <Box className="App">
      <Box className="App-header">
        <Image src={logo} className="App-logo" alt="logo" />
        <Text variant="h4">Edit `src/App.tsx` and save to reload.</Text>
        <Link className="App-link" href="https://reactjs.org" target="_blank">
          Learn React
        </Link>
        <Button variant="contained" onClick={() => navigateToHome()}>Hello world</Button>
      </Box>
    </Box>
  )
}
