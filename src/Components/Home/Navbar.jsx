import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "../assets/css/Navbar.css";

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  const closeMenu = () => {
    setExpanded(false);
  };

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className="custom-navbar"
      expanded={expanded}
      onToggle={(isExpanded) => setExpanded(isExpanded)}
    >
      <Container fluid>
        <Navbar.Brand href="#home" className="navbar-brand">
          Qadeer Suleman
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" className="navbar-toggler">
          <FontAwesomeIcon icon={faBars} className="toggler-icon" />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbar-nav" className="navbar-collapse">
          <Nav className="nav-links">
            <Nav.Link href="#home" className="nav-link" onClick={closeMenu}>Home</Nav.Link>
            <Nav.Link href="#about" className="nav-link" onClick={closeMenu}>About</Nav.Link>
            <Nav.Link href="#service" className="nav-link" onClick={closeMenu}>Services</Nav.Link>
            <Nav.Link href="#projects" className="nav-link" onClick={closeMenu}>Projects</Nav.Link>
            <Nav.Link href="#contact" className="nav-link" onClick={closeMenu}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;