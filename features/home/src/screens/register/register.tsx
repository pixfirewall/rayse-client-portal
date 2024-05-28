import React, { useState, useEffect } from 'react'
import { FilledInput, FormControl, InputLabel, IconButton, InputAdornment, Button, Container } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { Text, Group, RayseIcon } from '@rayseinc-packages/ui'
import { useNavigateToDuringHome12 } from '@rayseinc-features/during'
import { useLazyRegisterQuery } from '../../api/homeApi'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'

export const Register = () => {
  const navigateToDuringHome12 = useNavigateToDuringHome12()

  const [formError, setFormError] = useState('')
  const [isFormValid, setIsFormValid] = useState(false)
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  })
  const location = useLocation()
  const code = String(queryString.parse(location.search)?.['code'])

  const [triggerRegister, { data: registerResponse, error: registerError, isLoading: registerListLoading }] =
    useLazyRegisterQuery()

  const [showPassword, setShowPassword] = useState(false)

  const onChangeValue = (id: string, value: string) => {
    setFormData(oldData => {
      const newData = { ...oldData, [id]: value }
      setIsFormValid(newData.password !== '' && newData.confirmPassword !== '')
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
    triggerRegister({ ...formData, code })
  }

  useEffect(() => {
    if (registerError) {
      // TODO: update to display the error returned in the failed response object
      setFormError('An error occurred. Please try again.')
    }
  }, [registerError])

  useEffect(() => {
    if (registerResponse) {
      navigateToDuringHome12()
    }
  }, [registerResponse, navigateToDuringHome12])

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
          Create your account
        </Text>
        <Text variant={'rayse-16'}>Enter your password below.</Text>
        {formError && (
          <Text variant={'rayse-16'} sx={{ color: 'red' }}>
            {formError}
          </Text>
        )}
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
        <FormControl variant="filled" classes={{ root: 'account-input-text-field' }}>
          <InputLabel htmlFor="confirmPassword">Confirm password</InputLabel>
          <FilledInput
            id="confirmPassword"
            type={showPassword ? 'text' : 'password'}
            defaultValue=""
            onChange={e => onChangeValue('confirmPassword', e.target.value)}
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
        <Button
          variant="contained"
          sx={{ backgroundColor: '#000000', height: 48, borderRadius: '12px' }}
          onClick={handleSubmit}
          disabled={!isFormValid}
        >
          Create account
        </Button>
      </Group>
    </Container>
  )
}
