import { createContext, useContext, useState } from "react";
import { registerForm, loginForm } from "../api/auth";

export const AuthContext = createContext()

export function AuthProvider ({ children }) {
    const [isUser, setUser] = useState(null)
    const [isAuthenticated, setAuthenticated] = useState(false)
    const [isErrors, setErrors] = useState([])

    const singup = async (isUser) => {
        try {
            const res = await registerForm(isUser)
            console.log(res.data)
            setUser(res.data)
            setAuthenticated(true)
        } catch (error) {
            if(Array.isArray(error.response.data)){
                return setErrors(error.response.data)
             } 
             setErrors([error.response.data.msg])
        }
    }

    const login = async (isUser) => {
        try {
            const res = await loginForm(isUser)
            console.log(res)
        } catch (error) {
            if(Array.isArray(error.response.data)){
               return setErrors(error.response.data)
            } 
            setErrors([error.response.data.msg])
        }
    }

    return(
        <AuthContext.Provider value={{
            singup, login, isUser, isAuthenticated, isErrors
        }}>
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