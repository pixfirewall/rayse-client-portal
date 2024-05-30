import React from 'react'
import { Box, Text, Space, RayseDivider } from '@rayseinc-packages/ui'

type HouseSpec = {
  value: string
  feature: string
}

import styles from './HomeInfo.module.css'

type HomeInfoProps = {
  title?: string
  address: string
  price: string
  discount?: string
  finalFee?: string
  specs: Array<HouseSpec>
  seenStatus?: string
}

export const PostHomeInfo = ({
  title,
  address,
  price,
  discount,
  finalFee,
  specs,
  seenStatus
}: HomeInfoProps) => {
  return (
    <Box className={styles.container}>
      {title && (<Box>
        <Text variant="rayse-24700" color="#171717">{title}</Text>
        <Space />
      </Box>)}
      <Text variant="rayse-20700" color="#171717">{address}</Text>

      <Box className={styles.priceRow}>
        <Text variant="rayse-20700" color="#161616" paddingTop="3px">{price}</Text>
        {discount && (
          <Box className={styles.discountBox}>
            <Text variant="rayse-12600" color="#116A3C">{discount}</Text>
          </Box>
        )}
        {finalFee && (
          <Box paddingTop="3px">
            <Text variant="rayse-18700" color="#525252">{finalFee}</Text>
            <Text variant="rayse-18400" color="#525252"> list</Text>
          </Box>
        )}
      </Box>

      {specs?.length && (
        <Box className={styles.specsRow}>
          <RenderSpec spec={specs[0]} />
          {specs.length > 1 &&
            specs.slice(1).map(spec => (<>
              <RayseDivider color="#C5C2BA" gap={2} />
              <RenderSpec spec={spec} />
            </>))
          }
        </Box>
      )}

      {seenStatus && (
        <Box className={styles.seenStatus}>
          <Text variant="rayse-12600" color="#2B241F">{seenStatus}</Text>
        </Box>
      )}
    </Box>
  )
}

const RenderSpec = ({ spec }: { spec: HouseSpec }) => (<>
  <Text variant="rayse-18700" color="#161616">{spec.value}</Text>
  <Text variant="rayse-18400" color="#161616"> {spec.feature}</Text>
</>)
