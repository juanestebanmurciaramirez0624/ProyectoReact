import { createContext, useContext, useEffect, useState } from "react";
import { registerForm, loginForm, verityToken} from "../api/auth";
import { toast } from 'sonner'
import Cookie from 'js-cookie'

export const AuthContext = createContext()

export function AuthProvider ({ children }) {
    const [isUser, setUser] = useState(null)
    const [isAuthenticated, setAuthenticated] = useState(false)
    const [isErrors, setErrors] = useState([])
    const [isLoading, setLoading] = useState(true)

    const singup = async (isUser) => {
        try {
            const res = await registerForm(isUser)
            console.log(res.data)
            setUser(res.data)
            setAuthenticated(true)
        } catch (error) {
            toast.error(error.response.data.msg)
        }
    }

    const login = async (isUser) => {
        try {
            const res = await loginForm(isUser)
            console.log(res)
            setAuthenticated(true)
            setUser(res.data)
        } catch (error) {
            toast.error(error.response.data.msg)
        }
    }

    const logout = () => {
        Cookie.remove('token')
        setAuthenticated(false)
        setUser(null)
    }

    useEffect(() => {
        async function checkLogin () {
            const cookie = Cookie.get()
            if(!cookie.token){
               setAuthenticated(false)
               setLoading(false)
               return setUser(null)
            }       
            try {
                const res = await verityToken(cookie.token)
                if(!res.data){
                    setAuthenticated(false)
                    setLoading(false)
                    return
                }
                
                setAuthenticated(true)
                setUser(res.data)
                setLoading(false)
            } catch (error) {
                setAuthenticated(false)
                setUser(null)
                setLoading(false)
               }
        }
        checkLogin()
    }, [])

    return(
        <AuthContext.Provider value={{
            singup, login, isUser, isAuthenticated, isErrors,  isLoading, logout }}>
            {children}
        </AuthContext.Provider>
    )
}   

export const useAuht = () =>{
    const contextAuht = useContext(AuthContext)
    if(!contextAuht){
        throw new Error("Opss algo salio mal")
    }
    return contextAuht;
}