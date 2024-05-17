import React, { FunctionComponent, useRef } from 'react'
import { Group } from '@rayseinc-packages/ui'

import {
  Footer,
  BrandFooter,
  Journey,
  Matrix,
  Header,
  Evaluating,
  RejectedHomes,
  MenuRef,
  Menu,
} from '../../components'
import { homeData } from '../../fixtures/homeData'
import { MenuProvider } from '../../contexts'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Home12Props {}

export const Home12: FunctionComponent<Home12Props> = () => {
  const menuRef = useRef<MenuRef>(null)

  return (
    <MenuProvider menuRef={menuRef}>
      <Menu ref={menuRef} />
      <Group
        dir="vertical"
        gap={48}
        padding="12px"
        sx={{
          background: 'linear-gradient(179.99deg, #FFFFFF 0.01%, #EEECE6 66.41%)',
					overflow: 'hidden'
        }}
      >
        <Header review={true} />
        <Evaluating homes={homeData} />
        <RejectedHomes homes={homeData.map(home => ({ ...home, label: true }))} />
        <Group dir="vertical" gap={12}>
          <Matrix
            title="This is what Julie has been up to on your behalf"
            agentName="Julie"
            activities={34}
            outcomes={42}
            tours={15}
            offers={1}
          />
          <Journey />
          <BrandFooter />
          <Footer />
        </Group>
      </Group>
    </MenuProvider>
  )
}
