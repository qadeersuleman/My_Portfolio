import React, { useState } from "react";
import {
  Navbar,
  Nav,
  // NavDropdown,
  Container,
  Modal,
  Button,
} from "react-bootstrap";
import { BiMenu, BiX } from "react-icons/bi";

import "../../CSS/homepage.css";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);
  const fonts = { fontSize: "16px" };
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `${process.env.PUBLIC_URL}/Qadeer_Resume.pdf`; // Path to your PDF file
    link.download = "Qadeer_Resume.pdf"; // File name for download
    link.click();
  };

  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <Container
        fluid
        className="d-flex align-items-center justify-content-between px-5"
      >
        {/* Logo Section */}
        <h1 className="sitename">Qadeer</h1>

        {/* Navbar for Desktop */}
        <Navbar expand="lg" className="navmenu d-none d-lg-flex" style={fonts}>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#hero" className="active mx-3" style={fonts}>
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="mx-2" style={fonts}>
                About
              </Nav.Link>
              <Nav.Link href="#services" className="mx-2" style={fonts}>
                Services
              </Nav.Link>
              <Nav.Link href="#portfolio" className="mx-2" style={fonts}>
                Portfolio
              </Nav.Link>

              {/* <NavDropdown
                title={
                  <span>
                    Dropdown <BiChevronDown />
                  </span>
                }
                id="nav-dropdown"
              >
                <NavDropdown.Item href="#">Dropdown 1</NavDropdown.Item>
                <NavDropdown
                  title={
                    <span>
                      Deep Dropdown <BiChevronDown />
                    </span>
                  }
                  id="deep-dropdown"
                >
                  <NavDropdown.Item href="#">Deep Dropdown 1</NavDropdown.Item>
                  <NavDropdown.Item href="#">Deep Dropdown 2</NavDropdown.Item>
                  <NavDropdown.Item href="#">Deep Dropdown 3</NavDropdown.Item>
                  <NavDropdown.Item href="#">Deep Dropdown 4</NavDropdown.Item>
                  <NavDropdown.Item href="#">Deep Dropdown 5</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Item href="#">Dropdown 2</NavDropdown.Item>
                <NavDropdown.Item href="#">Dropdown 3</NavDropdown.Item>
                <NavDropdown.Item href="#">Dropdown 4</NavDropdown.Item>
              </NavDropdown> */}

              <Nav.Link href="#contact" className="mx-2" style={fonts}>
                Contact
              </Nav.Link>

              <Button className="p-2" style={{ marginLeft: "100px" }} onClick={handleDownload}>
                Download Resume
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* Menu Icon for Small Screens */}
        <button
          className="mobile-nav-toggle d-lg-none"
          onClick={handleModalShow}
          style={{ backgroundColor: "black", border: "none" }}
        >
          <BiMenu size={28} />
        </button>

        {/* Centered Modal */}
        <Modal
          show={showModal}
          onHide={handleModalClose}
          centered
          dialogClassName="custom-centered-modal"
        >
          <Modal.Header className="border-0">
            <button
              className="close-btn"
              onClick={handleModalClose}
              style={{ border: "none", background: "transparent" }}
            >
              <BiX size={28} />
            </button>
          </Modal.Header>
          <Modal.Body className="text-center">
            <Nav className="flex-column">
              <Nav.Link
                href="#home"
                className="menu-link"
                onClick={() => setShowModal(false)}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#about"
                className="menu-link"
                onClick={() => setShowModal(false)}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#services"
                className="menu-link"
                onClick={() => setShowModal(false)}
              >
                Services
              </Nav.Link>
              <Nav.Link
                href="#portfolio"
                className="menu-link"
                onClick={() => setShowModal(false)}
              >
                Portfolio
              </Nav.Link>
              {/* <Nav.Link href="#dropdown" className="menu-link">
                Dropdown <BiChevronDown />
              </Nav.Link> */}
              <Nav.Link
                href="#contact"
                className="menu-link"
                onClick={() => setShowModal(false)}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Modal.Body>
        </Modal>
      </Container>
    </header>
  );
};

export default Header;
