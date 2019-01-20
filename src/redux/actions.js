import { LOGIN_SUCCESS } from './action-types'

// export const login = userinfo => {
//   return {
//     type: LOGIN_SUCCESS,
//     username: userinfo.username,
//     id: userinfo.id
//   }
// }
export default {
  storeUserInfo(userinfo) {
    return {
      type: LOGIN_SUCCESS,
      username: userinfo.username,
      _id: userinfo._id,
      createTime: userinfo.createTime,
      email: userinfo.email
    }
  }
}
