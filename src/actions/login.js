

export const LOGIN_REQUEST = "LOGIN_REQUEST"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"

export const loginRequst = (loginData) => ({
  type: LOGIN_REQUEST,
  payload: loginData,
})

export const loginSuccess = (message)=>({
    type:LOGIN_SUCCESS,
    payload:message
})

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
})