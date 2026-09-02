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
            <span className="brand-logo-hex">&lt;Q/S&gt;</span>
            <span className="brand-name ms-2">Qadeer Suleman</span>
          </div>

          <p className="footer-copyright mb-1">
            © {new Date().getFullYear()} Qadeer Suleman. Built with React & <FontAwesomeIcon icon={faHeart} className="text-danger mx-1" /> for Recruiters & Clients worldwide.
          </p>
          <span className="footer-subtext">Cross-Platform Mobile (iOS & Android) & Full Stack Web Architecture</span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
