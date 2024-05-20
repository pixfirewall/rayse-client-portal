import React, { FunctionComponent } from 'react'
import { Group, Paper, RayseDivider, Text } from '@rayseinc-packages/ui'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface RayseAccordionProps {
  title: string
  progress: string
  minute: string
  address: string
  details: string
}

export const RayseAccordion: FunctionComponent<RayseAccordionProps> = ({
  title,
  progress,
  minute,
  address,
  details,
}) => {
  return (
    <Paper sx={{ borderRadius: '20px', padding: '10px' }}>
      <Accordion sx={{ all: 'unset' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
          <Group dir="vertical" gap={7}>
            <Text variant="rayse-18400">{title}</Text>
            <Group>
              <Text variant="rayse-16400" color="#535049">
                {progress}
              </Text>
              <RayseDivider dir="vertical" gap={12} color="#C5C2BA" />
              <Text variant="rayse-16400" color="#535049">
                {minute} min
              </Text>
              <RayseDivider dir="vertical" gap={12} color="#C5C2BA" />
              <Text variant="rayse-16400" color="#535049">
                {address}
              </Text>
            </Group>
          </Group>
        </AccordionSummary>
        <AccordionDetails>
          <Text variant="rayse-14400" color="#535049">
            {details}
          </Text>
        </AccordionDetails>
      </Accordion>
    </Paper>
  )
}
