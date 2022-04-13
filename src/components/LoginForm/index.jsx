import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, TextField, ThemeProvider } from '@mui/material';
import { Form, FormLabel, FormWrapper, theme } from './style'
import { useAuth } from '../../providers/Auth';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

  const {signIn} = useAuth()
  const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()

const handleForm = (data) => {
    reset();
    signIn(data)
    navigate('/dashboard')
}

  return (
        <ThemeProvider theme={theme}>
        <FormWrapper>
        <Form onSubmit={handleSubmit(handleForm)}>
        <FormLabel>Logar</FormLabel>
        <TextField type='text' variant='outlined' label='Username' size='small' {...register('username')}/>
        <TextField type='password' label='Password' size='small' {...register('password')}/>
            <Button type='submit' variant='contained'>Entrar</Button>
    </Form>
    </FormWrapper>
    </ThemeProvider>
  )
}

export default LoginForm