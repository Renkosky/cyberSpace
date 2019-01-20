const initUserInfo = {
  username: '',
  _id: '',
  createTime: {},
  email: ''
  // isadmin: false
}

export const storeUserInfo = (state = initUserInfo, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return Object.assign({}, state, {
        name: action.username,
        _id: action._id,
        createTime: action.createTime,
        email: action.email
      })
    default:
      return state
  }
}
