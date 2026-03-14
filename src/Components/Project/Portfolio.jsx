import React, { useState, useEffect } from "react";
import { Tab, Tabs, Card, Row, Col, Button, Modal } from "react-bootstrap";
import {
  SiReact, SiNodedotjs, SiExpress, SiNestjs,
  SiNextdotjs, SiMongodb, SiPostgresql, SiFirebase, SiOpenai
} from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/css/portfolio.css";


// Certificates
import Hierrachy_Certificate from "../assets/images/Certificates/Hierarachy.jpg";
import Numpy_Certificate from "../assets/images/Certificates/Numpy.jpg";
import CPP_Certificate from "../assets/images/Certificates/CPP.jpg";
import Java_Certificate from "../assets/images/Certificates/Java.jpg";

// Projects HD Mockups
import Ecommerce_HD from "../assets/images/Projects/Ecommerce_HD.png";
import Travel_HD from "../assets/images/Projects/Travel_HD.png";
import Fitness_HD from "../assets/images/Projects/Fitness_HD.png";
import AI_Chat_HD from "../assets/images/Projects/AI_Chat_HD.png";

const projects = [
  {
    title: "Premium E-commerce App",
    desc: "A high-end React Native application with deep IAP (In-App Purchase) integration, seamless secure payments (Stripe/Apple Pay), and a luxurious dark-themed UI for high-conversion sales.",
    img: Ecommerce_HD,
    fullDesc: "This project features a complete shopping experience with real-time inventory, user profiles, and advanced payment gateways. Built with React Native and Redux for state management, it ensures smooth performance on both iOS and Android.",
    tags: ["React Native", "IAP", "Stripe", "Redux"],
  },
  {
    title: "Smart Travel Assistant",
    desc: "Mobile companion for travelers featuring real-time Google Maps integration, custom location markers, and offline routing capabilities for a flawless exploration experience.",
    img: Travel_HD,
    fullDesc: "Leveraging Google Maps API and native camera features, this app allows users to document their journeys and find hidden gems with GPS-based recommendations. Includes Firebase for real-time data sync.",
    tags: ["Google Maps", "Firebase", "GPS", "Camera"],
  },
  {
    title: "AI Fitness Coach",
    desc: "Next-gen fitness app using Camera AI for posture correction and real-time workout tracking. Features stunning dark-mode aesthetics and interactive progress charts.",
    img: Fitness_HD,
    fullDesc: "Integrated with AI APIs for real-time posture analysis via the device camera. It monitors form during exercises and provides instant feedback to prevent injuries and optimize performance.",
    tags: ["AI APIs", "Camera", "React Native", "Reanimated"],
  },
  {
    title: "Futuristic AI Chatbot",
    desc: "Advanced conversational AI integrated into a mobile interface, featuring voice activation, smart context awareness, and a sleek glassmorphic UI design.",
    img: AI_Chat_HD,
    fullDesc: "Powered by OpenAI's GPT-4 via API, this chatbot provides intelligent responses and integrates with system tools for a seamless assistant experience. Includes beautiful animations and voice recognition.",
    tags: ["OpenAI", "Next.js", "Node.js", "Socket.io"],
  },
];

const certificates = [
  {
    title: "Java",
    img: Java_Certificate,
    issuer: "Oracle Academy",
    date: "1st Oct 2022",
  },
  {
    title: "C++",
    img: CPP_Certificate,
    issuer: "Coding Ninjas",
    date: "1st Oct 2022",
  },
  {
    title: "NumPy Python",
    img: Numpy_Certificate,
    issuer: "Coursera",
    date: "21st July 2021",
  },
  {
    title: "AI Participation",
    img: Hierrachy_Certificate,
    issuer: "Tech Symposium",
    date: "19th July 2024",
  },
];

const technologies = [
  { name: "React Native", icon: <SiReact color="#61DAFB" /> },
  { name: "React", icon: <SiReact color="#61DAFB" /> },
  { name: "Express", icon: <SiExpress color="#000000" /> },
  { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
  { name: "NestJS", icon: <SiNestjs color="#E0234E" /> },
  { name: "Next.js", icon: <SiNextdotjs color="#000000" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
  { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
  { name: "AI APIs", icon: <SiOpenai color="#412991" /> },
];

const Portfolio = () => {
  const [key, setKey] = useState("projects");
  const [animateTech, setAnimateTech] = useState(false);
  const [visibleTech, setVisibleTech] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-quad",
      once: false,
    });
  }, []);

  useEffect(() => {
    if (key === "technologies") {
      setAnimateTech(true);
      setVisibleTech([]);
      technologies.forEach((tech, index) => {
        setTimeout(() => {
          setVisibleTech((prev) => [...prev, tech]);
        }, index * 150);
      });
    } else {
      setAnimateTech(false);
      setVisibleTech([]);
    }
  }, [key]);

  const handleShowModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const handleCardHover = (index) => {
    setHoveredCard(index);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div id="projects" className="portfolio-section">
      <h2
        className="title text-center"
        data-aos="fade-down"
        style={{ textAlign: "center" }}
      >
        Portfolio Showcase
      </h2>
      <p
        className="subtitle text-center"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        Explore my projects, certifications, and skills
      </p>

      <div
        className="title-buttons text-center"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        <Button
          variant="link"
          onClick={() => setKey("projects")}
          className={`tab-button ${key === "projects" ? "active-tab" : ""}`}
        >
          Projects
        </Button>
        <Button
          variant="link"
          onClick={() => setKey("certificates")}
          className={`tab-button ${key === "certificates" ? "active-tab" : ""}`}
        >
          Certificates
        </Button>
        <Button
          variant="link"
          onClick={() => setKey("technologies")}
          className={`tab-button ${key === "technologies" ? "active-tab" : ""}`}
        >
          Tech Stack
        </Button>
      </div>

      <Tabs
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="portfolio-tabs"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {/* Projects Tab */}
        <Tab eventKey="projects" className="projects-tab" id="projects">
          <Row className="g-4" style={{ margin: 10 }}>
            {projects.map((project, index) => (
              <Col
                md={4}
                sm={6}
                xs={12}
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div
                  className={`project-card-wrapper ${hoveredCard === index ? "hovered" : ""
                    }`}
                  onMouseEnter={() => handleCardHover(index)}
                  onMouseLeave={handleCardLeave}
                >
                  <Card className="neon-project-card" onClick={() => handleShowModal(project)}>
                    <div className="project-image-container">
                      <Card.Img
                        variant="top"
                        src={project.img}
                        className="project-image"
                      />
                      <div className="project-tags">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Card.Body className="project-body">
                      <Card.Title className="project-title">
                        {project.title}
                        <div className="title-underline"></div>
                      </Card.Title>
                      <Card.Text className="project-desc color-dark">
                        {project.desc}
                      </Card.Text>
                      <Button
                        variant="outline-primary"
                        className="project-button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleShowModal(project);
                        }}
                      >
                        View Details
                      </Button>
                    </Card.Body>
                    <div className="card-hover-light"></div>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </Tab>

        {/* Certificates Tab */}
        <Tab
          eventKey="certificates"
          className="certificates-tab"
          id="certificates"
        >
          <Row className="g-4" style={{ margin: 10 }}>
            {certificates.map((cert, index) => (
              <Col
                md={4}
                sm={6}
                xs={12}
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="certificate-wrapper">
                  <Card className="neon-certificate-card">
                    <div className="certificate-image-container">
                      <Card.Img
                        variant="top"
                        src={cert.img}
                        className="certificate-image"
                        loading="lazy"
                      />
                      <div className="certificate-overlay">
                        <Button
                          variant="outline-light"
                          className="view-button"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(
                              cert.img,
                              "_blank",
                              "noopener,noreferrer"
                            );
                          }}
                        >
                          <i className="bi bi-zoom-in"></i> View Full
                        </Button>
                      </div>
                    </div>
                    <Card.Body className="certificate-body">
                      <Card.Title className="certificate-title">
                        {cert.title}
                        <div className="certificate-underline"></div>
                      </Card.Title>
                      {cert.issuer && (
                        <Card.Text className="certificate-issuer">
                          <i className="bi bi-award"></i> {cert.issuer}
                        </Card.Text>
                      )}
                      {cert.date && (
                        <Card.Text className="certificate-date">
                          <i className="bi bi-calendar"></i> {cert.date}
                        </Card.Text>
                      )}
                    </Card.Body>
                    <div className="certificate-hover-effect"></div>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </Tab>

        {/* Technologies Tab */}
        <Tab eventKey="technologies" className="technologies-tab" id="tech">
          <Row className="g-4" style={{ margin: 10 }}>
            {visibleTech.map((tech, index) => (
              <Col
                md={2}
                sm={3}
                xs={4}
                key={index}
                data-aos={animateTech ? "flip-left" : ""}
                data-aos-delay={index * 100}
              >
                <div className="tech-icon-wrapper">
                  <div className="tech-icon">
                    <div className="tech-react-icon">{tech.icon}</div>
                    <p className="tech-name">{tech.name}</p>
                  </div>
                  <div className="tech-hover-light"></div>
                </div>
              </Col>
            ))}
          </Row>
        </Tab>
      </Tabs>
      {/* Project Details Modal */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered className="project-detail-modal">
        {selectedProject && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProject.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="modal-image-container">
                <img src={selectedProject.img} alt={selectedProject.title} className="modal-image" />
              </div>
              <div className="modal-content-container">
                <h5>About this project</h5>
                <p>{selectedProject.fullDesc}</p>
                <div className="modal-tags">
                  {selectedProject.tags.map((tag, i) => (
                    <span key={i} className="modal-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
              <Button variant="primary">Visit Project</Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Portfolio;
