import React from 'react'
import { Box, Text, YellowIcon, WhiteButton } from '@rayseinc-packages/ui'

import './styles/main.css'

export const Main = () => {

  return (
    <Box className="top-container">

      <Box className="section-container">
        <Box className="top-section">
          <Text fontSize="68px" fontWeight="500">
            Let's find your way home!
          </Text>
          <Text fontSize="24px">
            As your advocate on-demand, I’m committed to honoring your trust and partnership through every step of the journey.
          </Text>

          <Box className="image-slide-container">
            <Box className="image-slide" />
            <Text fontSize="32px" className="image-slide-caption">
              Because having an expert is key(s).
            </Text>
          </Box>
        </Box>
      </Box>

      <Box className="section-container">
        <Box className="section-two">
          <Text fontSize="68px" fontWeight="500" width="600px" lineHeight="78px">
            The search is only 5% of the process.
          </Text>
          <Text fontSize="24px">
            I’ll help you navigate 100 percent of it, all mapped out in advance, with easy information sharing and real-time collaboration.
          </Text>

          <Box className="meet-rayse-container">
            <WhiteButton>
              <Text fontSize="24px" fontWeight="600">
                Meet Rayse
              </Text>
              <YellowIcon material="arrow_forward" />
            </WhiteButton>
          </Box>
        </Box>
      </Box>

    </Box>
  )
}
