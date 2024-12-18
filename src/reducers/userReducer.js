// import {
//   GET_USER_REQUEST,
//   GET_USER_SUCCESS,
//   GET_USER_FAILURE,
// } from "../actions/userActions"

// const initialState = {
//   loading: false,
//   users: [],
//   error: null,
// }

// const userReducer = (state = initialState, action) => {
//     console.log(action,"reducer trigger")
//   switch (action.type) {
//     case GET_USER_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         error: null,
//       }
//     case GET_USER_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         users: action.payload,
//       }
//     case GET_USER_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       }

//     default:
//       return state
//   }
// }

// export default userReducer