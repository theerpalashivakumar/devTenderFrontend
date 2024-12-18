import { call, put, takeEvery } from "redux-saga/effects"
import {
  REGISTER_REQUEST,
  registerFailure,
  registerSuccess,
} from "../actions/register"

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5001" 

// API call function
const fetchRegister = async (formData) => {
  try {
    console.log("Last function called inside the saga")
    const response = await fetch(`${apiUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    console.log("response",response)
    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || "Failed to register user")
    }

    const data = await response.json() 
    return data
  } catch (error) {
    console.log("Fetch Error:", error)
    throw error
  }
}

// Worker saga
function* watchRegister(action) {
  try {
    console.log("...function called inside saga")
    const data = yield call(fetchRegister, action.payload) // Correctly yield the call
    yield put(registerSuccess(data.message)) 
  } catch (error) {
    yield put(registerFailure(error.message)) 
  }
}

// Watcher saga
export default function* registerSaga() {
  console.log("Saga function called...")
  yield takeEvery(REGISTER_REQUEST, watchRegister) // No parentheses for yield
}
