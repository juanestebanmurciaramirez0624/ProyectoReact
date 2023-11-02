import { createContext, useContext, useState } from "react";
import { registerTicketRequest, getTicketsRequest } from '../api/ticket'

const TicketContext = createContext()

export function TicketProvider ({ children }) {
    const  [ isTicket, setTicket ] = useState([])
    const [isErrors, setErrors] = useState([])

    const registerTicket = async (isTicket) => {
        const res = await registerTicketRequest(isTicket)
        console.log(res)
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
        <TicketContext.Provider value={{isTicket, registerTicket, getTickets, isErrors}}>
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