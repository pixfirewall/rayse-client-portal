import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

import { Button, Icon, RayseIcon } from '@rayseinc-packages/ui'
import { useMenuRef } from '../../contexts'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface MenuProps {}

export const Menu: FunctionComponent<MenuProps> = () => {
  const menuRef = useMenuRef()

  return (
    <MainButton onClick={() => menuRef.current?.handleOpen()}>
      <Icon sx={{ color: 'white' }}>menu</Icon>
      <RayseIcon />
    </MainButton>
  )
}

export const MainButton = styled(Button)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  backgroundColor: '#2A6656',
  padding: 6,
  paddingLeft: 10,
  borderRadius: 24,
  gap: 6,
})
