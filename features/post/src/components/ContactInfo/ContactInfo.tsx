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

export const ContactInfo = ({ picture, email, phone }: Props) => {
  return (
    <Box className={styles.container}>
      <Image className={styles.imageStyle} src={picture || samplePic} />
      <Text variant="rayse-32700" color="#FFF" paddingTop="28px">
        My contact info
      </Text>
      <Box className={styles.contactRow} paddingTop="12px">
        <Image src={mailIcon} width="36px" height="36px" />
        <Text variant="rayse-20400" color="#FFF" paddingTop="6px">{email}</Text>
      </Box>
      <Box className={styles.contactRow}>
        <Image src={phoneIcon} width="36px" height="36px" />
        <Text variant="rayse-20400" color="#FFF" paddingTop="6px">{phone}</Text>
      </Box>
    </Box>
  )
}

export const ContactInfoSmall = ({ picture, email, phone }: Props) => {
  return (
    <Box className={styles.container}>
      <Text variant="rayse-32700" color="#FFF" paddingBottom="12px">
        My contact info
      </Text>
      <RayseDivider center dir="horizontal" stretch color="rgba(0, 0, 0, 0.16)" />

      <Box style={{
        display: 'flex',
        flexDirection: 'row',
        paddingTop: '8px',
        width: '100%',
        justifyContent: 'space-between'
      }}>
        <Box style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          <Box className={styles.contactRow} paddingTop="12px">
            <Image src={mailIcon} width="36px" height="36px" />
            <Text variant="rayse-20400" color="#FFF" paddingTop="6px">{email}</Text>
          </Box>
          <Box className={styles.contactRow}>
            <Image src={phoneIcon} width="36px" height="36px" />
            <Text variant="rayse-20400" color="#FFF" paddingTop="6px">{phone}</Text>
          </Box>
        </Box>

        <Image
          className={styles.avatarStyle}
          width="96px"
          src={picture || sampleAvatar}
          style={{
            paddingTop: '7px'
          }}/>
      </Box>
    </Box >
  )
}
