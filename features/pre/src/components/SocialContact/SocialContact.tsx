import React from 'react'
import { Box, Text, Image } from '@rayseinc-packages/ui'

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
    <Box style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }}
    >
      <Image src={String(socialIcons[socialNetwork])} width="52px" height="52px" />
      <Text variant="rayse-32400" color="#FFF">
        {infoText}
      </Text>
    </Box>
  )
}
