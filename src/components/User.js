import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserRequest } from "../actions/userActions"

const User = () => {
  const dispatch = useDispatch()
  const [fectUser, setFetUSer] = useState(false)
  const { loading, users, error } = useSelector((state) => state.user)

  useEffect(() => {
    if (fectUser) {
      dispatch(getUserRequest())
    }
  }, [dispatch, fectUser])

  const getUsersList = () => {
    setFetUSer(true)
  }

  if (loading)
    return (
      <div>
        <h1>Loading</h1>
      </div>
    )
  if (error)
    return (
      <div>
        <h1>error</h1>
      </div>
    )
  console.log("users===== ", users)

  return (
    <div>
      <button onClick={getUsersList}>get usersList</button>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default User
