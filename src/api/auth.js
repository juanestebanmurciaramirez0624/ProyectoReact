import axios from './axios'

export const registerForm = user => axios.post(`/register`, user)
export const loginForm = user => axios.post(`/login`, user)
export const verityToken = () => axios.get('/verify')