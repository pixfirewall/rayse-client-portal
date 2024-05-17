import React, { FunctionComponent, useRef } from 'react'
import { Group, MainPaper } from '@rayseinc-packages/ui'
import {
  Footer,
  BrandFooter,
  Journey,
  Matrix,
  Header,
  HomeSlider,
  TimeLeft,
  HomeDetails,
  ActivityList,
  Menu,
  type MenuRef,
} from '../../components'
import { activities } from '../../fixtures'
import { MenuProvider } from '../../contexts'

import home01 from '../../fixtures/assets/home-01.png'
import home02 from '../../fixtures/assets/home-02.png'
import home03 from '../../fixtures/assets/home-03.png'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Home34Props {}

export const Home34: FunctionComponent<Home34Props> = () => {
  const menuRef = useRef<MenuRef>(null)

  return (
    <MenuProvider menuRef={menuRef}>
      <Group dir="vertical" gap={48} padding="12px">
        <Menu ref={menuRef} />
        <Header />
        <Group dir="vertical" gap={12}>
          <TimeLeft value={24} />
          <HomeSlider images={[home01, home02, home03]} />
          <MainPaper>
            <HomeDetails address="731 kettner Ave" price="$8,400,000" bed="2" bath="4" sqft="4,660" />
          </MainPaper>
          <ActivityList activities={activities} />
        </Group>
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
