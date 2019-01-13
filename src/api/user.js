import axios from 'axios'
export const getUserById = id => {
  return axios.get(`/api/getUserById/${id}`)
}
