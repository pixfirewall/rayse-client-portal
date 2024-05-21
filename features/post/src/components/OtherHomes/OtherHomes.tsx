import React from 'react'
import { Box, Text, Image, ImageList, ImageListItem, LongButton, YellowIcon } from '@rayseinc-packages/ui'

import styles from './OtherHomes.module.css'

import iconHome from './home.png'

import home1 from './homes/home1.jpg'
import home2 from './homes/home2.jpg'
import home3 from './homes/home3.jpg'
import home4 from './homes/home4.jpg'
import home5 from './homes/home5.jpg'
import home6 from './homes/home6.jpg'
import home7 from './homes/home7.jpg'
import home8 from './homes/home8.jpg'

export const OtherHomes = () => {
  const pics = [home1, home2, home3, home4, home5, home6, home7, home8]
  return (
    <Box className={styles.container}>
      <Image src={iconHome} width='56px' height='56px' />
      <Text variant="rayse-24700">
        Other homes that we’ve seen on this journey
      </Text>

      <Box>
        <ImageList variant="masonry" cols={2} gap={18} style={{ boxShadow: 'none' }}>
          {pics.map(img => (
            <ImageListItem key={img}>
              <Image src={img} className={styles.imageStyle} width="95%"
              />
              <Text className={styles.tagButton} alignSelf="center" fontSize="12px" color="#116A3C">
                TAG
              </Text>
            </ImageListItem>
          ))}
        </ImageList>
      </Box>

      <LongButton color="report-white">
        <Text variant="rayse-16700">View all of the homes</Text>
        <Box alignSelf="stretch">
          <YellowIcon material="arrow_forward" />
        </Box>
      </LongButton>
    </Box>
  )
}
