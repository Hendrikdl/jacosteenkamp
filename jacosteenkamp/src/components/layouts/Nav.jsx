import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

function NavigationBar() {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img
            src={logo}
            alt="Logo"
            width="50"
            height="40"
            className="d-inline-block align-top"
          />{" "}
          Jaco Steenkamp
        </Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={NavLink} to="/services">
            Services
          </Nav.Link>
          <Nav.Link as={NavLink} to="/gallery">
            Gallery
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact">
            Contact Me
          </Nav.Link>
          <Nav.Link as={NavLink} to="/quote">
            Get a Quote
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
