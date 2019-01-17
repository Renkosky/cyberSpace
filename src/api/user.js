import axios from 'axios'
export const getUserById = id => {
  return axios.get(`/getUserById/${id}`)
}

export const getUserInfo = ()=>{
  return axios.get('/getUserInfo')
}