import { LOGIN_SUCCESS } from './action-types'
import { combineReducers } from 'redux'
const initUserInfo = {
  username: '',
  id: ''
  // isadmin: false
}

const userInfo = (state = initUserInfo, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        username: action.username,
        id: action.id
      })
    default:
      return state
  }
}

const CyberSpaceapp = combineReducers({
  userInfo
})
export default CyberSpaceapp
