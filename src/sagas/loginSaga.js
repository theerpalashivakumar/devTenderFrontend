import { call, put, takeEvery } from "redux-saga/effects"
import { LOGIN_REQUEST, loginFailure, loginSuccess } from "../actions/login"

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5001"

const fetchLogin = async (loginData) => {
  try {
       console.log("login...3")
    const response = await fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
    console.log("response",response)
    if (!response.ok) {
      const errData = await response.json()
      throw new Error(errData.message || "Login Failed...!")
    }

    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    console.log("Fetch Error:", error)
    throw error
  }
}

function* watchLogin(action) {
  console.log("login...2")

  try {
    const data = yield call(fetchLogin, action.payload)
    yield put(loginSuccess(data.message))
  } catch (error) {
    yield put(loginFailure(error.message))
  }
}

export default function* loginSaga() {
    console.log("login...1")
  yield takeEvery(LOGIN_REQUEST, watchLogin)
}
