

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";


export const registerRequest = (formData) => ({
  type: REGISTER_REQUEST,
  payload:formData,
})

export const registerSuccess = (message) => ({
  type: REGISTER_SUCCESS,
  payload:message
})

export const registerFailure =(error)=>({
    type:REGISTER_FAILURE,
    payload:error
})