import React from 'react'
import { Box } from '@rayseinc-packages/ui'

import './styles/main.css'
import { Footer, BrandFooter, Journey } from '../../components'

export const Main = () => {
  return (
    <Box className="During-Container">
      <Box className="During-Footer-Content">
        <Journey />
        <BrandFooter />
        <Footer />
      </Box>
    </Box>
  )
}
