import { put, takeEvery,call } from "redux-saga/effects"
import {
  GET_USER_REQUEST,
  getUserFailure,
  getUserSuccess,
} from "../actions/userActions"

const fetchUser = async () => {
  // const response = await fetch("https://jsonplaceholder.typicode.com/users");
  // console.log("response === ", response)
  // if(!response.ok){
  //     throw new Error("users not found")
  // }
  // return response.json()
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    console.log("response  ",response)
    if (!response.ok) {
      throw new Error("users not fouond")
    }
    return response.json()
  } catch (error) {
    console.log("Fetch Error :", error)
    throw error
  }
}

function* watchGetUser() {
  console.log("user check")
  try {
    const users = yield call(fetchUser)
    console.log("users  === ",users)
    yield put(getUserSuccess(users))
  } catch (error) {
    yield put(getUserFailure(error.message))
  }
}

export default function* userSaga() {
  console.log("saga trigger")
  yield takeEvery(GET_USER_REQUEST, watchGetUser)
}
