import axios from './axios'

export const getUsersRequest = () => axios.get('/users')
export const getUserRequest = (id) => axios.get(`/user/${id}`)
export const registerUserRequest = (user) => axios.post('/users', user)
export const updateUsersRequest = (id, user) => axios.put(`/users/${id}`, user)
export const deleteUsersRequest = (id) => axios.delete(`/users/${id}`)
