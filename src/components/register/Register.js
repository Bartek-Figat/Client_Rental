import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Container, Alert } from 'react-bootstrap';
import { baseUrl } from "../../config/index";
import { errMsg } from "../../helpers/index";
const RegisterUserForm = () => {
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    useremail: "",
    userpassword: "",
  });
  const [userError, setError] = useState("");
  const [success, setSuccess] = useState('');

  const { username, useremail, userpassword } = userCredentials;

  const handleSubmit = async (e) => {
    try {
      const data = {
        username,
        useremail,
        userpassword,
      };
      e.preventDefault();

      await axios.post(`${baseUrl}register`, data);
      setSuccess('Registration successful. Please Verify Your Email Address');
      setError("");
      setUserCredentials("");
    } catch (error) {
      const { errors } = await error.response.data;
      setError(errors);
      setSuccess('');
      setUserCredentials('');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({
      ...userCredentials,
      [name]: value,
    });
  };

  return (
    <Container>
      <div className="user__error">{userError ? errMsg(userError) : null}</div>
      {success ? <Alert variant="success">{success}</Alert> : null}
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            name="username"
            value={username || ''}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="useremail"
            value={useremail || ''}
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="userpassword"
            value={userpassword || ''}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default RegisterUserForm;
