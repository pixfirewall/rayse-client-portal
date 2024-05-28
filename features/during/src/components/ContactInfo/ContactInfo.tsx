import React, { FunctionComponent } from 'react'
import { Group, MainPaper, Text, Image } from '@rayseinc-packages/ui'

import mail from '../../fixtures/assets/mail-icon.png'
import phoneIcon from '../../fixtures/assets/phone-call-icon.png'

export interface ContactInfoProps {
  email?: string
  phone?: string
}

export const ContactInfo: FunctionComponent<ContactInfoProps> = ({ email, phone }) => {
  return (
    <MainPaper style={{ boxShadow: 'none', backgroundColor: '#D9D4C8', border: '1px solid #EEECE6' }}>
      <Group dir="vertical" gap={32}>
        <Text variant="rayse-24700">My contact info</Text>
        <Group dir="vertical" gap={12}>
          <Group alignV="center" gap={8}>
            <Image size={36} src={mail} />
            <Text variant="rayse-18400">{email}</Text>
          </Group>
          <Group alignV="center" gap={8}>
            <Image size={36} src={phoneIcon} />
            <Text variant="rayse-18400">{phone}</Text>
          </Group>
        </Group>
      </Group>
    </MainPaper>
  )
}
