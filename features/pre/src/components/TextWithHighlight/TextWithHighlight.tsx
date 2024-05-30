import React from 'react'

import { Box, Text } from '@rayseinc-packages/ui'
import { TypographyOwnProps } from '@mui/material'

type Props = {
  pre?: string
  highlighted: string
  post?: string
  highlightColor: string
  variant: TypographyOwnProps['variant']
}

export const TextWithHighlight = ({
  pre,
  highlighted,
  post,
  highlightColor,
  variant
 }: Props) => {
  return (
    <Box>
      {pre && (<Text variant={variant}>{pre}</Text>)}
      <Text
        variant={variant}
        sx={{
          background: highlightColor,
          padding: '5px',
          'margin-left': '4px',
          'margin-right': '4px',
          'border-radius': '8px'
        }}
      >
        {highlighted}
      </Text>
      {post && (<Text variant={variant}>{post}</Text>)}
    </Box>
  )
}
