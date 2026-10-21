import React, { useEffect, useState, useRef } from "react";
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
import { faDownload, faPaperPlane, faCode, faAward, faCheckCircle, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const roles = [
  "Full Stack Web & Mobile Developer",
  "DevOps Engineer (Docker, K8s, Azure, CI/CD)",
  "Python Backend Architect (Django & Flask)",
  "React & Next.js Specialist",
  "Database & API Architect (Supabase, Postgres, MySQL)",
];

const Home = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [bubbles, setBubbles] = useState([]);
  const videoRef = useRef(null);
  const typingSpeed = 90;
  const deletingSpeed = 45;
  const delayBeforeDeleting = 1200;

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-out-quad', once: true });

    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Autoplay playback:", err);
      });
    }

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
        <div className="home-content">
          {/* Text Section */}
          <section className="text-section" data-aos="fade-right">
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

          {/* Profile Image / Video with Orbiting Tech Badges */}
          <div className="image-section" data-aos="fade-left">
            <div className="profile-frame">
              <div className="orbit-ring">
                <div className="orbit-badge b1">React & Next</div>
                <div className="orbit-badge b2">Python & Django</div>
                <div className="orbit-badge b3">Docker & K8s</div>
                <div className="orbit-badge b4">Azure & Cloud</div>
              </div>
              <video
                ref={videoRef}
                src={`${process.env.PUBLIC_URL}/Walking%20style.mp4`}
                autoPlay
                muted
                playsInline
                controls={false}
                className="profile-pic profile-video"
                data-cursor="Click to Replay"
                onClick={() => {
                  if (videoRef.current) {
                    videoRef.current.currentTime = 0;
                    videoRef.current.play();
                  }
                }}
              />
              <div className="profile-glow"></div>
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