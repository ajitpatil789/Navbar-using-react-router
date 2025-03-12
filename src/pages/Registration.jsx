import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import CustomNavbar from "./Navbar";

import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Registration() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <CustomNavbar />
      <Container className="mt-5">
        <h2 className="mb-4 text-center">Registration Form</h2>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            {/* First Name */}
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter your first name"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            {/* Last Name */}
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter your last name"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>

          {/* Username */}
          <Form.Group className="mb-3" controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Choose a username"
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </Form.Group>

          <Row className="mb-3">
            {/* Email */}
            <Form.Group as={Col} md="6" controlId="validationCustomEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter your email"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>

            {/* Phone Number */}
            <Form.Group as={Col} md="6" controlId="validationCustomPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                required
                type="tel"
                placeholder="Enter your phone number"
                pattern="[0-9]{10}"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid 10-digit phone number.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            {/* Password */}
            <Form.Group as={Col} md="6" controlId="validationCustomPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Enter your password"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a password.
              </Form.Control.Feedback>
            </Form.Group>

            {/* Confirm Password */}
            <Form.Group
              as={Col}
              md="6"
              controlId="validationCustomConfirmPassword"
            >
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Re-enter your password"
              />
              <Form.Control.Feedback type="invalid">
                Passwords must match.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          {/* Submit Button */}
          <Button type="submit" className="mt-3 w-100">
            Register
          </Button>
        </Form>
        <p className="mt-3">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </Container>
    </>
  );
}

export default Registration;
