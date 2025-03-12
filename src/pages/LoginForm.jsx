import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import CustomNavbar from "./Navbar";
import { Link } from "react-router-dom";

function LoginForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      // Add your login logic here
      alert("Logged in successfully!");
    }
    setValidated(true);
  };

  return (
    <>
      <CustomNavbar />
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <h2 className="text-center mb-4">Login</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              {/* Email Input */}
              <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              </Form.Group>

              {/* Password Input */}
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide your password.
                </Form.Control.Feedback>
              </Form.Group>

              {/* Submit Button */}
              <Button variant="primary" type="submit" className="w-100">
                Login
              </Button>
            </Form>
          </Col>
          <p className="mt-3 ">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </Row>
      </Container>
    </>
  );
}

export default LoginForm;
