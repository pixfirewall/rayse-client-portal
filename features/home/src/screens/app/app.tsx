import './styles/App.css'
import React from 'react'
import { Button, Box, Image } from '@rayseinc-packages/ui'

import { useNavigateToPre, useNavigateToPreSecondaryPage } from '@rayseinc-features/pre'
import { useNavigateToDuringHome12, useNavigateToDuringHome34 } from '@rayseinc-features/during'

import logo from './logo.svg'

export const App = () => {
  const navigateToDuringHome12 = useNavigateToDuringHome12()
  const navigateToPre = useNavigateToPre()
  const navigateToPreSecondaryPage = useNavigateToPreSecondaryPage()
  const navigateToDuringHome34 = useNavigateToDuringHome34()

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
        <Button variant="contained" onClick={() => navigateToDuringHome12()}>
          Open the DURING Home 1/2
        </Button>
        <Button variant="contained" onClick={() => navigateToDuringHome34()}>
          Open the DURING Home 3/4
        </Button>
      </Box>
    </Box>
  )
}
