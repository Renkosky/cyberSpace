export const getToken = ()=>{
    return window.localStorage.getItem('login_token')
}
export const checkToken = () =>{
    return window.localStorage.getItem('login_token') === '';
}

export const setToken = token => {
    window.localStorage.setItem("login_token", token);
    return;
};

export const clearToken = ()=>{
  window.localStorage.setItem('login_token','')
}