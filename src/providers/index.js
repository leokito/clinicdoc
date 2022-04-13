import { AppointmentProvider } from "./Appointment"
import { AuthProvider } from "./Auth"

const Providers = ({children}) => {
    return(
    <AuthProvider>
    <AppointmentProvider>
        {children}
    </AppointmentProvider>
    </AuthProvider>
)}

export default Providers