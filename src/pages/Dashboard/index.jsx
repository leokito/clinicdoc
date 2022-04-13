import React, { useEffect, useState } from 'react';
import HeaderComponent from '../../components/Header';
import {Container, IndicatorWrapper, Indicator, ScheduleWrapper, ScheduleTitle, Schedule, Appointment, Link} from './style';
import { INITIAL_EVENTS } from '../../utils/events';
import { api } from '../../services/api';
import { useAppointment } from '../../providers/Appointment';

const Dashboard = () => {

    const [eventos, setEventos] = useState([])

    // useEffect(()=> {
    //     api
    //     .get('/appointments/')
    //     .then((res) => setEventos(res.data))
    //     .catch((e)=> console.log(e))
    // })

    const {initial, signOut} = useAppointment()

    let cancelled = 0
    let completed = 0

    // for(let i=0; i < INITIAL_EVENTS.length; i++) {
    //     if (INITIAL_EVENTS[i].status === 'cancelled')
    //     cancelled++
    //     if (INITIAL_EVENTS[i].status === 'completed') {
    //         completed++
    //     }
    // }


    for(let i=0; i < initial.length; i++) {
        if (initial[i].status === 'cancelled')
        cancelled++
        if (initial[i].status === 'completed') {
            completed++
        }
    }

    // for(let i=0; i < eventos.length; i++) {
    //     if (eventos[i].status === 'cancelled')
    //     cancelled++
    //     if (eventos[i].status === 'completed') {
    //         completed++
    //     }
    // }

 
    
  return (<>
    {/* <HeaderComponent /> */}
    <Container>
        <IndicatorWrapper>
            <Indicator>
                <div>Atendimentos para Hoje</div>
                <span>{initial.length}</span>
            </Indicator>
            <Indicator>
                <div>Atendimentos Realizados</div>
                <span>{completed}</span>
            </Indicator>
            <Indicator>
                <div>Atendimentos Cancelados</div>
                <span>{cancelled}</span>
            </Indicator>
        </IndicatorWrapper>
        <ScheduleWrapper>
        <ScheduleTitle>Agendamentos para hoje</ScheduleTitle>
            <Schedule>
                {
                    initial.map((appoint) => {
                        return appoint.status === "open" ? 
                            <Appointment><div>{appoint.title}</div><div>{appoint.start.split("T")[1]}</div></Appointment>
                        :
                        null
                        })}
        </Schedule>
        </ScheduleWrapper>
        <Link to='/medical_schedule'>Agenda</Link>
        {/* <Link aria-disabled="true" to='/medical_record'>Prontuarios</Link> */}
    </Container>
    </>
  )
}

export default Dashboard