import React from 'react'
import { Box, Text, Image, Link } from '@rayseinc-packages/ui'
import { TypographyOwnProps } from '@mui/material'

import facebookIcon from './icons/facebook.png'
import instagramIcon from './icons/instagram.png'
import linkedinIcon from './icons/linkedin.png'
import tiktokIcon from './icons/tiktok.png'
import noIcon from '../AgentProfile/checkered.png'
import luxTeamIcon from './icons/Lux-Team.png'

const UNKNOWN_MEDIA_TEXT = 'Link'

const socialIcons: { [index: string]: object } = {
  Facebook: facebookIcon,
  Instagram: instagramIcon,
  LinkedIn: linkedinIcon,
  TikTok: tiktokIcon,
  Website: luxTeamIcon,
}

const inferMediaName = (url: string) => {
  for (const name in socialIcons) {
    if (url.includes(name.toLowerCase())) {
      return name
    }
  }
  return 'unknown'
}

type SocialContactProps = {
  url: string
  size: string
  color?: string
  variant: TypographyOwnProps['variant']
  name: string
}

export const SocialContact = (props: SocialContactProps) => {
  const { url, size, color = '#FFF', variant, name } = props

  return (
    <Box
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}
    >
      <Image src={String(socialIcons[name])} width={size} height={size} />
      <Link href={url} target="_blank" style={{ cursor: 'pointer' }}>
        <Text variant={variant} color={color}>
          {name === 'unknown' ? UNKNOWN_MEDIA_TEXT : name}
        </Text>
      </Link>
    </Box>
  )
}
