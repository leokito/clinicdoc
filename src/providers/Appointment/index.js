import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import {toast} from 'react-hot-toast'


const AppointmentContext = createContext()

export const AppointmentProvider = ({children}) => {
    const [events, setEvents] = useState([])
    const [initial, setInitial] = useState([])

    const createAppointments = (newdata) => {
        api
          .post("/appointments/", newdata)
          .then((_) => {
            toast.success("Consulta marcada com sucesso!");
          })
          .catch((err) => {
            toast.success("Algo saiu errado. Tente novamente.");
          });
      };

    useEffect(() => {
      api
      .get('/appointments/')
      .then((res)=> setInitial(res.data))
      .catch((e) => console.log(e))
    }, [initial])

    return(
        <AppointmentContext.Provider value={{initial, createAppointments}}>
            {children}
        </AppointmentContext.Provider>
    )
}

export const useAppointment = () => useContext(AppointmentContext)