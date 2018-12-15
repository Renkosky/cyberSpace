import axios from 'axios'
export const register = body => {
  return axios.post('/register', body)
}
