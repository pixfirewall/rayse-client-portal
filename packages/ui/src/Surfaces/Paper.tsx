import { Paper, PaperOwnProps } from '@mui/material'
import React, { FunctionComponent, PropsWithChildren } from 'react'

interface PropsMainPaper {
  style?: React.CSSProperties
  bgcolor?: string
  padding?: string
  borderRadius?: string
  height?: string
  width?: string
}

export const MainPaper: FunctionComponent<PropsWithChildren<PropsMainPaper & PaperOwnProps>> = ({
  children,
  padding,
  borderRadius,
  bgcolor,
  style,
  height,
  width,
  ...props
}) => {
  return (
    <Paper
      variant="outlined"
      sx={{
        borderRadius: borderRadius || '24px',
        padding: padding || '20px',
        boxShadow: '0 0 2px #888',
        backgroundColor: bgcolor || '#FFFFFF',
        height,
        width,
        ...style,
      }}
      {...props}
    >
      {children}
    </Paper>
  )
}

export { Paper }
