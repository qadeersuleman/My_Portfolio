import React, { useState, useEffect } from "react";
import { Tab, Tabs, Card, Row, Col, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/css/portfolio.css";
import htmlImage from "../assets/images/html.png";
import cssImage from "../assets/images/css.png";
import jsImage from "../assets/images/js.png";
import jqImage from "../assets/images/jquery.png";
import bootImage from "../assets/images/bootstrap.png";
import ReactImage from "../assets/images/React.png";
import PyhtonImage from "../assets/images/python.png";
import DjangoImage from "../assets/images/django.png";
import flaskImage from "../assets/images/flask.png";
import CppImage from "../assets/images/cpp.png";
import JavaImage from "../assets/images/java.png";
import SqlImage from "../assets/images/MySQL.png";

// Certificates
import Hierrachy_Certificate from "../assets/images/Certificates/Hierarachy.jpg";
import Numpy_Certificate from "../assets/images/Certificates/Numpy.jpg";
import CPP_Certificate from "../assets/images/Certificates/CPP.jpg";
import Java_Certificate from "../assets/images/Certificates/Java.jpg";

// Projects
import Ecommerce from "../assets/images/Projects/Ecommerce.jpg";
import PortfolioImage from "../assets/images/Projects/Portfolio.jpg";
import DigitalMarketing from "../assets/images/Projects/digitalMarketing.jpg";
import TourismApp from "../assets/images/Projects/Tourism.jpg";
import ChatBot from "../assets/images/Projects/ChatBot.jpg";
import Solar from "../assets/images/Projects/Solar.jpg";

const projects = [
  {
    title: "Ecommerce",
    desc: "Online platform for dry and clean clothes using Paystack payment method. Simplifies laundry services with seamless transactions.",
    img: Ecommerce,
    tags: ["React", "Django.py", "MYSQL"],
  },
  {
    title: "Digital Marketing",
    desc: "Strategized campaigns to boost brand visibility and engagement. Utilized SEO, social media, and analytics for optimal results.",
    img: DigitalMarketing,
    tags: ["WordPress", "Elementor", "Plugins"],
  },
  {
    title: "My Portfolio",
    desc: "A personal portfolio showcasing skills, projects, and achievements. Designed to reflect creativity and professional expertise.",
    img: PortfolioImage,
    tags: ["React", "Bootstrap", "AOS"],
  },
  {
    title: "Solar Website",
    desc: "Informative website promoting solar energy solutions. Highlights benefits, services, and sustainable energy practices.",
    img: Solar,
    tags: ["React", "Bootstrap", "CSS"],
  },
  {
    title: "AI ChatBot",
    desc: "Intelligent chatbot for customer support and engagement. Built with natural language processing for seamless interactions.",
    img: ChatBot,
    tags: ["React Native", "Python", "TensorFlow"],
  },
  {
    title: "Tourism App",
    desc: "Mobile app for exploring travel destinations and planning trips. Features include guides, bookings, and local recommendations.",
    img: TourismApp,
    tags: ["React Native", "Firebase", "Google Maps"],
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
  { name: "HTML", img: htmlImage },
  { name: "CSS", img: cssImage },
  { name: "JavaScript", img: jsImage },
  { name: "Jquery", img: jqImage },
  { name: "React", img: ReactImage },
  { name: "Bootstrap", img: bootImage },
  { name: "Python", img: PyhtonImage },
  { name: "Django", img: DjangoImage },
  { name: "Flask", img: flaskImage },
  { name: "C++", img: CppImage },
  { name: "Java", img: JavaImage },
  { name: "MySQL", img: SqlImage },
];

const Portfolio = () => {
  const [key, setKey] = useState("projects");
  const [animateTech, setAnimateTech] = useState(false);
  const [visibleTech, setVisibleTech] = useState([]);
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
    }
  }, [key]);

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
                  className={`project-card-wrapper ${
                    hoveredCard === index ? "hovered" : ""
                  }`}
                  onMouseEnter={() => handleCardHover(index)}
                  onMouseLeave={handleCardLeave}
                >
                  <Card className="neon-project-card">
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
                      <Card.Text className="project-desc text-dark">
                        {project.desc}
                      </Card.Text>
                      <Button
                        variant="outline-primary"
                        className="project-button"
                        // onClick={() => window.open('#', '_blank')}
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
                    <img
                      src={tech.img}
                      alt={tech.name}
                      className="tech-image"
                    />
                    <p className="tech-name">{tech.name}</p>
                  </div>
                  <div className="tech-hover-light"></div>
                </div>
              </Col>
            ))}
          </Row>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Portfolio;
