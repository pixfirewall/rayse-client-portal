import React from 'react'
import { Box, Text, Image } from '@rayseinc-packages/ui'
import { TypographyOwnProps } from '@mui/material'

import facebookIcon from './icons/facebook.png'
import instagramIcon from './icons/instagram.png'
import linkedinIcon from './icons/linkedin.png'
import tiktokIcon from './icons/tiktok.png'

type SocialContactProps = {
  socialNetwork: string
  infoText: string
  size: string
  variant: TypographyOwnProps['variant']
}

const socialIcons: { [index: string]: object } = {
  facebook: facebookIcon,
  instagram: instagramIcon,
  linkedin: linkedinIcon,
  tiktok: tiktokIcon
}

export const SocialContact = (props: SocialContactProps) => {
  const {
    socialNetwork,
    infoText,
    size,
    variant
  } = props

  return (
    <Box style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }}
    >
      <Image src={String(socialIcons[socialNetwork])} width={size} height={size} />
      <Text variant={variant} color="#FFF">
        {infoText}
      </Text>
    </Box>
  )
}
