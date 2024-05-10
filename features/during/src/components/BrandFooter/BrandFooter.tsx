import './style.css'
import React from 'react'
import { Box, Text, YellowIcon, WhiteButton, Divider, Image } from '@rayseinc-packages/ui'

import logo from './logo.png'

export const BrandFooter = () => {
  return (
    <Box className="Brand-Footer-Container">
      <Box className="Brand-Footer-Logo-CTA-Container">
        <Image className="Brand-Footer-Logo" src={logo} width={96} height={96} />
        <WhiteButton>
          Learn more
          <YellowIcon material="arrow_forward" />
        </WhiteButton>
      </Box>
      <Divider className="Brand-Footer-Divider" orientation="horizontal" flexItem />
      <Box className="Brand-Footer-Text-Container">
        <Text variant="rayse-24700" color="#FFFFFF">
          25% of buyers end up
        </Text>
        <Text variant="rayse-24700" color="#FFFFFF">
          seeking a lawyer
        </Text>
      </Box>
    </Box>
  )
}
