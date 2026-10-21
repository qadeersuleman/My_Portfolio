import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <div className="footer-content text-center py-4">
          <div className="footer-brand mb-2">
            <span className="brand-logo-hex">&lt;A/Q&gt;</span>
            <span className="brand-name ms-2">Abdul Qadeer</span>
          </div>

          <p className="footer-copyright mb-1">
            © {new Date().getFullYear()} Abdul Qadeer. Built with React & <FontAwesomeIcon icon={faHeart} className="text-danger mx-1" /> for Recruiters & Clients worldwide.
          </p>
          <span className="footer-subtext">Full Stack Web & Mobile Engineering • Cloud & DevOps Architecture (Azure, Docker, K8s)</span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
