import React, { useState, useEffect } from "react";
import { Tab, Tabs, Card, Row, Col, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/css/portfolio.css"; // Import styles
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
import Event_Certificate from  "../assets/images/Certificates/Event.jpg"

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
  },
  {
    title: "Digital Marketing",
    desc: "Strategized campaigns to boost brand visibility and engagement. Utilized SEO, social media, and analytics for optimal results.",
    img: DigitalMarketing,
  },
  {
    title: "My Portfolio",
    desc: "A personal portfolio showcasing skills, projects, and achievements. Designed to reflect creativity and professional expertise.",
    img: PortfolioImage,
  },
  {
    title: "Solar Website",
    desc: "Informative website promoting solar energy solutions. Highlights benefits, services, and sustainable energy practices.",
    img: Solar,
  },
  {
    title: "AI ChatBot",
    desc: "Intelligent chatbot for customer support and engagement. Built with natural language processing for seamless interactions.",
    img: ChatBot,
  },
  {
    title: "Tourism App",
    desc: "Mobile app for exploring travel destinations and planning trips. Features include guides, bookings, and local recommendations.",
    img: TourismApp,
  },
];

const certificates = [
  { title: "Java", img: Java_Certificate },
  { title: "C++", img: CPP_Certificate },
  { title: "NumPy Python", img: Numpy_Certificate },
  { title: "AI Participation", img: Hierrachy_Certificate },
  { title: "Event Organizer", img: Event_Certificate },
];

const technologies = [
  { name: "HTML", img: htmlImage },
  { name: "CSS", img: cssImage },
  { name: "JavaScript", img: jsImage },
  { name: "Jquery", img: jqImage },
  { name: "React", img: ReactImage },
  { name: "Bootstrap", img: bootImage },
  { name: "Pyhton", img: PyhtonImage },
  { name: "Django", img: DjangoImage },
  { name: "Flask", img: flaskImage },
  { name: "C++", img: CppImage },
  { name: "java", img: JavaImage },
  { name: "MySql", img: SqlImage },
];

const Portfolio = () => {
  const [key, setKey] = useState("projects");
  const [animateTech, setAnimateTech] = useState(false);
  const [visibleTech, setVisibleTech] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (key === "technologies") {
      setAnimateTech(true);
      setVisibleTech([]);
      technologies.forEach((tech, index) => {
        setTimeout(() => {
          setVisibleTech((prev) => [...prev, tech]);
        }, index * 200); // Adjust the delay as needed
      });
    } else {
      setAnimateTech(false);
    }
  }, [key]);

  return (
    <div id="projects">
      <h2 className="title text-center" style={{ color: "#00e1ff" }}>
        Portfolio Showcase
      </h2>
      <p className="subtitle text-center">
        Explore my projects, certifications, and skills.
      </p>

      <div className="title-buttons text-center">
        <Button
          variant="link"
          onClick={() => setKey("projects")}
          className={key === "projects" ? "active-tab" : ""}
        >
          Projects
        </Button>
        <Button
          variant="link"
          onClick={() => setKey("certificates")}
          className={key === "certificates" ? "active-tab" : ""}
        >
          Certificates
        </Button>
        <Button
          variant="link"
          onClick={() => setKey("technologies")}
          className={key === "technologies" ? "active-tab" : ""}
        >
          Tech Stack
        </Button>
      </div>

      <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="neon-tabs">
        {/* Projects Tab */}
        <Tab eventKey="projects" className="m-5" id="projects">
          <Row className="">
            {projects.map((project, index) => (
              <Col
                md={4}
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Card className="neon-card bg-dark">
                  <Card.Img
                    variant="top"
                    src={project.img}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />

                  <Card.Body>
                    <Card.Title style={{ color: "#00e1ff" }}>
                      {project.title}
                    </Card.Title>
                    <Card.Text className="text-light">{project.desc}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Tab>

        {/* Certificates Tab */}
        <Tab eventKey="certificates" className="m-5" id="certificates">
          <Row>
            {certificates.map((cert, index) => (
              <Col
                md={4}
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <Card className="neon-card">
                  <Card.Img variant="top" src={cert.img} />
                  <Card.Body>
                    <Card.Title>{cert.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Tab>

        {/* Technologies Tab */}
        <Tab eventKey="technologies" className="m-5" id="tech">
          <Row className="text-center">
            {visibleTech.map((tech, index) => (
              <Col
                md={2}
                sm={4}
                xs={4}
                key={index}
                data-aos={animateTech ? "flip-left" : ""}
                data-aos-delay={index * 100}
              >
                <div className="tech-icon">
                  <img src={tech.img} alt={tech.name} />
                  <p>{tech.name}</p>
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
