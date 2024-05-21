import React, { useState, forwardRef, useImperativeHandle } from 'react'
import { Group, Box, Link, Text, WhiteButton, CustomTheme, Colors } from '@rayseinc-packages/ui'

import { Backdrop, IconButton } from '@mui/material'
import { Close, Portrait, ImportContacts, Task } from '@mui/icons-material'

import styles from './Menu.module.css'
import { useNavigateToAgentActivity } from '../../navigations'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface MenuProps {}

export interface MenuRef {
  handleOpen: () => void
  handleClose: () => void
}

export const Menu = forwardRef<MenuRef, MenuProps>((props, ref) => {
  const [open, setOpen] = useState(false)
  useImperativeHandle(ref, () => ({
    handleOpen,
    handleClose,
  }))
	const navigateToAgentActivity = useNavigateToAgentActivity()

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Backdrop sx={{ zIndex: theme => theme.zIndex.drawer + 1 }} open={open}>
      <Group dir="vertical" className={styles.container}>
        <Group className={styles.menuHeader} alignH="center" alignV="center">
          <IconButton onClick={handleClose} className={styles.icon}>
            <CustomTheme primary={Colors.B1}>
              <Close color="primary" />
            </CustomTheme>
          </IconButton>
          <Text variant="rayse-14700">Menu</Text>
        </Group>
        <Group dir="vertical" alignV="flex-start">
          <WhiteButton>
            <Portrait />
            <Text>Your account</Text>
          </WhiteButton>
          <Box className={styles.divider} />
          <WhiteButton onClick={() => navigateToAgentActivity()}>
            <Task />
            <Text>Agent activities</Text>
          </WhiteButton>
          <Box className={styles.divider} />
          <WhiteButton>
            <ImportContacts />
            <Text>How it works</Text>
          </WhiteButton>
        </Group>
        <Link className={styles.linkContainer} underline="always">
          <Text variant="rayse-16700">Sign out</Text>
        </Link>
      </Group>
    </Backdrop>
  )
})
