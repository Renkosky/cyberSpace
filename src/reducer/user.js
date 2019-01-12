const initUserInfo = {
  username: '',
  id: ''
  // isadmin: false
}

export const storeUserInfo = (state = initUserInfo, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return Object.assign({}, state, {
        name: action.username,
        id: action.id
      })
    default:
      return state
  }
}
