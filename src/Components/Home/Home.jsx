import React, { useEffect, useState } from "react";
import "../assets/css/Home.css";
import profileImage from "../assets/images/profile.png";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const roles = [
  "Full Stack Developer",
  "Web Developer",
  "AI, ML Developer",
  "Application Developer",
  "WordPress Developer",
];

const Home = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [bubbles, setBubbles] = useState([]);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBeforeDeleting = 1000;




  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-out-quad' });
    
    // Create floating bubbles with different shapes
    const bubbleArray = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      size: Math.random() * 40 + 20,
      x: Math.random() * 100,
      y: Math.random() * 100,
      speed: Math.random() * 3 + 1,
      delay: Math.random() * 5,
      shape: Math.random() > 0.5 ? 'circle' : 'blob',
      opacity: Math.random() * 0.3 + 0.1,
      color: `hsla(${Math.random() * 60 + 180}, 100%, 70%, ${Math.random() * 0.3 + 0.1})`
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
      {/* Animated Bubbles */}
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
          {/* Profile Image - Comes First on Mobile */}
          <div className="image-section" data-aos="fade-down">
            <div className="profile-frame">
              <img src={profileImage} alt="Qadeer Suleman" className="profile-pic" />
              <div className="profile-glow"></div>
              <div className="profile-dots">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="profile-dot" style={{
                    '--angle': `${i * 30}deg`,
                    '--delay': `${i * 0.1}s`
                  }} />
                ))}
              </div>
            </div>
          </div>

          {/* Text Section */}
          <section className="text-section" data-aos="fade-up">
            <h2 className="greeting">
              Hi, I'm <span className="highlight">Qadeer Suleman</span>
            </h2>
            <h3 className="role">
              <span className="role-text">{displayedText}</span>
              <span className="cursor">|</span>
            </h3>
            <p className="description">
              I specialize in creating seamless digital experiences by combining 
              visually appealing front-end designs with robust back-end solutions. 
              With expertise in modern web technologies, I transform ideas into 
              functional, user-friendly applications.
            </p>

            {/* Social Icons */}
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/qadeer-suleman-8707b6296" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://github.com/qadeersuleman/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.instagram.com/qadeer_sulemann/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.facebook.com/abdulqadeer.mahar.334" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>

            {/* Buttons */}
            <div className="action-buttons">
              <button className="primary-btn pulse" >Downlaod CV</button>
              <button className="secondary-btn">Hire Me</button>
            </div>
          </section>
        </div>
      </Container>
    </header>
  );
};

export default Home;