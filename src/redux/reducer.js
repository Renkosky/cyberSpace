import { LOGIN_SUCCESS } from './action-types'
import { combineReducers } from 'redux'

const initUserInfo = {
  username: '',
  _id: '',
  createTime: '',
  email: ''
  // isadmin: false
}

const userInfo = (state = initUserInfo, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        username: action.username,
        _id: action._id,
        createTime: action.createTime,
        email: action.email
      })
    default:
      return state
  }
}

const CyberSpaceapp = combineReducers({
  userInfo
})
export default CyberSpaceapp
