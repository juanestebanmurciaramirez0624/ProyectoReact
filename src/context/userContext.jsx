import { createContext, useContext, useState } from "react";
import { registerUserRequest, getUsersRequest, deleteUsersRequest, getUserRequest, updateUsersRequest } from '../api/User'
import { toast } from 'sonner';

const UserContext = createContext()

export function UserProvider ({ children }) {
    const  [ isUsers, setUser ] = useState([])
    const [isErrors, setErrors] = useState([])

    const registerUser = async (isUsers) => {
        const res = await registerUserRequest(isUsers)
        console.log(res)
    }

    const deleteUser = async (id) => {
        try {
            const res = await deleteUsersRequest(id)
            if (res.status === 200) setUser(isUsers.filter(isUsers => isUsers._id !== id))
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

    const updateUser = async (id, isUsers) => {
        try {
            const res = await updateUsersRequest(id, isUsers)
            const msg = res.data.msg
            console.log(res)
            toast.success(msg, {
                style: {
                    background: 'var(--green)', 
                    color: 'var(--index-white)',
                    border: 'none'
                },
            duration: 3000
            })
        } catch (error) {
            console.log(error)
        }
    }

    const getUsers = async (isUsers) => {
        try {
            const res = await getUsersRequest(isUsers)
            setUser(res.data)
        } catch (error) {
            if(Array.isArray(error.response.data)){
                return setErrors(error.response.data)
             } 
             setErrors([error.response.data.msg])
         }
    }

    return(
        <UserContext.Provider value={{isUsers, registerUser, getUsers, isErrors, deleteUser, getUser, updateUser}}>
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