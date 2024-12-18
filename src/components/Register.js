// import React, { useState } from "react"

// const apiUrl = process.env.REACT_APP_API_URL

// const Register = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     emailId: "",
//     password: "",
//     skills: [],
//     photoUrl: "",
//   })

//   return (
//     <div className="d-flex">
//       <h1>register</h1>
//       <form action="">
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             flexDirection: "column",
//             alignItems: "center",
//           }}>
//           <input
//             type="text"
//             placeholder="firstName"
//             name="firstName"
//             value={formData.firstName}
//             required
            
//           />
//           <input
//             type="text"
//             placeholder="lastName"
//             name="lastName"
//             required
//             value={formData.lastName}
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             name="emailId"
//             required
//             value={formData.emailId}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             name="password"
//             value={formData.password}
//             required
//           />
//           <input
//             type="url"
//             placeholder="photUrl"
//             name="photoUrl"
//             value={formData.photoUrl}
//           />
//           <select name="skills" multiple>
//             <option value="React">React</option>
//             <option value="javascript">javascript</option>
//             <option value="python">python</option>
//             <option value="nodejs">nodejs</option>
//           </select>
//           <div>
//             <button type="submit">Registerd</button>
//           </div>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default Register


import React, { useEffect, useState } from "react"
import { Container, Form, FormGroup, Label, Input, Button, Alert } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css" // Import Bootstrap CSS
import { useDispatch, useSelector } from "react-redux"
import { registerRequest } from "../actions/register"
// import { useNavigate } from "react-router-dom"



const Register = () => {
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
    skills: [],
    photoUrl: "",
  })

  const dispatch = useDispatch()
  // const navigate = useNavigate()
  const { loading, successMessage, error } = useSelector(
    (state) => state.register
  )
  

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(registerRequest(formData))
  }

useEffect(() => {
  if (successMessage) {
    setFormData({
      firstName: "",
      lastName: "",
      emailId: "",
      password: "",
      skills: [],
      photoUrl: "",
    }) 
  }
}, [successMessage])


  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Register</h2>
      {successMessage && <Alert color="success">{successMessage}</Alert>}
      {error && <Alert color="danger">{error}</Alert>}
      <Form
        onSubmit={handleSubmit}
        className="p-4 border rounded shadow bg-light">
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label for="emailId">Email</Label>
          <Input
            type="email"
            name="emailId"
            id="emailId"
            placeholder="Enter your email"
            value={formData.emailId}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label for="photoUrl">Photo URL</Label>
          <Input
            type="url"
            name="photoUrl"
            id="photoUrl"
            placeholder="Enter a photo URL"
            value={formData.photoUrl}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="skills">Skills</Label>
          <Input
            type="select"
            name="skills"
            id="skills"
            multiple
            onChange={handleChange}
            className="form-control">
            <option value="React">React</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="Node.js">Node.js</option>
          </Input>
          <small className="text-muted">
            Hold CTRL (or CMD) to select multiple skills.
          </small>
        </FormGroup>

        <Button color="primary" block>
          {loading ? "Registering..." : "Register"}
        </Button>
      </Form>
    </Container>
  )
}

export default Register

