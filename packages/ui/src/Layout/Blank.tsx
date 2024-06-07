import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const Blank = styled(Box)<{ vertical?: boolean; space: number }>(({ vertical, space }) => ({
  height: vertical ? space : undefined,
  width: vertical ? undefined : space,
}))
