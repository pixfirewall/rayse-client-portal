import React from 'react'
import { Group } from '@rayseinc-packages/ui'

import { Footer, BrandFooter, Journey, Matrix } from '../../components'

export const Main = () => {
  return (
    <Group
      dir="vertical"
      gap={48}
      padding="12px 8px"
      sx={{ background: 'linear-gradient(179.99deg, #FFFFFF 0.01%, #EEECE6 66.41%)' }}
    >
      <Group dir='vertical' gap={12}>
        <Matrix agentName="Julie" activities={34} outcomes={42} tours={15} offers={1} />
        <Journey />
        <BrandFooter />
        <Footer />
      </Group>
    </Group>
  )
}
