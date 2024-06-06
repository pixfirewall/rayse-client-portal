import React from 'react'
import { Box, Text, Image, RayseDivider } from '@rayseinc-packages/ui'

import styles from './ContactInfo.module.css'

import samplePic from './pic.png'
import mailIcon from './mail.png'
import phoneIcon from './phone.png'
import sampleAvatar from './avatar.png'

type Props = {
  picture: string
  email: string
  phone: string
}

export const ContactInfoSmall = ({ picture, email, phone }: Props) => {
  return (
    <Box style={{ overflow: 'scroll' }} className={styles.container}>
      <Text variant="rayse-32700" color="#FFF" paddingBottom="12px">
        My contact info
      </Text>
      <RayseDivider center dir="horizontal" stretch color="rgba(0, 0, 0, 0.16)" />

      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          paddingTop: '8px',
          width: '100%',
          justifyContent: 'space-between',
          overflow: 'hidden',
        }}
      >
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            flex: 1,
          }}
        >
          <Box className={styles.contactRow} paddingTop="12px">
            <Image src={mailIcon} width="36px" height="36px" />
            <Text variant="rayse-20400" color="#FFF" paddingTop="6px" className={styles.contactEmailText}>
              {email}
            </Text>
          </Box>
          <Box className={styles.contactRow}>
            <Image src={phoneIcon} width="36px" height="36px" />
            <Text variant="rayse-20400" color="#FFF" paddingTop="6px">
              {phone}
            </Text>
          </Box>
        </Box>

        <Image
          className={styles.avatarStyle}
          width="96px"
          src={picture || sampleAvatar}
          style={{
            paddingTop: '7px',
            flexShrink: 0,
          }}
        />
      </Box>
    </Box>
  )
}
