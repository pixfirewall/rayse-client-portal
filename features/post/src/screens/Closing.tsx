import React, { useRef } from 'react'
import { Box, Grid, Image } from '@rayseinc-packages/ui'
import {
  Header,
  MenuRef,
  Menu,
  TimeTaken,
  HomeInfo,
  WhatWeDid,
  Footer,
  BrandFooter,
  OtherHomes,
  ContactInfo
} from '../components'
import { MenuProvider } from '../contexts'

import styles from './styles/Closing.module.css'

import home1 from './assets/home1.jpg'

export const Closing = () => {
  const menuRef = useRef<MenuRef>(null)

  return (
    <MenuProvider menuRef={menuRef}>
      <Menu ref={menuRef} />
      <Grid container className={styles.topContainer}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12} className={styles.sectionContainer}>
          <TimeTaken days={47} />
        </Grid>

        <Grid item xs={12}>
          <Box className={styles.imageBox}>
            <Image src={home1} width="100%" style={{
              borderRadius: '24px'
            }} />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <HomeInfo
            title=""
            address="731 Kettner Ave"
            price="$799,000"
            discount="-6%"
            finalFee="$750,000"
            specs={[
              { value: '3', feature: 'bed' },
              { value: '4', feature: 'bath' },
              { value: '4.6k', feature: 'sqft' }
            ]}
            seenStatus='SEEN 4 DAYS AGO'
          />
        </Grid>

        <Grid item xs={12}>
          <WhatWeDid
            outcomes={42}
            activities={34}
            tours={15}
            offers={1}
          />
        </Grid>

        <Grid item xs={12}>
          <OtherHomes />
        </Grid>

        <Grid item xs={12}>
          <ContactInfo
            picture=""
            email="email@gmail.com"
            phone="(512) 123 - 1234"
          />
        </Grid>

        <Grid item xs={12}>
          <BrandFooter />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </MenuProvider>
  )
}
