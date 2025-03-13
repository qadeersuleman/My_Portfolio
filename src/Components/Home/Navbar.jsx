import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/Navbar.css";

const CustomNavbar = () => {
  return (
    <Navbar variant="dark" expand="md" fixed="top" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home">Qadeer Suleman</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbar-nav"
          style={{ marginRight: "20px" }}
        >
          <FontAwesomeIcon icon={faBars} /> {/* Hamburger menu icon */}
        </Navbar.Toggle>
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#service">Services</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>

            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
