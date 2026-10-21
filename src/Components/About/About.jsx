import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faCheckCircle, faMapMarkerAlt, faServer, faDatabase, faCloud, faGlobe } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/css/about.css";

const skillCategories = [
  {
    key: "frontend",
    title: "Frontend & Mobile",
    icon: faGlobe,
    skills: [
      { name: "React.js & Next.js", level: 95 },
      { name: "React Native (iOS & Android)", level: 92 },
      { name: "JavaScript ES6+ & TypeScript", level: 90 },
      { name: "Tailwind CSS & Bootstrap", level: 94 },
      { name: "Redux Toolkit & State Management", level: 88 },
    ],
  },
  {
    key: "backend",
    title: "Python, Backend & APIs",
    icon: faServer,
    skills: [
      { name: "Python (Django & Flask)", level: 92 },
      { name: "RESTful & GraphQL API Architecture", level: 94 },
      { name: "Node.js & Express / NestJS", level: 88 },
      { name: "Authentication, JWT & Security", level: 90 },
    ],
  },
  {
    key: "database",
    title: "Databases & Storage",
    icon: faDatabase,
    skills: [
      { name: "PostgreSQL & Supabase", level: 92 },
      { name: "MySQL & Relational Modeling", level: 90 },
      { name: "MongoDB & NoSQL Stores", level: 86 },
      { name: "Redis Caching & Data Queues", level: 84 },
    ],
  },
  {
    key: "devops",
    title: "DevOps, Azure & Cloud",
    icon: faCloud,
    skills: [
      { name: "Docker & Containerization", level: 92 },
      { name: "Kubernetes (K8s) Orchestration", level: 85 },
      { name: "Microsoft Azure Cloud Services", level: 88 },
      { name: "CI/CD Pipelines (GitHub Actions / GitLab)", level: 90 },
    ],
  },
];

const About = () => {
  const [animateSkills, setAnimateSkills] = useState(false);
  const [activeTab, setActiveTab] = useState("frontend");
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
            About <span className="gradient-text">Abdul Qadeer</span>
          </h2>
          <p className="section-subtitle">
            BSCS Honors Graduate (3.80/4.0 CGPA) | Full Stack Web & Mobile Developer | DevOps Engineer
          </p>
          <div className="divider mx-auto"></div>
        </div>

        <Row className="g-5 align-items-center mt-2">
          {/* Left Column: Profile Card & Quick Info */}
          <Col lg={5} data-aos="fade-right">
            <div className="about-profile-card">
              <div className="about-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&auto=format&fit=crop&q=80"
                  alt="Abdul Qadeer"
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
                  <span className="info-value">Abdul Qadeer</span>
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
                Engineering <span className="gradient-text">High-Performance</span> Web, Mobile & Cloud Systems
              </h3>

              <p className="about-paragraph">
                I earned my <strong>BS in Computer Science</strong> from <em>Shah Abdul Latif University</em> with honors (CGPA of <strong>3.80 / 4.0</strong>). As a versatile <strong>Full Stack Web & Mobile Developer</strong> and <strong>DevOps Engineer</strong>, I engineer robust digital products from intuitive user interfaces to highly available cloud deployments.
              </p>

              <p className="about-paragraph">
                With a track record of delivering <strong>50+ scalable applications</strong>, my stack encompasses modern frontend systems with <strong>React & Next.js</strong>, cross-platform mobile apps with <strong>React Native</strong>, enterprise backend architectures in <strong>Python (Django & Flask)</strong>, and relational databases with <strong>PostgreSQL, MySQL, and Supabase</strong>.
              </p>

              <p className="about-paragraph">
                On the cloud and infrastructure front, I specialize in containerization and CI/CD pipelines using <strong>Docker, Kubernetes, GitHub Actions, and Microsoft Azure</strong> to achieve automated testing, zero-downtime rollouts, and resilient cloud monitoring.
              </p>

              <div className="key-highlights-grid">
                <div className="highlight-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="highlight-icon" />
                  <span>50+ Full Stack Web, Mobile & Cloud Deployments</span>
                </div>
                <div className="highlight-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="highlight-icon" />
                  <span>Docker, Kubernetes & Microsoft Azure Cloud Automation</span>
                </div>
                <div className="highlight-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="highlight-icon" />
                  <span>Python (Django & Flask) & Scalable REST/GraphQL APIs</span>
                </div>
                <div className="highlight-item">
                  <FontAwesomeIcon icon={faCheckCircle} className="highlight-icon" />
                  <span>PostgreSQL, MySQL & Supabase Data Architecture</span>
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
