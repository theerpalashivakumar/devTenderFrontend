import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actions/login";

const initialState={
    loading:false,
    success:"",
    error:""
}

const loginReducer = (state =initialState, action) => {
  console.log("action", action)
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        success: "",
        error: "",
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload,
        error: "",
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: "",
      }
    default:
      return state
  }
}

export default loginReducer;