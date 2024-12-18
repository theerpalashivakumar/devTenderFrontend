import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import User from "./components/User"
import Register from "./components/Register"
import Login from "./components/Login"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/user" element={<User />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
