import { FunctionComponent, PropsWithChildren } from 'react'

interface PropsShowif {
  con: boolean
}

export const Showif: FunctionComponent<PropsWithChildren<PropsShowif>> = ({ con, children }) => {
  if (con) {
    return children
  }
  return null
}
