import React, { FunctionComponent } from 'react'
import { ScrollRestoration } from 'react-router-dom'

import { Group, Text, MainPaper, Image, PageLayout } from '@rayseinc-packages/ui'

import { progressData } from '../../fixtures'
import { ActivityHead, BrandFooter, Footer, NavBar, Progress } from '../../components'

import home from '../../fixtures/assets/hand-home.jpg'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface MilestoneProps {}

export const Milestone: FunctionComponent<MilestoneProps> = () => {
  return (
    <PageLayout>
      <ScrollRestoration />
      <Group
        dir="vertical"
        gap={72}
        padding="12px"
        sx={{ background: 'linear-gradient(179.99deg, #FFFFFF 0.01%, #EEECE6 66.41%)' }}
      >
        <Group dir="vertical" gap={24}>
          <Group>
            <NavBar title="Termite inspection" />
          </Group>
          <Image src={home} style={{ borderRadius: 25, border: '1px solid #EEECE6' }} />
          <ActivityHead />
          <Progress data={progressData} />
          <MainPaper style={{ boxShadow: 'none' }}>
            <Group dir="vertical">
              <Text variant="rayse-24700">Important information</Text>
              <Text variant="rayse-18400">
                Having a termite inspection done before buying a home can give the buyer peace of mind and protect them
                from costly surprises down the road. It can also give the buyer leverage in negotiations if any termite
                damage is found, as they can ask the seller to address the issue before closing or adjust the sale price
                accordingly.
              </Text>
            </Group>
          </MainPaper>
        </Group>
        <Group dir="vertical" gap={12}>
          <BrandFooter />
          <Footer />
        </Group>
      </Group>
    </PageLayout>
  )
}
