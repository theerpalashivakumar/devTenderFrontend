// actions/userActions.js
export const GET_USER_REQUEST = "GET_USER_REQUEST"
export const GET_USER_SUCCESS = "GET_USER_SUCCESS"
export const GET_USER_FAILURE = "GET_USER_FAILURE"

export const getUserRequest = () => ({
  type: GET_USER_REQUEST,
})

export const getUserSuccess = (data) => ({
  type: GET_USER_SUCCESS,
  payload: data,
})

export const getUserFailure = (error) => ({
  type: GET_USER_FAILURE,
  payload: error,
})
