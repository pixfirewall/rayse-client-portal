import React from 'react'
import { Box, TypographyOwnProps } from '@mui/material'
import { Text } from './'

interface ParagraphProps {
  gap?: string
  titleVariant: TypographyOwnProps['variant']
  bodyVariant: TypographyOwnProps['variant']
  color: string
  width?: string
  title: string
  body: string
}

export const Paragraph = ({
  gap, titleVariant, bodyVariant, color, width = '100%', title, body
}: ParagraphProps) => {
  return (
    <Box sx={{ display:'flex', flexDirection: 'column', gap }}>
      <Text variant={titleVariant} color={color} width={width}>
        {title}
      </Text>
      <Text variant={bodyVariant} color={color} width={width}>
        {body}
      </Text>
    </Box>
  )
}
