import axios from 'axios'

const API = 'http://localhost:3000/api'

export const registerForm = user => axios.post(`${API}/register`, user)
export const loginForm = user => axios.post(`${API}/login`, user)