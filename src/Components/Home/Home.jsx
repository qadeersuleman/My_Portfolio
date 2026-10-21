import React, { useEffect, useState } from "react";
import "../assets/css/Home.css";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faFacebook,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";
import {
  faDownload,
  faPaperPlane,
  faCode,
  faAward,
  faCheckCircle,
  faLaptopCode,
  faCopy,
  faCheck,
  faTerminal
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const roles = [
  "Full Stack Web & Mobile Developer",
  "DevOps Engineer (Docker, K8s, Azure, CI/CD)",
  "Python Backend Architect (Django & Flask)",
  "React & Next.js Specialist",
  "Database & API Architect (Supabase, Postgres, MySQL)",
];

const ideTabs = [
  {
    id: "arch",
    name: "Architecture.tsx",
    icon: "⚛️",
    badge: "Next.js 14",
    codeLines: [
      { num: 1, text: "// Full-Stack Cloud Architecture", type: "comment" },
      { num: 2, text: "import { AzureAKS } from '@cloud/azure';", type: "keyword" },
      { num: 3, text: "import { SupabaseClient } from '@supabase/supabase-js';", type: "keyword" },
      { num: 4, text: "", type: "plain" },
      { num: 5, text: "export default async function DeployEngine() {", type: "func" },
      { num: 6, text: "  const cluster = await AzureAKS.connect({", type: "plain" },
      { num: 7, text: "    region: 'East US', autoscaling: true,", type: "string" },
      { num: 8, text: "    ingress: 'Nginx Kubernetes Controller',", type: "string" },
      { num: 9, text: "    database: 'PostgreSQL + Supabase pgvector',", type: "string" },
      { num: 10, text: "    uptimeGuarantee: '99.99%'", type: "string" },
      { num: 11, text: "  });", type: "plain" },
      { num: 12, text: "  return cluster.status; // 🟢 Production Live", type: "comment" },
      { num: 13, text: "}", type: "func" },
    ]
  },
  {
    id: "docker",
    name: "docker-compose.yml",
    icon: "🐳",
    badge: "Docker & K8s",
    codeLines: [
      { num: 1, text: "version: '3.8'", type: "keyword" },
      { num: 2, text: "services:", type: "func" },
      { num: 3, text: "  nextjs-frontend:", type: "plain" },
      { num: 4, text: "    build: { context: ., dockerfile: Dockerfile }", type: "string" },
      { num: 5, text: "    ports: ['3000:3000']", type: "string" },
      { num: 6, text: "    environment: [NODE_ENV=production]", type: "string" },
      { num: 7, text: "  python-django-api:", type: "plain" },
      { num: 8, text: "    image: abdulqadeer/api-gateway:v2.4", type: "string" },
      { num: 9, text: "    deploy: { replicas: 4, rollback: true }", type: "keyword" },
      { num: 10, text: "  redis-cache:", type: "plain" },
      { num: 11, text: "    image: redis:alpine", type: "string" },
      { num: 12, text: "    ports: ['6379:6379']", type: "string" },
      { num: 13, text: "    restart: always # 🛡️ High Availability", type: "comment" },
    ]
  },
  {
    id: "cicd",
    name: "azure-ci-cd.yaml",
    icon: "☁️",
    badge: "CI/CD Pipeline",
    codeLines: [
      { num: 1, text: "name: Azure Kubernetes CI/CD Pipeline", type: "comment" },
      { num: 2, text: "trigger: [ main ]", type: "keyword" },
      { num: 3, text: "stages:", type: "func" },
      { num: 4, text: "- stage: TestAndBuild", type: "plain" },
      { num: 5, text: "  jobs:", type: "plain" },
      { num: 6, text: "  - job: DockerBuildAndScan", type: "string" },
      { num: 7, text: "    steps: [ run: npm test && docker build ]", type: "string" },
      { num: 8, text: "- stage: DeployProduction", type: "plain" },
      { num: 9, text: "  jobs:", type: "plain" },
      { num: 10, text: "  - job: KubernetesRollout", type: "string" },
      { num: 11, text: "    steps:", type: "plain" },
      { num: 12, text: "    - run: kubectl rollout restart deploy/aks", type: "keyword" },
      { num: 13, text: "    # 🚀 Zero-Downtime Deployment Successful", type: "comment" },
    ]
  },
  {
    id: "backend",
    name: "server.py",
    icon: "🐍",
    badge: "Python & Supabase",
    codeLines: [
      { num: 1, text: "from fastapi import FastAPI, Depends", type: "keyword" },
      { num: 2, text: "from supabase import create_client", type: "keyword" },
      { num: 3, text: "import redis, os", type: "keyword" },
      { num: 4, text: "", type: "plain" },
      { num: 5, text: "app = FastAPI(title='Enterprise Production API')", type: "func" },
      { num: 6, text: "cache = redis.Redis(host='localhost', port=6379)", type: "plain" },
      { num: 7, text: "", type: "plain" },
      { num: 8, text: "@app.get('/api/health')", type: "keyword" },
      { num: 9, text: "async def health_check():", type: "func" },
      { num: 10, text: "    return {", type: "plain" },
      { num: 11, text: "        'lead_architect': 'Abdul Qadeer',", type: "string" },
      { num: 12, text: "        'response_time': '< 25ms', 'status': 'Healthy'", type: "string" },
      { num: 13, text: "    }", type: "plain" },
    ]
  }
];

const Home = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [bubbles, setBubbles] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [copiedCode, setCopiedCode] = useState(false);
  const typingSpeed = 90;
  const deletingSpeed = 45;
  const delayBeforeDeleting = 1200;

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-out-quad', once: true });

    // Create floating tech particle nodes
    const bubbleArray = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      size: Math.random() * 35 + 15,
      x: Math.random() * 95,
      y: Math.random() * 95,
      speed: Math.random() * 4 + 2,
      delay: Math.random() * 5,
      shape: Math.random() > 0.5 ? 'circle' : 'blob',
      opacity: Math.random() * 0.25 + 0.1,
      color: `hsla(${Math.random() * 70 + 170}, 100%, 65%, ${Math.random() * 0.25 + 0.1})`
    }));
    setBubbles(bubbleArray);
  }, []);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    if (!isDeleting && displayedText.length < currentRole.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayedText.length > 0) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));
      }, deletingSpeed);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && displayedText.length === currentRole.length) {
      setTimeout(() => setIsDeleting(true), delayBeforeDeleting);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }
  }, [displayedText, isDeleting, currentRoleIndex]);

  const handleCopyCode = () => {
    const currentCode = ideTabs[activeTab].codeLines.map((l) => l.text).join("\n");
    navigator.clipboard.writeText(currentCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <header className="home-section" id="home">
      {/* Background Animated Tech Bubbles */}
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className={`bubble ${bubble.shape}`}
          style={{
            '--size': `${bubble.size}px`,
            '--x': `${bubble.x}%`,
            '--y': `${bubble.y}%`,
            '--delay': `${bubble.delay}s`,
            '--duration': `${bubble.speed}s`,
            '--opacity': bubble.opacity,
            '--color': bubble.color
          }}
        />
      ))}

      <Container className="home-container">
        <div className="home-content align-items-center">
          {/* Text Section */}
          <section className="text-section" data-aos="fade-right">
            {/* Live Recruiter & Client Availability Badge */}
            <div className="hero-status-pill">
              <span className="status-live-dot"></span>
              <span className="status-live-text">Available for Projects & Contracts</span>
              <span className="status-divider">•</span>
              <span className="status-time">PKT (GMT+5)</span>
              <span className="status-badge-fast">⚡ Response &lt; 24h</span>
            </div>

            <h1 className="greeting">
              Hi, I'm <span className="highlight">Abdul Qadeer</span>
            </h1>

            <h2 className="role">
              <span className="role-text">{displayedText}</span>
              <span className="cursor">|</span>
            </h2>

            <p className="description">
              Passionate <strong>Full Stack Web & Mobile Developer</strong> and <strong>DevOps Engineer</strong> building scalable, resilient, and high-performance digital products. Experienced across modern frontend frameworks like <strong>React & Next.js</strong>, mobile apps with <strong>React Native</strong>, robust backend architectures in <strong>Python (Django & Flask)</strong>, and automated cloud deployments with <strong>Docker, Kubernetes, CI/CD pipelines, and Microsoft Azure</strong>.
            </p>

            {/* Quick Skills Badges for recruiters */}
            <div className="hero-skills-pills">
              <span className="skill-pill">React & Next.js</span>
              <span className="skill-pill">Python, Django & Flask</span>
              <span className="skill-pill">Supabase, Postgres & MySQL</span>
              <span className="skill-pill">Docker & Kubernetes</span>
              <span className="skill-pill">Microsoft Azure & CI/CD</span>
              <span className="skill-pill">React Native (iOS/Android)</span>
            </div>

            {/* Social Links */}
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/qadeer-suleman-8707b6296" target="_blank" rel="noopener noreferrer" className="social-icon" data-cursor="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://github.com/qadeersuleman/" target="_blank" rel="noopener noreferrer" className="social-icon" data-cursor="GitHub">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://wa.me/923023466105?text=Hi Abdul Qadeer, I'm interested in discussing a project!" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp" data-cursor="WhatsApp">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a href="https://www.instagram.com/qadeer_sulemann/" target="_blank" rel="noopener noreferrer" className="social-icon" data-cursor="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.facebook.com/abdulqadeer.mahar.334" target="_blank" rel="noopener noreferrer" className="social-icon" data-cursor="Facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>

            {/* Action Buttons */}
            <div className="action-buttons">
              <a
                href={`${process.env.PUBLIC_URL}/Qadeer-Resume.pdf`}
                download="Abdul_Qadeer_Resume.pdf"
                className="primary-btn pulse text-decoration-none"
                data-cursor="Download"
              >
                <FontAwesomeIcon icon={faDownload} className="me-2" /> Download Resume
              </a>
              <a
                href="https://wa.me/923023466105?text=Hi Abdul Qadeer, I saw your portfolio and would like to discuss a project or role!"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-btn text-decoration-none"
                data-cursor="Hire"
              >
                <FontAwesomeIcon icon={faPaperPlane} className="me-2" /> Hire Me Now
              </a>
            </div>
          </section>

          {/* Right Section: Interactive Developer & Cloud IDE Window */}
          <div className="hero-ide-section" data-aos="fade-left">
            <div className="hero-ide-wrapper">
              {/* Floating Orbit Tech Pills */}
              <div className="orbit-pill op1">Next.js 14</div>
              <div className="orbit-pill op2">Azure AKS</div>
              <div className="orbit-pill op3">Python / Django</div>
              <div className="orbit-pill op4">Supabase & Postgres</div>
              <div className="orbit-pill op5">Docker & K8s</div>

              <div className="hero-ide-window" data-cursor="IDE">
                {/* IDE Window Top Bar */}
                <div className="ide-top-bar d-flex align-items-center justify-content-between">
                  <div className="ide-window-controls d-flex align-items-center gap-2">
                    <span className="dot dot-close"></span>
                    <span className="dot dot-minimize"></span>
                    <span className="dot dot-maximize"></span>
                    <span className="ide-window-title ms-2">
                      <FontAwesomeIcon icon={faTerminal} className="me-1 text-info" />
                      abdul-qadeer@production-aks
                    </span>
                  </div>
                  <button
                    className="ide-copy-btn"
                    onClick={handleCopyCode}
                    title="Copy Snippet"
                    data-cursor="Copy"
                  >
                    <FontAwesomeIcon icon={copiedCode ? faCheck : faCopy} className="me-1" />
                    <span>{copiedCode ? "Copied!" : "Copy"}</span>
                  </button>
                </div>

                {/* IDE Tab Switcher */}
                <div className="ide-tabs-bar d-flex">
                  {ideTabs.map((tab, idx) => (
                    <button
                      key={tab.id}
                      className={`ide-tab-btn ${activeTab === idx ? "active" : ""}`}
                      onClick={() => setActiveTab(idx)}
                      data-cursor={tab.name}
                    >
                      <span className="tab-icon me-1">{tab.icon}</span>
                      <span className="tab-name">{tab.name}</span>
                    </button>
                  ))}
                </div>

                {/* IDE Code View Area */}
                <div className="ide-code-container">
                  <div className="code-badge-pill">{ideTabs[activeTab].badge}</div>
                  <pre className="code-pre">
                    <code>
                      {ideTabs[activeTab].codeLines.map((line, lIdx) => (
                        <div key={lIdx} className="code-line">
                          <span className="line-num">{line.num}</span>
                          <span className={`line-content code-${line.type}`}>
                            {line.text}
                          </span>
                        </div>
                      ))}
                    </code>
                  </pre>
                </div>

                {/* IDE Bottom Live Health & Deployment Bar */}
                <div className="ide-bottom-bar d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-2">
                    <span className="cluster-health-dot"></span>
                    <span className="cluster-label">Azure AKS: 8 Nodes Ready</span>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <span className="metric-chip">⚡ 22ms Latency</span>
                    <span className="metric-chip live">🚀 CI/CD: 100% Passed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* High-Impact Recruiter Stats Counter Row */}
        <Row className="hero-stats-row g-4 mt-5" data-aos="fade-up">
          <Col md={3} sm={6} xs={6}>
            <div className="stat-card">
              <div className="stat-icon"><FontAwesomeIcon icon={faLaptopCode} /></div>
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
          </Col>
          <Col md={3} sm={6} xs={6}>
            <div className="stat-card">
              <div className="stat-icon"><FontAwesomeIcon icon={faAward} /></div>
              <div className="stat-number">3.80</div>
              <div className="stat-label">BSCS Honors CGPA</div>
            </div>
          </Col>
          <Col md={3} sm={6} xs={6}>
            <div className="stat-card">
              <div className="stat-icon"><FontAwesomeIcon icon={faCode} /></div>
              <div className="stat-number">3+ Yrs</div>
              <div className="stat-label">Full Stack & DevOps</div>
            </div>
          </Col>
          <Col md={3} sm={6} xs={6}>
            <div className="stat-card">
              <div className="stat-icon"><FontAwesomeIcon icon={faCheckCircle} /></div>
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Home;