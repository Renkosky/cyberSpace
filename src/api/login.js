import axios from 'axios'

// export const userTest = () => axios.get('/getAllUser')
export const login = payload => axios.post('/api/login', payload)
