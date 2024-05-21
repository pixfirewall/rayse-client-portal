import React, { PropsWithChildren, RefObject, createContext, useContext } from 'react'
import { MenuRef } from '../components'

export type Menu = {
  menuRef?: RefObject<MenuRef>
}
const MenuContext = createContext<Menu>({})

export const MenuProvider = ({ children, menuRef }: PropsWithChildren<{ menuRef: RefObject<MenuRef> }>) => {
  return <MenuContext.Provider value={{ menuRef }}>{children}</MenuContext.Provider>
}

export const useMenuRef = () => {
  const { menuRef } = useContext(MenuContext)
  if (menuRef === undefined) {
    throw new Error('menuRef not available.')
  }
  return menuRef
}
