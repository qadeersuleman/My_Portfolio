import React, { useEffect, useState } from "react";
import "../assets/css/Home.css"; // Import external CSS
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
import { Link } from "react-router-dom";

const roles = [
  "Full Stack Developer",
  "Web Developer",
  "Application Developer",
  "WordPress Developer",
];

const Home = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100; // Speed of typing (milliseconds)
  const deletingSpeed = 50; // Speed of deleting (milliseconds)
  const delayBeforeDeleting = 1000; // Delay before starting to delete

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    if (!isDeleting && displayedText.length < currentRole.length) {
      // Typing effect
      const timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else if (isDeleting && displayedText.length > 0) {
      // Deleting effect
      const timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));
      }, deletingSpeed);

      return () => clearTimeout(timeout);
    } else if (!isDeleting && displayedText.length === currentRole.length) {
      // Pause before deleting
      setTimeout(() => setIsDeleting(true), delayBeforeDeleting);
    } else if (isDeleting && displayedText.length === 0) {
      // Move to the next word
      setIsDeleting(false);
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <header className="header" id="home">
      <Container className="header-content">
        <section className="text-section" data-aos="fade-right">
          <h2>
            Hi, It's <span className="highlight">Qadeer Saleman</span>
          </h2>
          <h3>
            I'm a <span className="highlight">{displayedText}</span>
            <span className="cursor">|</span>
          </h3>
          <p>
            I specialize in creating seamless and engaging digital experiences
            by combining visually appealing front-end designs with robust and
            efficient back-end solutions. With a deep understanding of modern
            web development technologies and frameworks, I transform ideas into
            functional, user-friendly applications that deliver value and
            innovation.
          </p>

          {/* Social Icons */}
          <div className="social-icons">
            <Link
              to="https://www.linkedin.com/in/qadeer-suleman-8707b6296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link
              to="https://github.com/qadeersuleman/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link
              to="https://www.instagram.com/qadeer_sulemann/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link
              to="https://www.facebook.com/abdulqadeer.mahar.334"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
          </div>

          {/* Buttons */}
          <div className="buttons">
            <button className="hire-me px-5">Hire Me</button>
            <button className="contact px-5">Contact</button>
          </div>
        </section>

        {/* Profile Image */}
        <div className="image-section" data-aos="fade-left">
          <img src={profileImage} alt="Profile" className="profile-pic" />
        </div>
      </Container>
    </header>
  );
};

export default Home;
