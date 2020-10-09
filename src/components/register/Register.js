import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Container, Row } from "react-bootstrap";
import { baseUrl } from "../../config/index";
import { errMsg } from "../../helpers/index";
const RegisterUserForm = () => {
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    useremail: "",
    userpassword: "",
  });
  const [userError, setError] = useState("");

  const { username, useremail, userpassword } = userCredentials;

  const handleSubmit = async (e) => {
    try {
      const data = {
        username,
        useremail,
        userpassword,
      };
      e.preventDefault();
      setUserCredentials({ ...userCredentials });
      await axios.post(`${baseUrl}register`, data);
    } catch (error) {
      const { errors } = await error.response.data;
      setError(errors);
    }
  };

  const handlChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({
      ...userCredentials,
      [name]: value,
    });
  };

  return (
    <Container>
      <div className="user__error">{userError ? errMsg(userError) : null}</div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="password"
            placeholder="Name"
            name="userpassword"
            value={userpassword || ""}
            onChange={handlChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="useremail"
            value={useremail || ""}
            onChange={handlChange}
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
            value={userpassword || ""}
            onChange={handlChange}
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
