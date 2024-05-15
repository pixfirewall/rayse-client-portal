import React, { FunctionComponent } from 'react'
import { Group } from '@rayseinc-packages/ui'

import { Footer, BrandFooter, Journey, Matrix, Header, Evaluating, RejectedHomes } from '../../components'
import { homeData } from '../../fixtures/homeData'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Home12Props {}

export const Home12: FunctionComponent<Home12Props> = () => {
  return (
    <Group
      dir="vertical"
      gap={48}
      padding="12px 8px"
      sx={{
        background: 'linear-gradient(179.99deg, #FFFFFF 0.01%, #EEECE6 66.41%)',
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
  )
}
