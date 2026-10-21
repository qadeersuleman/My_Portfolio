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
  "React Native Developer (iOS & Android)",
  "Full Stack Web & Mobile Specialist",
  "Paystack & Stripe Payment Integrator",
  "NestJS & Node.js API Architect",
  "AI & Camera Logic Innovator",
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
            <div className="hero-badge">
              <span className="badge-dot"></span>
              <span>Available for Full-time Roles & Contracts</span>
            </div>

            <h1 className="greeting">
              Hi, I'm <span className="highlight">Qadeer Suleman</span>
            </h1>

            <h2 className="role">
              <span className="role-text">{displayedText}</span>
              <span className="cursor">|</span>
            </h2>

            <p className="description">
              Passionate <strong>Software Engineer</strong> specializing in cross-platform mobile apps (iOS & Android) and high-throughput web applications. Expert in <strong>React, React Native, Node.js, Express & NestJS</strong> with deep integration of secure payment gateways (Stripe/Paystack), Google Maps, AI models, and camera pipelines.
            </p>

            {/* Quick Skills Badges for recruiters */}
            <div className="hero-skills-pills">
              <span className="skill-pill">React Native (iOS/Android)</span>
              <span className="skill-pill">Node / NestJS</span>
              <span className="skill-pill">MongoDB & Postgres</span>
              <span className="skill-pill">Paystack & Stripe</span>
            </div>

            {/* Social Links */}
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/qadeer-suleman-8707b6296" target="_blank" rel="noopener noreferrer" className="social-icon" data-cursor="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://github.com/qadeersuleman/" target="_blank" rel="noopener noreferrer" className="social-icon" data-cursor="GitHub">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://wa.me/923023466105?text=Hi Qadeer, I'm interested in hiring you for a project!" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp" data-cursor="WhatsApp">
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
                download="Qadeer_Suleman_CV.pdf"
                className="primary-btn pulse text-decoration-none"
                data-cursor="Download"
              >
                <FontAwesomeIcon icon={faDownload} className="me-2" /> Download Resume
              </a>
              <a
                href="https://wa.me/923023466105?text=Hi Qadeer, I saw your portfolio and would like to discuss an opportunity!"
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
                <div className="orbit-badge b1">React Native</div>
                <div className="orbit-badge b2">NestJS</div>
                <div className="orbit-badge b3">iOS & Android</div>
                <div className="orbit-badge b4">AI / Stripe</div>
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
              <div className="stat-label">Full Stack & Mobile</div>
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