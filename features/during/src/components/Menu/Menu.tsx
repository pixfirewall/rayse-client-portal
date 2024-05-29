import { Backdrop, IconButton } from '@mui/material'
import React, { useState, forwardRef, useImperativeHandle } from 'react'
import { Close, Portrait, ImportContacts, Task } from '@mui/icons-material'

import { removeAccessToken } from '@rayseinc-core/gateway'
import { useNavigateToPreSecondaryPage } from '@rayseinc-features/pre'
import { Group, Box, Link, Text, WhiteButton, CustomTheme, Colors, Button } from '@rayseinc-packages/ui'

import styles from './Menu.module.css'
import { useDuringSelector } from '../../hooks'
import { useNavigateToAgentActivity, useNavigateToAccount, useNavigateToLogin } from '../../navigations'
import { useDispatch } from 'react-redux'
import { duringApi } from '../../api'

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

  const agentId = useDuringSelector(state => state.DURING_REDUCER_PATH.agentId)

	const dispatch = useDispatch()
  const navigateToLogin = useNavigateToLogin()
  const navigateToAccount = useNavigateToAccount()
  const navigateToAgentActivity = useNavigateToAgentActivity()
  const navigateToPreSecondaryPage = useNavigateToPreSecondaryPage()

  const signout = () => {
		dispatch(duringApi.util.resetApiState())
    removeAccessToken()
    navigateToLogin()
  }

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
          <WhiteButton onClick={() => navigateToAccount()}>
            <Portrait />
            <Text>Your account</Text>
          </WhiteButton>
          <Box className={styles.divider} />
          <WhiteButton onClick={() => navigateToAgentActivity()}>
            <Task />
            <Text>Agent activities</Text>
          </WhiteButton>
          <Box className={styles.divider} />
          <WhiteButton onClick={() => navigateToPreSecondaryPage(agentId)}>
            <ImportContacts />
            <Text>How it works</Text>
          </WhiteButton>
        </Group>
        <Group alignH="center">
          <Link
            underline="always"
            component={Button}
            onClick={signout}
            textTransform="none"
            sx={{ position: 'absolute', bottom: '70px' }}
          >
            <Text variant="rayse-16700">Sign out</Text>
          </Link>
        </Group>
      </Group>
    </Backdrop>
  )
})
