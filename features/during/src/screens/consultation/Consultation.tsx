import React, { FunctionComponent } from 'react'
import { Group, PageLayout, Text } from '@rayseinc-packages/ui'

import { Footer, BrandFooter, Matrix, ActivityList, NavBar } from '../../components'
import { consultationActivities } from '../../fixtures'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ConsultationProps {}

export const Consultation: FunctionComponent<ConsultationProps> = () => {
  return (
    <PageLayout>
      <Group
        dir="vertical"
        gap={72}
        padding="12px"
        sx={{ background: 'linear-gradient(179.99deg, #FFFFFF 0.01%, #EEECE6 66.41%)' }}
      >
        <Group dir="vertical" gap={24}>
          <Group>
            <NavBar title="Consultation" />
          </Group>
          <Group dir="vertical">
            <Text variant="rayse-24700">Consultation</Text>
            <Text variant="rayse-18400">
              During the consultation, we will gather important information about your preferences, budget, and
              timeline, and will answer any questions about the home buying process.
            </Text>
          </Group>
          <Matrix title="Activity for this step" activities={34} outcomes={42} tours={15} offers={1} />
          <ActivityList activities={consultationActivities} />
        </Group>
        <Group dir="vertical" gap={12}>
          <BrandFooter />
          <Footer />
        </Group>
      </Group>
    </PageLayout>
  )
}
