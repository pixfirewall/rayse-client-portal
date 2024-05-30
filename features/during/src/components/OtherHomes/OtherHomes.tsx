import React, { useState } from 'react'
import { Box, Text, Image, ImageList, ImageListItem, LongButton, Icon } from '@rayseinc-packages/ui'

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

const IMAGE_DISPLAY_LIMIT = 8

export const OtherHomes = () => {
  const [expandHomes, setExpandHomes] = useState(false)

  const pics = [home1, home2, home3, home4, home5, home6, home7, home8,
    home1, home2, home3, home4, home5, home6, home7, home8]
  const limitedPics = pics.slice(0, pics.length > IMAGE_DISPLAY_LIMIT ? IMAGE_DISPLAY_LIMIT : pics.length)

  const imageReference = expandHomes ? pics : limitedPics

  return (
    <Box className={styles.container}>
      <Image src={iconHome} width='56px' height='56px' />
      <Text variant="rayse-24700">
        Other homes that we’ve seen on this journey
      </Text>

      <Box>
        <ImageList variant="masonry" cols={2} gap={18} style={{ boxShadow: 'none' }}>
          {imageReference.map(img => (
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

      <LongButton color="report-white" onClick={() => setExpandHomes(!expandHomes)}>
        {expandHomes ? (<>
          <Text variant="rayse-16700">Show fewer homes</Text>
          <Box alignSelf="stretch">
            <Icon sx={{ color: 'black', 'font-size': 48, paddingTop: '7px', paddingRight: '5px' }}>expand_less</Icon>
          </Box>
        </>) : (<>
          <Text variant="rayse-16700">Show all homes</Text>
          <Box alignSelf="stretch">
            <Icon sx={{ color: 'black', 'font-size': 48, paddingTop: '7px', paddingRight: '5px' }}>expand_more</Icon>
          </Box>
        </>)}
      </LongButton>
    </Box>
  )
}
