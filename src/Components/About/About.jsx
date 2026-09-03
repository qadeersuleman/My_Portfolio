import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faCheckCircle, faMapMarkerAlt, faCode, faServer, faDatabase, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/css/about.css";

const skillCategories = [
  {
    key: "mobile",
    title: "Mobile & Frontend",
    icon: faMobileAlt,
    skills: [
      { name: "React Native (iOS & Android)", level: 95 },
      { name: "React.js / Next.js", level: 92 },
      { name: "Redux Toolkit & State Mgt", level: 88 },
      { name: "HTML5 / CSS3 / JavaScript ES6+", level: 95 },
      { name: "Bootstrap / Tailwind CSS", level: 90 },
    ],
  },
  {
    key: "backend",
    title: "Backend & APIs",
    icon: faServer,
    skills: [
      { name: "Node.js & Express", level: 88 },
      { name: "NestJS Architecture", level: 85 },
      { name: "RESTful API Design & Webhooks", level: 90 },
      { name: "Firebase Auth & Firestore", level: 88 },
    ],
  },
  {
    key: "database",
    title: "Databases & Payments",
    icon: faDatabase,
    skills: [
      { name: "MongoDB & Mongoose", level: 86 },
      { name: "PostgreSQL & SQL", level: 82 },
      { name: "Paystack Payment Integration", level: 90 },
      { name: "Stripe Payment Gateway", level: 88 },
    ],
  },
  {
    key: "specialized",
    title: "AI, Maps & Media",
    icon: faCode,
    skills: [
      { name: "Google Maps & Geolocation", level: 92 },
      { name: "Camera & Vision Logic", level: 88 },
      { name: "OpenAI GPT-4 API Integration", level: 85 },
      { name: "Git, GitHub & Deployment (Vercel/Heroku)", level: 90 },
    ],
  },
];

const About = () => {
  const [animateSkills, setAnimateSkills] = useState(false);
  const [activeTab, setActiveTab] = useState("mobile");
  const skillSectionRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-out-quad", once: true });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!skillSectionRef.current) return;
      const top = skillSectionRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight - 100) {
        setAnimateSkills(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="about" className="about-section">
      <Container>
        <div className="section-header text-center" data-aos="fade-down">
          <span className="section-badge">Behind The Code</span>
          <h2 className="section-title mt-2">
            About <span className="gradient-text">Qadeer Suleman</span>
          </h2>
          <p className="section-subtitle">
            BSCS Graduate (3.80/4.0 CGPA) & Full Stack Mobile Engineering Specialist
          </p>
          <div className="divider mx-auto"></div>
        </div>

        <Row className="g-5 align-items-center mt-2">
          {/* Left Column: Profile Card & Quick Info */}
          <Col lg={5} data-aos="fade-right">
            <div className="about-profile-card">
              <div className="about-image-wrapper">
                <img
                  src={`${process.env.PUBLIC_URL}/Myimage.jpeg`}
                  alt="Qadeer Suleman"
                  className="about-profile-img"
                />
                <div className="cgpa-floating-tag">
                  <FontAwesomeIcon icon={faGraduationCap} className="me-2" />
                  <span>3.80 / 4.0 CGPA</span>
                </div>
              </div>

              <div className="about-info-grid">
                <div className="info-box">
                  <span className="info-label">Full Name</span>
                  <span className="info-value">Qadeer Suleman</span>
                </div>
                <div className="info-box">
                  <span className="info-label">Education</span>
                  <span className="info-value">BS Computer Science (2026)</span>
                </div>
                <div className="info-box">
                  <span className="info-label">Email</span>
                  <span className="info-value">qadeersaleman@gmail.com</span>
                </div>
                <div className="info-box">
                  <span className="info-label">Phone</span>
                  <span className="info-value">+92 302 3466105</span>
                </div>
                <div className="info-box full-width">
                  <span className="info-label">Location</span>
                  <span className="info-value">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="me-1 text-info" /> Ghotki, Sindh, Pakistan (Open for Remote)
                  </span>
                </div>
              </div>
            </div>
          </Col>

          {/* Right Column: Narrative Bio & Tech Summary */}
          <Col lg={7} data-aos="fade-left">
            <div className="about-content">
              <h3 className="about-heading">
                Engineering <span className="gradient-text">High-Performance</span> Digital Products
              </h3>

              <p className="about-paragraph">
                I earned my <strong>BS in Computer Science</strong> from <em>Shah Abdul Latif University</em> with an honor CGPA of <strong>3.80 / 4.0</strong>. Over the past 3+ years, I have specialized in architecting and delivering cross-platform mobile apps for iOS & Android using React Native alongside scalable backend APIs with Node.js, Express, and NestJS.
              </p>

              <p className="about-paragraph">
                Having successfully engineered over <strong>50+ real-world projects</strong>, my expertise extends to complex third-party integrations including <strong>Paystack & Stripe payments</strong>, live Google Maps tracking, camera AI pipelines, and Firebase cloud services.
              </p>

              <div className="key-highlights-grid">
                <div className="highlight-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="highlight-icon" />
                  <span>50+ Successful Mobile & Web Deployments</span>
                </div>
                <div className="highlight-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="highlight-icon" />
                  <span>Stripe & Paystack In-App Purchase Flows</span>
                </div>
                <div className="highlight-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="highlight-icon" />
                  <span>Clean Architecture & Performant State Management</span>
                </div>
                <div className="highlight-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="highlight-icon" />
                  <span>Google Maps, Camera & AI APIs Mastery</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Interactive Skill Matrix Tabs */}
        <div className="skills-matrix-wrapper mt-5" ref={skillSectionRef} data-aos="fade-up">
          <h3 className="text-center mb-4 text-white font-weight-bold">
            Technical <span className="gradient-text">Proficiency Matrix</span>
          </h3>

          <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
            <Nav className="skills-nav-tabs justify-content-center mb-4">
              {skillCategories.map((cat) => (
                <Nav.Item key={cat.key}>
                  <Nav.Link eventKey={cat.key} className="skill-tab-link" data-cursor="Skills">
                    <FontAwesomeIcon icon={cat.icon} className="me-2" />
                    {cat.title}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>

            <Tab.Content>
              {skillCategories.map((cat) => (
                <Tab.Pane eventKey={cat.key} key={cat.key}>
                  <Row className="g-4">
                    {cat.skills.map((skill, sIndex) => (
                      <Col md={6} key={sIndex}>
                        <div className="skill-bar-card">
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-percentage">{skill.level}%</span>
                          </div>
                          <div className="skill-progress-track">
                            <div
                              className={`skill-progress-fill ${animateSkills ? "animated" : ""}`}
                              style={{
                                width: animateSkills ? `${skill.level}%` : "0%",
                              }}
                            />
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Tab.Container>
        </div>
      </Container>
    </section>
  );
};

export default About;
