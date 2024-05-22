import React, { FunctionComponent } from 'react'
import { Group, MainPaper, Text, Image } from '@rayseinc-packages/ui'

import mail from '../../fixtures/assets/mail-icon.png'
import phone from '../../fixtures/assets/phone-call-icon.png'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ContactInfoProps {}

export const ContactInfo: FunctionComponent<ContactInfoProps> = () => {
  return (
    <MainPaper style={{ boxShadow: 'none', backgroundColor: '#D9D4C8', border: '1px solid #EEECE6' }}>
      <Group dir="vertical" gap={32}>
        <Text variant="rayse-24700">My contact info</Text>
        <Group dir="vertical" gap={12}>
          <Group alignV="center" gap={8}>
            <Image size={36} src={mail} />
            <Text variant="rayse-18400">email@email.com</Text>
          </Group>
          <Group alignV="center" gap={8}>
            <Image size={36} src={phone} />
            <Text variant="rayse-18400">(512) 123 - 1234</Text>
          </Group>
        </Group>
      </Group>
    </MainPaper>
  )
}
