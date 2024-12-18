import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { Button, Container, FormGroup, Input, Label, Form } from "reactstrap"
import { loginRequst } from "../actions/login"

const Login = () => {
  const [loginData, setLoginData] = useState({
    emailId: "",
    password: "",
  })
  const dispatch = useDispatch()
  const handleChange = (e) => {
    const { value, name } = e.target
    setLoginData({ ...loginData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(loginRequst(loginData))
  }

  return (
    <Container className="flex justify-content-center align-items-center">
      <h3>Login</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="text"
            name="emailId"
            placeholder="Enter your Email"
            required
            onChange={handleChange}
            value={loginData.emailId}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="Enter your password"
            required
            onChange={handleChange}
            value={loginData.password}
          />
        </FormGroup>
        <Button color="primary" block>
          Login
        </Button>
      </Form>
    </Container>
  )
}

export default Login
