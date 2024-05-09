import './styles/App.css'
import React from 'react'
import { Button, Box, Image } from '@rayseinc-packages/ui'

import { useNavigateToDuring } from '@rayseinc-features/during'
import { useNavigateToPre } from '@rayseinc-features/pre'

import logo from './logo.svg'

export const App = () => {
  const navigateToDuring = useNavigateToDuring()
  const navigateToPre = useNavigateToPre()

  return (
    <Box className="App">
      <Box className="App-header">
        <Image src={logo} className="App-logo" alt="logo" />

        <Button variant="contained" onClick={() => navigateToPre()}>
          Open the PRE page
        </Button>
        <Button variant="contained" onClick={() => navigateToDuring()}>
          Open the DURING page
        </Button>
      </Box>
    </Box>
  )
}
