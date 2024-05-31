import React, { useState, useEffect } from 'react'
import {
  FilledInput,
  FormControl,
  InputLabel,
  IconButton,
  InputAdornment,
  Button,
  Container,
  Link,
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { Text, Group, RayseIcon } from '@rayseinc-packages/ui'
import { useNavigateToDuringHome12 } from '@rayseinc-features/during'
import { useLazyLoginQuery } from '../../api/homeApi'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate()
  const navigateToDuringHome12 = useNavigateToDuringHome12()

  const [formError, setFormError] = useState('')
  const [isFormValid, setIsFormValid] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleForgotPasswordClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent> | React.TouchEvent<HTMLAnchorElement>,
  ) => {
    event.preventDefault()
    navigate('/forgot-password')
  }

  const [triggerLogin, { data: loginResponse, error: loginError, isLoading: loginListLoading }] = useLazyLoginQuery()

  const [showPassword, setShowPassword] = useState(false)

  const onChangeValue = (id: string, value: string) => {
    setFormData(oldData => {
      const newData = { ...oldData, [id]: value }
      setIsFormValid(newData.email !== '' && newData.password !== '')
      return newData
    })
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const handleSubmit = () => {
    triggerLogin(formData)
  }

  useEffect(() => {
    if (loginError) {
      // TODO: update to display the error returned in the failed response object
      setFormError('An error occurred. Please try again.')
    }
  }, [loginError])

  useEffect(() => {
    if (loginResponse) {
      navigateToDuringHome12()
    }
  }, [loginResponse, navigateToDuringHome12])

  return (
    <Container
      style={{
        background: 'linear-gradient(179.99deg, #FFFFFF 0.01%, #EEECE6 66.41%)',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Group
        dir="vertical"
        gap={12}
        padding="24px"
        sx={{
          overflow: 'hidden',
        }}
        style={{ height: '100vh', width: '100%', maxWidth: 600 }}
      >
        <RayseIcon iconSize={32} size={48} borderRadius={'15%'} />
        <Text style={{ paddingTop: 24 }} variant={'rayse-36'}>
          Sign in to Rayse
        </Text>
        <Text variant={'rayse-16'}>Enter your info below.</Text>
        {formError && (
          <Text variant={'rayse-16'} sx={{ color: 'red' }}>
            {formError}
          </Text>
        )}
        <FormControl variant="filled" classes={{ root: 'account-input-text-field' }}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <FilledInput
            id="email"
            defaultValue=""
            onChange={e => onChangeValue('email', e.target.value)}
            sx={{ marginBottom: '5px' }}
          />
        </FormControl>
        <FormControl variant="filled" classes={{ root: 'account-input-text-field' }}>
          <InputLabel htmlFor="password">Password</InputLabel>
          <FilledInput
            id="password"
            type={showPassword ? 'text' : 'password'}
            defaultValue=""
            onChange={e => onChangeValue('password', e.target.value)}
            sx={{ marginBottom: '5px' }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Link underline="always" href="#" onClick={handleForgotPasswordClick} sx={{ fontSize: 18 }}>
          Forgot password?
        </Link>
        <Button
          variant="contained"
          sx={{ backgroundColor: '#000000', height: 48, borderRadius: '12px',
            '&:hover': {
              backgroundColor: '#FFD800',
              color: '#000000',
            },
           }}
          onClick={handleSubmit}
          disabled={!isFormValid}
        >
          Sign in
        </Button>
      </Group>
    </Container>
  )
}
