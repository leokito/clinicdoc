import React from 'react'
import { useAppointment } from '../../providers/Appointment'
import { Greeting, Header, Logout } from './style'

const HeaderComponent = () => {

  const {signOut} = useAppointment()


  return (
    <Header>
        <Greeting>Bem-vindo, Dr Fulano</Greeting>
        <Logout onClick={()=> signOut}>Sair</Logout>
    </Header>
  )
}

export default HeaderComponent