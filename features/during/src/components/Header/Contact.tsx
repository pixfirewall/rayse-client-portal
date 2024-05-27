import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Avatar, Button, Text } from '@rayseinc-packages/ui'
import { useNavigateToYourAgent } from '../../navigations'

interface ContactProps {
  image?: string
}

export const Contact: FunctionComponent<ContactProps> = ({ image }) => {
  const navigateToYourAgent = useNavigateToYourAgent({})

  return (
    <MainButton onClick={navigateToYourAgent}>
      <Avatar src={image} />
      <Text variant="rayse-16700">Contact</Text>
    </MainButton>
  )
}

export const MainButton = styled(Button)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  backgroundColor: '#2A6656',
  padding: 6,
  paddingRight: 10,
  borderRadius: 24,
  boxShadow: 'none',
  textTransform: 'none',
  color: 'white',
  gap: 6,
})
