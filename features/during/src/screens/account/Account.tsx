import React, { FunctionComponent, useState } from 'react'
import { Group, Text, Button, Avatar, Showif, PageLayout } from '@rayseinc-packages/ui'
import { NavBar } from '../../components'
import { Badge, FilledInput, FormControl, InputLabel, styled } from '@mui/material'
import { SaveButton } from './SaveButton'

import edit from '../../fixtures/assets/edit.png'
import user from '../../fixtures/assets/user.png'

import './style.css'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AccountProps {}

export const Account: FunctionComponent<AccountProps> = () => {
  const [ifChanged, setIfChanged] = useState(false)
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
  })

  const onChangeValue = (id: string, value: string) => {
    setIfChanged(true)
    setFormData(oldData => ({ ...oldData, [id]: value }))
  }

	const onSaveChanges = () => {
		setIfChanged(false)
		console.log(formData)
	}

  return (
    <PageLayout>
      <Group
        dir="vertical"
        gap={24}
        padding="12px"
        sx={{
          background: 'linear-gradient(179.99deg, #FFFFFF 0.01%, #EEECE6 66.41%)',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        <Group
          dir="vertical"
          gap={24}
          sx={
            ifChanged
              ? {
                  height: 'calc(100% - 90px)',
                  overflowY: 'scroll',
                  overflowX: 'hidden',
                  boxSizing: 'content-box',
                  scrollbarWidth: 'none',
                }
              : {}
          }
        >
          <Group>
            <NavBar icon="ArrowBack" title="Your account" />
          </Group>
          <Group alignH="center">
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              badgeContent={
                <Button onClick={() => console.log('change profile picture.')}>
                  <SmallAvatar alt="Remy Sharp" src={edit} />
                </Button>
              }
            >
              <Avatar alt="Travis Howard" src={user} sx={{ width: 176, height: 176 }} />
            </Badge>
          </Group>
          <Group gap={12} dir="vertical">
            <FormControl variant="filled" classes={{ root: 'account-input-text-field' }}>
              <InputLabel htmlFor="first-name">First name</InputLabel>
              <FilledInput
                id="first-name"
                defaultValue="Steven"
                onChange={e => onChangeValue('fname', e.target.value)}
              />
            </FormControl>
            <FormControl variant="filled" classes={{ root: 'account-input-text-field' }}>
              <InputLabel htmlFor="last-name">Last name</InputLabel>
              <FilledInput id="last-name" defaultValue="Aoki" onChange={e => onChangeValue('lname', e.target.value)} />
            </FormControl>
            <FormControl variant="filled" classes={{ root: 'account-input-text-field' }}>
              <InputLabel htmlFor="email">Email</InputLabel>
              <FilledInput
                id="email"
                defaultValue="getcaked@stevenaoki.com"
                onChange={e => onChangeValue('email', e.target.value)}
                sx={{ marginBottom: '5px' }}
              />
              <Text variant="rayse-14400" color="#525252">
                Your email is only used for internal reasons so that we may send you updates or information.
              </Text>
            </FormControl>
            <FormControl variant="filled" classes={{ root: 'account-input-text-field' }}>
              <InputLabel htmlFor="phone-number">Phone number</InputLabel>
              <FilledInput
                id="phone-number"
                defaultValue="+1 (123) 123 - 4567"
                onChange={e => onChangeValue('phone', e.target.value)}
                sx={{ marginBottom: '5px' }}
              />
              <Text variant="rayse-14400" color="#525252">
                You will receive important text updates about your journey, never marketing material.
              </Text>
            </FormControl>
          </Group>
        </Group>
        <Showif con={ifChanged}>
          <SaveButton onClick={onSaveChanges} />
        </Showif>
      </Group>
    </PageLayout>
  )
}

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 56,
  height: 56,
  border: `2px solid ${theme.palette.background.paper}`,
}))
