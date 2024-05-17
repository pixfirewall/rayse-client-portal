import React, { FunctionComponent } from 'react'
import { Group, Text, CustomTheme, Colors } from '@rayseinc-packages/ui'
import { Close, ArrowBack } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface NavBarProps {
  title: string
  onClose?: () => void
  icon?: 'Close' | 'ArrowBack'
}

export const NavBar: FunctionComponent<NavBarProps> = ({ title, onClose, icon = 'Close' }) => {
  const navigate = useNavigate()

  return (
    <Group
      alignH="center"
      alignV="center"
      sx={{
        backgroundColor: '#EEECE6',
        width: '100%',
        borderRadius: '20px',
        border: '1px solid #EEECE6',
        height: '56px',
      }}
    >
      <IconButton onClick={() => (onClose ? onClose() : navigate(-1))} sx={{ position: 'absolute', left: '30px' }}>
        <CustomTheme primary={Colors.B1}>
          {icon === 'Close' ? <Close color="primary" /> : <ArrowBack color="primary" />}
        </CustomTheme>
      </IconButton>
      <Text variant="rayse-14700">{title}</Text>
    </Group>
  )
}
