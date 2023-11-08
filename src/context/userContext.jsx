import { createContext, useContext, useState } from "react";
import { registerUserRequest, getUsersRequest, deleteUsersRequest, getUserRequest, updateUsersRequest } from '../api/User'

const UserContext = createContext()

export function UserProvider ({ children }) {
    const  [ isUser, setUser ] = useState([])
    const [isErrors, setErrors] = useState([])

    const registerUser = async (isUser) => {
        const res = await registerUserRequest(isUser)
        console.log(res)
    }

    const deleteUser = async (id) => {
        try {
            const res = await deleteUsersRequest(id)
            if (res.status === 200) setUser(isUser.filter(isUser => isUser._id !== id))
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    const getUser = async (id) => {
        try {
            const res = await getUserRequest(id)
            console.log(res)
            return res.data
        } catch (error) {
            console.log(error)
        }
    }

    const updateUser = async (id, isUser) => {
        try {
            const res = await updateUsersRequest(id, isUser)
            if (res.status === 200) setUser(isUser.filter(isUser => isUser._id !== id))
        } catch (error) {
            console.log(error)
        }
    }

    const getUsers = async (isUser) => {
        try {
            const res = await getUsersRequest(isUser)
            setUser(res.data)
        } catch (error) {
            if(Array.isArray(error.response.data)){
                return setErrors(error.response.data)
             } 
             setErrors([error.response.data.msg])
         }
    }

    return(
        <UserContext.Provider value={{isUser, registerUser, getUsers, isErrors, deleteUser, getUser, updateUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () =>{
    const contextUser = useContext(UserContext)
    if(!contextUser){
        throw new Error("Opss algo salio mal")
    }
    return contextUser;
}