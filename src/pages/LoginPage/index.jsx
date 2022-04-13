import React from 'react'
import LoginForm from '../../components/LoginForm'
import { LogoName } from '../../components/LoginForm/style'
import { Container } from './style'

const LoginPage = () => {
  return (
      <Container>
        <LogoName><p>Clinic<span>Doc</span></p></LogoName>
        <LoginForm />
    </Container>
  )
}

export default LoginPage