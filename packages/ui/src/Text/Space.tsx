import React, { FunctionComponent } from 'react'
import { Typography } from '@mui/material'

interface PropsSpace {
  s?: number
}

export const Space: FunctionComponent<PropsSpace> = ({ s = 1 }) => {
  return <Typography>&nbsp;</Typography>
}
