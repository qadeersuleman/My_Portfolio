import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer id="footer" className="footer accent-background">
      <Container>
        {/* Copyright Section */}
        <Row>
          <Col className="text-center">
            <p className="copyright">
              &copy; <span>Copyright</span>{" "}
              <strong className="px-1 sitename">Qadeer</strong>{" "}
              <span>All Rights Reserved</span>
            </p>
          </Col>
        </Row>

        {/* Social Links */}
        <Row className="justify-content-center">
          <Col xs="auto">
            <div className="social-links d-flex justify-content-center">
              <a href="#!">
                <BsTwitter />
              </a>
              <a href="#!">
                <BsFacebook />
              </a>
              <a href="#!">
                <BsInstagram />
              </a>
              <a href="#!">
                <BsLinkedin />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
