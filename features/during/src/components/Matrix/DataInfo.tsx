import React, { FunctionComponent } from 'react'
import { Group, Text, Grid, Image } from '@rayseinc-packages/ui'

import icon1 from './icons/icon1.png'
import icon2 from './icons/icon2.png'
import icon3 from './icons/icon3.png'
import icon4 from './icons/icon4.png'

const logo = [icon1, icon2, icon3, icon4]

interface DataInfoProps {
  badge: number
  text: string
  icon: 1 | 2 | 3 | 4
}
export const DataInfo: FunctionComponent<DataInfoProps> = ({ badge, text, icon }) => {
  return (
    <Grid container spacing={5}>
      <Grid item xs={4} sx={{ alignSelf: 'center' }}>
        <Image src={logo[icon - 1]} style={{ marginLeft: 10, width: 36 }} />
      </Grid>
      <Grid item xs={8}>
        <Group dir="vertical">
          <Text variant="rayse-24700">{badge}</Text>
          <Text>{text}</Text>
        </Group>
      </Grid>
    </Grid>
  )
}
