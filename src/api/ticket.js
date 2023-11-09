import axios from './axios'

export const getTicketsRequest = () => axios.get('/tickets')
export const getTicketsProfileRequest = () => axios.get('/ticketsProfile')
export const getTicketRequest = (id) => axios.get(`/ticket/${id}`)
export const registerTicketRequest = (ticket) => axios.post('/tickets', ticket)
export const updateTicketsRequest = (id, ticket) => axios.put(`/tickets/${id}`, ticket)
export const deleteTicketsRequest = (id) => axios.delete(`/tickets/${id}`)
