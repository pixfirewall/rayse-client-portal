import React, { FunctionComponent } from 'react'
import { Group, MainPaper, Text, Image } from '@rayseinc-packages/ui'

import Scheduled from '../../fixtures/assets/Scheduled.png'
import Reviewed from '../../fixtures/assets/Reviewed.png'
import Captured from '../../fixtures/assets/Captured.png'
import Completed from '../../fixtures/assets/Completed.png'
import Discussed from '../../fixtures/assets/Discussed.png'
import Attended from '../../fixtures/assets/Attended.png'
import Started from '../../fixtures/assets/Started.png'
import Submitted from '../../fixtures/assets/Submitted.png'
import Accepted from '../../fixtures/assets/Accepted.png'

const Icons = {
  Scheduled,
  Reviewed,
  Captured,
  Completed,
  Discussed,
  Attended,
  Started,
  Submitted,
  Accepted,
}

export enum CardIcons {
  Scheduled = 'Scheduled',
  Reviewed = 'Reviewed',
  Captured = 'Captured',
  Completed = 'Completed',
  Discussed = 'Discussed',
  Attended = 'Attended',
  Started = 'Started',
  Submitted = 'Submitted',
  Accepted = 'Accepted',
}

interface ProgressCardProps {
  image: CardIcons
  title: string
  date: string
}

export const ProgressCard: FunctionComponent<ProgressCardProps> = ({ image, title, date }) => {
  return (
    <MainPaper style={{ boxShadow: 'none', width: '100px', height: 150, position: 'relative' }}>
      <Group dir="vertical" alignV="center" gap={12}>
        <Image size={56} src={Icons[image]} />
        <Text
          variant="rayse-14700"
          sx={{
            textAlign: 'center',
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,
          }}
        >
          {title}
        </Text>
        <Group sx={{ position: 'absolute', bottom: 20 }}>
          <Text variant="rayse-14400">{date}</Text>
        </Group>
      </Group>
    </MainPaper>
  )
}
