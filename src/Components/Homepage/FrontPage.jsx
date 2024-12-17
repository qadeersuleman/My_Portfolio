import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";

const FrontPage = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    // Initialize AOS
    AOS.init();

    // Initialize Typed.js
    const typed = new Typed(typedElement.current, {
      strings: [
        "Web Developer",
        "Application Developer",
        "Freelancer",
        "Python Developer",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1000,
      loop: true,
    });

    // Cleanup Typed.js instance to prevent memory leaks
    return () => typed.destroy();
  }, []);

  return (
    <section id="hero" className="hero section">
     

      <Container
        className="d-flex flex-column align-items-center justify-content-center text-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h2>I am Qadeer Saleman</h2>
        <p>
          <span ref={typedElement} style={{ fontWeight: "bold" }}></span>
        </p>
      </Container>
    </section>
  );
};

export default FrontPage;
