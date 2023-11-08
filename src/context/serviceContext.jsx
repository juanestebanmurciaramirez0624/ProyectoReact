import { createContext, useContext, useState } from "react";
import { registerServiceRequest, getServicesRequest, deleteServicesRequest, getServiceRequest, updateServicesRequest } from '../api/service'

const ServiceContext = createContext()

export function ServiceProvider ({ children }) {
    const  [ isService, setService ] = useState([])
    const [isErrors, setErrors] = useState([])

    const registerService = async (isService) => {
        const res = await registerServiceRequest(isService)
        console.log(res)
    }

    const getService = async (id) => {
        try {
            const res = await getServiceRequest(id)
            console.log(res)
            return res.data
        } catch (error) {
            console.log(error)
        }
    }

    const updateService = async (id, isService) => {
        try {
            const res = await updateServicesRequest(id, isService)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteService = async (id) => {
        try {
            const res = await deleteServicesRequest(id)
            if (res.status === 200) setService(isService.filter(isService => isService._id !== id))
        } catch (error) {
            console.log(error)
        }
    }

    const getServices = async (isService) => {
        try {
            const res = await getServicesRequest(isService)
            setService(res.data)
        } catch (error) {
            if(Array.isArray(error.response.data)){
                return setErrors(error.response.data)
             } 
             setErrors([error.response.data.msg])
         }
    }

    return(
        <ServiceContext.Provider value={{isService, registerService, getServices, isErrors, deleteService, getService, updateService}}>
            {children}
        </ServiceContext.Provider>
    )
}

export const useService = () =>{
    const contextService = useContext(ServiceContext)
    if(!contextService){
        throw new Error("Opss algo salio mal")
    }
    return contextService;
}