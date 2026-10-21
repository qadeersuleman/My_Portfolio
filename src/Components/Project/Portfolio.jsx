import React, { useState, useEffect } from "react";
import { Row, Col, Button, Modal, Container } from "react-bootstrap";
import {
  SiReact, SiNodedotjs, SiNextdotjs, SiPostgresql, SiTailwindcss,
  SiPython, SiDjango, SiFlask, SiDocker, SiKubernetes, SiMysql, SiSupabase,
  SiGithubactions, SiRedis
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faLayerGroup, faLaptopCode, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
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

const projectsData = [
  {
    title: "CloudScale - Azure Kubernetes & CI/CD Engine",
    category: "devops",
    categoryLabel: "DevOps, Azure & Kubernetes",
    desc: "Enterprise cloud orchestration system on Microsoft Azure Kubernetes Service (AKS) featuring automated GitHub Actions CI/CD pipelines, Dockerized services, and Prometheus telemetry.",
    img: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&auto=format&fit=crop&q=80",
    fullDesc: "Architected a multi-region deployment infrastructure on Microsoft Azure with Azure Kubernetes Service (AKS). Configured zero-downtime rolling updates, automated Docker image build/push pipelines via GitHub Actions, secret management with Azure Key Vault, and real-time observability using Prometheus & Grafana.",
    features: [
      "Microsoft Azure AKS Multi-Node Cluster Orchestration",
      "Automated CI/CD Workflows via GitHub Actions",
      "Docker Multi-stage Builds & Container Hardening",
      "Prometheus & Grafana Real-Time Telemetry Metrics"
    ],
    tags: ["Microsoft Azure", "Kubernetes", "Docker", "CI/CD", "Prometheus"],
    demoUrl: "https://github.com/qadeersuleman/",
    githubUrl: "https://github.com/qadeersuleman/",
  },
  {
    title: "NextGen SaaS - Full Stack Next.js & Supabase Engine",
    category: "web",
    categoryLabel: "Next.js 14 & Supabase",
    desc: "Multi-tenant enterprise SaaS platform engineered with Next.js App Router, Supabase Auth, PostgreSQL with Row-Level Security, and Stripe recurring billing.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    fullDesc: "Built a high-performance web dashboard featuring server-rendered dynamic data, Supabase real-time subscriptions, and complex PostgreSQL queries. Implemented granular permission control using Supabase Row-Level Security (RLS) policies and integrated Stripe Webhooks for subscription lifecycle automation.",
    features: [
      "Next.js App Router & Server Components Architecture",
      "Supabase Auth & Real-Time PostgreSQL Subscriptions",
      "Granular Row-Level Security (RLS) Policies",
      "Stripe Billing & Automated Invoice Processing"
    ],
    tags: ["Next.js", "React", "Supabase", "PostgreSQL", "Stripe"],
    demoUrl: "https://github.com/qadeersuleman/",
    githubUrl: "https://github.com/qadeersuleman/",
  },
  {
    title: "Enterprise CRM & Analytics - Python Django & PostgreSQL",
    category: "python",
    categoryLabel: "Python Django & PostgreSQL",
    desc: "Production CRM & reporting engine with Django REST Framework, Celery asynchronous workers, Redis caching, and relational PostgreSQL modeling.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    fullDesc: "Designed an enterprise-grade backend with Django REST Framework and PostgreSQL. Handles asynchronous data exports, transactional email queues via Celery and Redis, JWT authentication, and Swagger API documentation.",
    features: [
      "Django REST Framework & JWT Token Authentication",
      "PostgreSQL Query Optimization & Indexing",
      "Celery Distributed Workers & Redis Task Queuing",
      "Dockerized Container Deployment & Nginx Ingress"
    ],
    tags: ["Python", "Django", "PostgreSQL", "Celery", "Redis", "Docker"],
    demoUrl: "https://github.com/qadeersuleman/",
    githubUrl: "https://github.com/qadeersuleman/",
  },
  {
    title: "OmniFlow - Flask Microservices & MySQL Cluster Gateway",
    category: "python",
    categoryLabel: "Python Flask & MySQL",
    desc: "Lightweight, high-throughput microservices gateway powered by Python Flask, MySQL relational clustering, Redis token caching, and Nginx reverse proxy.",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
    fullDesc: "Engineered a distributed API gateway capable of processing thousands of requests per second. Built using Flask blueprints, SQLAlchemy ORM with connection pooling, MySQL replication nodes, and containerized deployment with Docker Compose.",
    features: [
      "Python Flask Blueprints & Clean RESTful Endpoints",
      "MySQL High-Availability Connection Pooling",
      "Redis In-Memory Token Rate Limiting & Session Store",
      "Docker Compose Multi-Container Orchestration"
    ],
    tags: ["Python", "Flask", "MySQL", "APIs", "Docker", "Nginx"],
    demoUrl: "https://github.com/qadeersuleman/",
    githubUrl: "https://github.com/qadeersuleman/",
  },
  {
    title: "EliteCommerce - React Native Mobile Platform",
    category: "mobile",
    categoryLabel: "React Native iOS & Android",
    desc: "Cross-platform mobile commerce experience with seamless Paystack and Stripe checkout, Redux Toolkit state, push notifications, and 60fps UI.",
    img: Ecommerce_HD,
    fullDesc: "Engineered a production-ready mobile shopping application featuring secure credit card / Apple Pay checkout with Stripe and Paystack webhooks. Built with React Native, Redux Toolkit for state management, and Node.js REST API backend.",
    features: [
      "Secure Paystack & Stripe Checkout Gateways",
      "Redux Toolkit Global State Management",
      "Push Notifications & Real-Time Order Tracking",
      "iOS & Android Optimized 60FPS Fluid UI"
    ],
    tags: ["React Native", "Paystack", "Stripe", "Redux", "APIs"],
    demoUrl: "https://github.com/qadeersuleman/",
    githubUrl: "https://github.com/qadeersuleman/",
  },
  {
    title: "GeoVoyage - Smart Travel & Location Assistant",
    category: "mobile",
    categoryLabel: "React Native & Google Maps",
    desc: "Mobile navigation companion featuring real-time Google Maps integration, custom markers, GPS route calculation, and offline place bookmarking.",
    img: Travel_HD,
    fullDesc: "Integrated Google Maps API with React Native Maps, device GPS, and camera logic to let travelers document trips with geo-tagged photos and offline routing. Uses Firebase Firestore for real-time synchronization.",
    features: [
      "Google Maps SDK & Geolocation API",
      "Offline Route Caching & Geo-tagging",
      "Firebase Firestore Real-time Sync",
      "Custom Native Camera Integration"
    ],
    tags: ["Google Maps", "React Native", "Firebase", "Camera API"],
    demoUrl: "https://github.com/qadeersuleman/",
    githubUrl: "https://github.com/qadeersuleman/",
  },
  {
    title: "CognitiveAI - Intelligent Vector Search Engine",
    category: "web",
    categoryLabel: "Next.js & Supabase Vector",
    desc: "Intelligent document conversational system with Next.js App Router, Python microservices, Supabase pgvector embeddings, and token streaming.",
    img: AI_Chat_HD,
    fullDesc: "Powered by OpenAI's GPT-4 API and Supabase pgvector for semantic retrieval. Features token streaming, markdown code rendering, file upload parsing, and responsive dark glassmorphic styling.",
    features: [
      "OpenAI GPT-4 Token Streaming & Vector Search",
      "Supabase PostgreSQL pgvector Semantic Retrieval",
      "Next.js App Router & Tailwind CSS Responsive UI",
      "Docker Containerized Microservices Deployment"
    ],
    tags: ["Next.js", "Python", "Supabase", "PostgreSQL", "Docker"],
    demoUrl: "https://github.com/qadeersuleman/",
    githubUrl: "https://github.com/qadeersuleman/",
  },
  {
    title: "PulseFit - AI Posture & Camera Vision App",
    category: "mobile",
    categoryLabel: "AI & Mobile Vision",
    desc: "Fitness application leveraging device camera AI for real-time posture correction, workout analytics, and interactive exercise progress charts.",
    img: Fitness_HD,
    fullDesc: "Integrated custom vision algorithms with OpenAI GPT-4 API to analyze posture keypoints via device camera during workouts, preventing injuries and calculating repetition counts in real time.",
    features: [
      "Real-time Camera Vision Keypoint Tracking",
      "OpenAI GPT-4 Workout Recommendations",
      "Smooth Animated Progress Metrics",
      "Dark Mode Cyberpunk UI"
    ],
    tags: ["React Native", "AI APIs", "Camera Vision", "OpenAI"],
    demoUrl: "https://github.com/qadeersuleman/",
    githubUrl: "https://github.com/qadeersuleman/",
  },
];

const certificatesData = [
  {
    title: "Java Programming Masterclass",
    img: Java_Certificate,
    issuer: "Oracle Academy",
    date: "2022",
  },
  {
    title: "C++ Data Structures & Algorithms",
    img: CPP_Certificate,
    issuer: "Coding Ninjas",
    date: "2022",
  },
  {
    title: "NumPy & Data Science Python",
    img: Numpy_Certificate,
    issuer: "Coursera",
    date: "2021",
  },
  {
    title: "AI & Software Tech Symposium",
    img: Hierrachy_Certificate,
    issuer: "Tech Symposium",
    date: "2024",
  },
];

const techStackData = [
  { name: "React.js", category: "Frontend", icon: <SiReact color="#61DAFB" /> },
  { name: "Next.js", category: "Frontend & SSR", icon: <SiNextdotjs color="#ffffff" /> },
  { name: "Python", category: "Backend & Data", icon: <SiPython color="#3776AB" /> },
  { name: "Django", category: "Web Framework", icon: <SiDjango color="#092E20" /> },
  { name: "Flask", category: "Microservices", icon: <SiFlask color="#ffffff" /> },
  { name: "Docker", category: "DevOps & Containers", icon: <SiDocker color="#2496ED" /> },
  { name: "Kubernetes", category: "Orchestration", icon: <SiKubernetes color="#326CE5" /> },
  { name: "Microsoft Azure", category: "Cloud Infrastructure", icon: <VscAzure color="#0089D6" /> },
  { name: "PostgreSQL", category: "Relational DB", icon: <SiPostgresql color="#4169E1" /> },
  { name: "MySQL", category: "Relational DB", icon: <SiMysql color="#4479A1" /> },
  { name: "Supabase", category: "BaaS & PostgreSQL", icon: <SiSupabase color="#3ECF8E" /> },
  { name: "CI/CD & Actions", category: "Automation", icon: <SiGithubactions color="#2088FF" /> },
  { name: "React Native", category: "Mobile iOS/Android", icon: <SiReact color="#61DAFB" /> },
  { name: "Node.js", category: "Backend Runtime", icon: <SiNodedotjs color="#339933" /> },
  { name: "Redis", category: "Caching & Queues", icon: <SiRedis color="#DC382D" /> },
  { name: "Tailwind CSS", category: "Styling & UI", icon: <SiTailwindcss color="#06B6D4" /> },
];

const Portfolio = () => {
  const [activeTabKey, setActiveTabKey] = useState("projects");
  const [filterCategory, setFilterCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const [showCertModal, setShowCertModal] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-quad", once: true });
  }, []);

  const filteredProjects = projectsData.filter((p) => {
    if (filterCategory === "all") return true;
    return p.category === filterCategory;
  });

  const handleOpenProjectModal = (proj) => {
    setSelectedProject(proj);
    setShowProjectModal(true);
  };

  const handleOpenCertModal = (cert) => {
    setSelectedCert(cert);
    setShowCertModal(true);
  };

  return (
    <section id="projects" className="portfolio-section">
      <Container>
        <div className="section-header text-center" data-aos="fade-down">
          <span className="section-badge">Featured Work & Credentials</span>
          <h2 className="section-title mt-2">
            Portfolio <span className="gradient-text">Showcase</span>
          </h2>
          <p className="section-subtitle">
            Explore full stack web platforms, cloud & DevOps systems, mobile apps, and credentials
          </p>
          <div className="divider mx-auto"></div>
        </div>

        {/* Main Tab Nav: Projects | Certificates | Tech Stack */}
        <div className="portfolio-main-tabs text-center mt-4 mb-4" data-aos="fade-up">
          <button
            className={`main-tab-btn ${activeTabKey === "projects" ? "active" : ""}`}
            onClick={() => setActiveTabKey("projects")}
            data-cursor="Projects"
          >
            <FontAwesomeIcon icon={faLaptopCode} className="me-2" /> Featured Projects (50+)
          </button>
          <button
            className={`main-tab-btn ${activeTabKey === "certificates" ? "active" : ""}`}
            onClick={() => setActiveTabKey("certificates")}
            data-cursor="Certs"
          >
            <FontAwesomeIcon icon={faAward} className="me-2" /> Certificates
          </button>
          <button
            className={`main-tab-btn ${activeTabKey === "tech" ? "active" : ""}`}
            onClick={() => setActiveTabKey("tech")}
            data-cursor="Stack"
          >
            <FontAwesomeIcon icon={faLayerGroup} className="me-2" /> Tech Stack
          </button>
        </div>

        {/* TAB 1: PROJECTS */}
        {activeTabKey === "projects" && (
          <div className="projects-tab-content">
            {/* Filter Pills */}
            <div className="project-filter-pills justify-content-center d-flex flex-wrap gap-2 mb-4">
              <button
                className={`filter-btn ${filterCategory === "all" ? "active" : ""}`}
                onClick={() => setFilterCategory("all")}
              >
                All Projects
              </button>
              <button
                className={`filter-btn ${filterCategory === "web" ? "active" : ""}`}
                onClick={() => setFilterCategory("web")}
              >
                Full Stack Web & Next.js
              </button>
              <button
                className={`filter-btn ${filterCategory === "devops" ? "active" : ""}`}
                onClick={() => setFilterCategory("devops")}
              >
                DevOps & Azure
              </button>
              <button
                className={`filter-btn ${filterCategory === "python" ? "active" : ""}`}
                onClick={() => setFilterCategory("python")}
              >
                Python, Django & Flask
              </button>
              <button
                className={`filter-btn ${filterCategory === "mobile" ? "active" : ""}`}
                onClick={() => setFilterCategory("mobile")}
              >
                React Native & Mobile
              </button>
            </div>

            <Row className="g-4">
              {filteredProjects.map((project, index) => (
                <Col lg={6} md={6} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="portfolio-card" data-cursor="View">
                    <div className="card-image-wrapper">
                      <img src={project.img} alt={project.title} className="card-img" />
                      <span className="card-category-badge">{project.categoryLabel}</span>
                      <div className="card-image-overlay">
                        <button
                          className="overlay-view-btn"
                          onClick={() => handleOpenProjectModal(project)}
                        >
                          View Recruiter Brief
                        </button>
                      </div>
                    </div>

                    <div className="card-content">
                      <h3 className="card-title-text">{project.title}</h3>
                      <p className="card-desc-text">{project.desc}</p>

                      <div className="card-tags">
                        {project.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="card-tag">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="card-actions">
                        <Button
                          variant="outline-info"
                          className="btn-details"
                          onClick={() => handleOpenProjectModal(project)}
                        >
                          Details & Architecture
                        </Button>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-code"
                        >
                          <FontAwesomeIcon icon={faGithub} className="me-1" /> Code
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        )}

        {/* TAB 2: CERTIFICATES */}
        {activeTabKey === "certificates" && (
          <div className="certificates-tab-content">
            <Row className="g-4">
              {certificatesData.map((cert, index) => (
                <Col lg={3} md={6} key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
                  <div className="cert-card" onClick={() => handleOpenCertModal(cert)} data-cursor="Inspect">
                    <div className="cert-image-wrap">
                      <img src={cert.img} alt={cert.title} className="cert-img" />
                      <div className="cert-hover-overlay">
                        <FontAwesomeIcon icon={faAward} className="cert-icon" />
                        <span>Inspect Certificate</span>
                      </div>
                    </div>
                    <div className="cert-info">
                      <h4 className="cert-title">{cert.title}</h4>
                      <p className="cert-issuer">{cert.issuer} • {cert.date}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        )}

        {/* TAB 3: TECH STACK GRID */}
        {activeTabKey === "tech" && (
          <div className="tech-tab-content">
            <Row className="g-3">
              {techStackData.map((tech, index) => (
                <Col lg={3} md={4} sm={6} xs={6} key={index} data-aos="fade-up" data-aos-delay={index * 50}>
                  <div className="tech-grid-card">
                    <div className="tech-icon-container">{tech.icon}</div>
                    <div className="tech-details">
                      <h4 className="tech-name">{tech.name}</h4>
                      <span className="tech-cat">{tech.category}</span>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        )}
      </Container>

      {/* Project Details Modal */}
      <Modal
        show={showProjectModal}
        onHide={() => setShowProjectModal(false)}
        size="lg"
        centered
        className="custom-portfolio-modal"
      >
        {selectedProject && (
          <>
            <Modal.Header closeButton>
              <Modal.Title className="modal-header-title">
                {selectedProject.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-4">
              <div className="modal-img-container mb-4">
                <img src={selectedProject.img} alt={selectedProject.title} className="w-100 rounded-3" />
              </div>

              <h5 className="modal-section-title">Project Overview</h5>
              <p className="modal-desc">{selectedProject.fullDesc}</p>

              <h5 className="modal-section-title mt-4">Key Recruiter & Technical Highlights</h5>
              <div className="modal-features-list mb-4">
                {selectedProject.features.map((feat, fIdx) => (
                  <div key={fIdx} className="feature-row d-flex align-items-center gap-2 mb-2">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-info" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <h5 className="modal-section-title">Tech Stack Tags</h5>
              <div className="d-flex flex-wrap gap-2 mt-2">
                {selectedProject.tags.map((t, i) => (
                  <span key={i} className="card-tag">
                    {t}
                  </span>
                ))}
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowProjectModal(false)}>
                Close
              </Button>
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <FontAwesomeIcon icon={faGithub} className="me-2" /> View GitHub Repository
              </a>
            </Modal.Footer>
          </>
        )}
      </Modal>

      {/* Certificate Viewer Modal */}
      <Modal
        show={showCertModal}
        onHide={() => setShowCertModal(false)}
        size="lg"
        centered
        className="custom-portfolio-modal"
      >
        {selectedCert && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedCert.title} - {selectedCert.issuer}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center p-3">
              <img src={selectedCert.img} alt={selectedCert.title} className="img-fluid rounded shadow-lg" />
            </Modal.Body>
          </>
        )}
      </Modal>
    </section>
  );
};

export default Portfolio;
