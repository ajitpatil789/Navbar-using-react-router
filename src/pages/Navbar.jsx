import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={NavLink} to="/">
        <img src="./vite.svg" alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link
            as={NavLink}
            to="/"
            style={({ isActive }) =>
              isActive
                ? {
                    fontWeight: "bold",
                    color: "#00ffcc",
                    textDecoration: "underline",
                  }
                : {}
            }
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/shop"
            style={({ isActive }) =>
              isActive
                ? {
                    fontWeight: "bold",
                    color: "#00ffcc",
                    textDecoration: "underline",
                  }
                : {}
            }
          >
            Shop
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/cart"
            style={({ isActive }) =>
              isActive
                ? {
                    fontWeight: "bold",
                    color: "#00ffcc",
                    textDecoration: "underline",
                  }
                : {}
            }
          >
            Cart
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/login"
            style={({ isActive }) =>
              isActive
                ? {
                    fontWeight: "bold",
                    color: "#00ffcc",
                    textDecoration: "underline",
                  }
                : {}
            }
          >
            Login
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/register"
            style={({ isActive }) =>
              isActive
                ? {
                    fontWeight: "bold",
                    color: "#00ffcc",
                    textDecoration: "underline",
                  }
                : {}
            }
          >
            Registration
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/gallery"
            style={({ isActive }) =>
              isActive
                ? {
                    fontWeight: "bold",
                    color: "#00ffcc",
                    textDecoration: "underline",
                  }
                : {}
            }
          >
            Gallery
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/photo"
            style={({ isActive }) =>
              isActive
                ? {
                    fontWeight: "bold",
                    color: "#00ffcc",
                    textDecoration: "underline",
                  }
                : {}
            }
          >
            Photos
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/images"
            style={({ isActive }) =>
              isActive
                ? {
                    fontWeight: "bold",
                    color: "#00ffcc",
                    textDecoration: "underline",
                  }
                : {}
            }
          >
            Images
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/studentInfo"
            style={({ isActive }) =>
              isActive
                ? {
                    fontWeight: "bold",
                    color: "#00ffcc",
                    textDecoration: "underline",
                  }
                : {}
            }
          >
            Student
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
