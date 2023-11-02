import axios from './axios'

export const getTicketsRequest = () => axios.get('/tickets')
export const getTicketRequest = (id) => axios.get(`/ticket/${id}`)
export const registerTicketRequest = (ticket) => axios.post('/tickets', ticket)
export const updateTicketsRequest = (ticket) => axios.put(`/ticket/${ticket._id}`, ticket)
export const deleteTicketsRequest = (id) => axios.delete(`/ticket/${id}`)
