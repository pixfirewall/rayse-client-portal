import React from 'react'
import { Box, Text, Image } from '@rayseinc-packages/ui'

import './styles.css'

import facebookIcon from './icons/facebook.png'

type SocialContactProps = {
  socialNetwork: string
  infoText: string
}

const socialIcons: { [index: string]: object } = {
  facebook: facebookIcon
}

export const SocialContact = (props: SocialContactProps) => {
  const {
    socialNetwork,
    infoText
  } = props

  return (
    <Box className="social-contact">
      <Image src={String(socialIcons[socialNetwork])} width="52px" height="52px" />
      <Text fontSize="32px" color="#FFF">
        {infoText}
      </Text>
    </Box>
  )
}
