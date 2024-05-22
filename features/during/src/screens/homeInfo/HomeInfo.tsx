import React from 'react'
import { Group, MainPaper, PageLayout } from '@rayseinc-packages/ui'
import { BrandFooter, Footer, HomeDetails, HomeSlider, NavBar, Progress } from '../../components'
import { HomeLabel, HomeLabelType } from '../../components/HomeLabel'
import { useLocation } from 'react-router-dom'
import { progressData } from '../../fixtures'

export interface HomeInfoProps {
  images: string[]
  address: string
  price: string
  bed: string
  bath: string
  sqft: string
}

export const HomeInfo = () => {
  const {
    state: { images, ...details },
  } = useLocation()

  return (
    <PageLayout>
      <Group
        dir="vertical"
        gap={72}
        padding="12px"
        sx={{ background: 'linear-gradient(179.99deg, #FFFFFF 0.01%, #EEECE6 66.41%)' }}
      >
        <Group dir="vertical" gap={32}>
          <Group>
            <NavBar title="Termite inspection" />
          </Group>
          <Group dir="vertical" gap={12}>
            <HomeSlider images={images} ribbon />
            <MainPaper style={{ boxShadow: 'none' }}>
              <Group dir="vertical" gap={12}>
                <HomeDetails {...details} />
                <HomeLabel type={HomeLabelType.SeenDayAgo} day={2} />
              </Group>
            </MainPaper>
            <Progress data={progressData} p={3} />
          </Group>
        </Group>
        <Group dir="vertical" gap={12}>
          <BrandFooter />
          <Footer />
        </Group>
      </Group>
    </PageLayout>
  )
}
