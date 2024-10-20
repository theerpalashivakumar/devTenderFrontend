import { all, call } from "redux-saga/effects"
// import exampleSaga from "./exampleSaga"
import userSaga from "./userSaga"

export default function* rootSaga() {
  yield all([
    // call(exampleSaga),
    call(userSaga)
  ]
  )
}
