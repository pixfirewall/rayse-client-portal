import './styles/App.css'
import React from 'react'
import { Button, Box, Text, Link, Image } from '@rayseinc-packages/ui'

import { useNavigateToDuring } from '@rayseinc-features/during'

import logo from './logo.svg'

export const App = () => {
  const navigateToDuring = useNavigateToDuring()

  return (
    <Box className="App">
      <Box className="App-header">
        <Image src={logo} className="App-logo" alt="logo" />
        <Text variant="h4">Edit `src/App.tsx` and save to reload.</Text>
        <Link className="App-link" href="https://reactjs.org" target="_blank">
          Learn React
        </Link>
        <Button variant="contained" onClick={() => navigateToDuring()}>
          Hello world
        </Button>
      </Box>
    </Box>
  )
}
