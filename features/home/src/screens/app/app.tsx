import './styles/App.css'
import React from 'react'
import { Button, Box, Image } from '@rayseinc-packages/ui'

import { useNavigateToPre, useNavigateToPreSecondaryPage } from '@rayseinc-features/pre'
import { useNavigateToDuringHome12 } from '@rayseinc-features/during'

import logo from './logo.svg'

export const App = () => {
  const navigateToDuring = useNavigateToDuringHome12()
  const navigateToPre = useNavigateToPre()
  const navigateToPreSecondaryPage = useNavigateToPreSecondaryPage()

  return (
    <Box className="App">
      <Box className="App-header">
        <Image src={logo} className="App-logo" alt="logo" />

        <Button variant="contained" onClick={() => navigateToPre()}>
          Open the PRE page
        </Button>
        <Button variant="contained" onClick={() => navigateToPreSecondaryPage()}>
          Open the PRE SECONDARY page
        </Button>
        <Button variant="contained" onClick={() => navigateToDuring()}>
          Open the DURING page
        </Button>
      </Box>
    </Box>
  )
}
