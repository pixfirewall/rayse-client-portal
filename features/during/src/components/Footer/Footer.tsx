import './style.css'
import React from 'react'
import { Box, Text, Link, Divider, RayseIcon } from '@rayseinc-packages/ui'


export const Footer = () => {
  return (
    <Box className="Bottom-Nav-Container">
      <Box className="Bottom-Nav-Links">
        <Box className="Bottom-Nav-Links-Row">
          <Link href="http://google.com">About</Link>
          <Divider className="Bottom-Nav-Links-Row-Divider" orientation="vertical" flexItem />
          <Link>Terms & Conditions</Link>
          <Divider className="Bottom-Nav-Links-Row-Divider" orientation="vertical" flexItem />
          <Link>Legal</Link>
        </Box>
        <Box className="Bottom-Nav-Links-Row">
          <Link>Link</Link>
          <Divider className="Bottom-Nav-Links-Row-Divider" orientation="vertical" flexItem />
          <Link>Link</Link>
          <Divider className="Bottom-Nav-Links-Row-Divider" orientation="vertical" flexItem />
          <Link>Link</Link>
        </Box>
      </Box>
      <Box className="Bottom-Nav-License-Container">
        <RayseIcon />
        <Text>© Rayse 2024</Text>
      </Box>
    </Box>
  )
}
