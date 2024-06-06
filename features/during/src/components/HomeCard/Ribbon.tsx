import React, { FunctionComponent } from 'react'
import { Group, Text } from '@rayseinc-packages/ui'
import styled from '@emotion/styled'

import { Available } from './Available'

interface RibbonProps {
  show: boolean
}

export const Ribbon: FunctionComponent<RibbonProps> = ({ show }) => {
  if (show) {
    return (
      <RibbonContainer alignV="center" gap={4} className="Ribbon-Container">
        <Available />
        <Text variant="rayse-12600">FOR SALE</Text>
      </RibbonContainer>
    )
  }
  return null
}

const RibbonContainer = styled(Group)`
  background-color: #ffffff;
  border-radius: 444px;
  padding: 8px 12px;
  margin-top: 16px;
  margin-left: 16px;
  position: absolute;
`
