import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "../assets/css/Footer.css"; // Import the CSS

const Footer = () => {
  return (
    <footer className="neon-footer" id="service">
      <Container>
        <Row className="text-center">
          <Col>
            <p className="footer-text">
              © 2025 Qadeer Saleeman. All Rights Reserved.
            </p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <a
              href="https://www.facebook.com/abdulqadeer.mahar.334"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.linkedin.com/in/qadeer-suleman-8707b6296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/qadeersuleman/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
