import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

const AuthContext = createContext()

export const AuthProvider = ({children})=> {

    const [user, setUser] = useState("")
    const [token, setToken] = useState(
        localStorage.getItem('@clinic:token') || ""
    )

    const getUser = (username) => {
        api
        .get('/user/', username)
        .then((res)=> 
        console.log(res))
    }

    const navigate = useNavigate()

    const signIn = (data) => {
        api
        .post('/signin/', data)
        .then((res)=> {
            getUser(data.username)
            setToken(res)
        })
        .catch((e) => toast("Algo deu errado"))
    }

    const signOut = () => {
        localStorage.clear()
        navigate('/')
    }
    
    return(
        <AuthContext.Provider value={{signIn, signOut}}>
            {children}
        </AuthContext.Provider>
)
}

export const useAuth = () => useContext(AuthContext)