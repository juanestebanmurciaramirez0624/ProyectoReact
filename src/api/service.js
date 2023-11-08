import axios from './axios'

export const getServicesRequest = () => axios.get('/services')
export const getServiceRequest = (id) => axios.get(`/service/${id}`)
export const registerServiceRequest = (service) => axios.post('/services', service)
export const updateServicesRequest = (id, service) => axios.put(`/services/${id}`, service)
export const deleteServicesRequest = (id) => axios.delete(`/services/${id}`)
