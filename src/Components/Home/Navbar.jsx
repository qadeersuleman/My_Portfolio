import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faDownload, faCircle } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/Navbar.css";

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  const closeMenu = () => setExpanded(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // ScrollSpy section detector
      const sections = ["home", "about", "timeline", "service", "projects", "testimonials", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Indicator Bar at top */}
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />

      <Navbar
        expand="lg"
        fixed="top"
        className={`custom-navbar ${scrolled ? "scrolled" : ""}`}
        expanded={expanded}
        onToggle={(isExpanded) => setExpanded(isExpanded)}
      >
        <Container fluid className="px-3 px-md-5">
          <Navbar.Brand href="#home" className="navbar-brand d-flex align-items-center gap-2">
            <span className="brand-logo-hex">&lt;Q/S&gt;</span>
            <span className="brand-name">
              Qadeer<span className="gradient-highlight">Suleman</span>
            </span>
          </Navbar.Brand>

          {/* Recruiter Badge */}
          <div className="nav-hire-badge d-none d-xl-flex align-items-center gap-2">
            <FontAwesomeIcon icon={faCircle} className="status-dot-pulse" />
            <span>Open for Opportunities & Freelance</span>
          </div>

          <Navbar.Toggle aria-controls="navbar-nav" className="navbar-toggler">
            <FontAwesomeIcon icon={faBars} className="toggler-icon" />
          </Navbar.Toggle>

          <Navbar.Collapse id="navbar-nav" className="navbar-collapse">
            <Nav className="nav-links ms-auto align-items-center">
              <Nav.Link
                href="#home"
                className={`nav-link ${activeSection === "home" ? "active" : ""}`}
                onClick={closeMenu}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#about"
                className={`nav-link ${activeSection === "about" ? "active" : ""}`}
                onClick={closeMenu}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#timeline"
                className={`nav-link ${activeSection === "timeline" ? "active" : ""}`}
                onClick={closeMenu}
              >
                Experience
              </Nav.Link>
              <Nav.Link
                href="#service"
                className={`nav-link ${activeSection === "service" ? "active" : ""}`}
                onClick={closeMenu}
              >
                Services
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={`nav-link ${activeSection === "projects" ? "active" : ""}`}
                onClick={closeMenu}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#testimonials"
                className={`nav-link ${activeSection === "testimonials" ? "active" : ""}`}
                onClick={closeMenu}
              >
                Reviews
              </Nav.Link>
              <Nav.Link
                href="#contact"
                className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
                onClick={closeMenu}
              >
                Contact
              </Nav.Link>
              
              <div className="nav-cta-btn-wrap ms-lg-3">
                <a
                  href={`${process.env.PUBLIC_URL}/Qadeer-Resume.pdf`}
                  download="Qadeer_Suleman_CV.pdf"
                  className="nav-download-cv-btn text-decoration-none"
                  data-cursor="CV"
                >
                  <FontAwesomeIcon icon={faDownload} className="me-2" /> Resume
                </a>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;