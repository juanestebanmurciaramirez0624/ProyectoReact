import { createContext, useContext, useState } from "react";
import { registerTicketRequest, getTicketsRequest, deleteTicketsRequest, getTicketRequest, updateTicketsRequest } from '../api/ticket'

const TicketContext = createContext()

export function TicketProvider ({ children }) {
    const  [ isTicket, setTicket ] = useState([])
    const [isErrors, setErrors] = useState([])

    const registerTicket = async (isTicket) => {
        try {
            const res = await registerTicketRequest(isTicket)
            if (res.status === 200) setTicket(isTicket.filter(isTicket => isTicket._id === isTicket._id))
        } catch (error) {
            console.log(error)
        }
    }

    const deleteTicket = async (id) => {
        try {
            const res = await deleteTicketsRequest(id)
            if (res.status === 200) setTicket(isTicket.filter(isTicket => isTicket._id !== id))
        } catch (error) {
            console.log(error)
        }
    }

    const updateTicket = async (id, isTicket) => {
        try {
            const res = await updateTicketsRequest(id, isTicket)
            if (res.status === 200) setTicket(isTicket.filter(isTicket => isTicket._id !== id))
        } catch (error) {
            console.log(error)
        }
    }

    const getTicket = async (id) => {
        try {
            const res = await getTicketRequest(id)
            console.log(res)
            return res.data
        } catch (error) {
            console.log(error)
        }
    }

    const getTickets = async (isTicket) => {
        try {
            const res = await getTicketsRequest(isTicket)
            setTicket(res.data)
        } catch (error) {
            if(Array.isArray(error.response.data)){
                return setErrors(error.response.data)
             } 
             setErrors([error.response.data.msg])
         }
    }

    return(
        <TicketContext.Provider value={{isTicket, registerTicket, getTickets, isErrors, deleteTicket, getTicket, updateTicket}}>
            {children}
        </TicketContext.Provider>
    )
}

export const useTicket = () =>{
    const contextTicket = useContext(TicketContext)
    if(!contextTicket){
        throw new Error("Opss algo salio mal")
    }
    return contextTicket;
}