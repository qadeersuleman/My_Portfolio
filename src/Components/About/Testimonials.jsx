import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faStar, faUserCheck } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/css/Testimonials.css";

const testimonialsData = [
  {
    name: "Alex Thornton",
    role: "Product Owner & Founder",
    project: "E-commerce Mobile App (iOS & Android)",
    rating: 5,
    text: "Qadeer is an exceptional React Native engineer. He took our complex Paystack and Stripe checkout requirements and delivered a silky-smooth 60fps mobile application well ahead of schedule.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  },
  {
    name: "Dr. Sarah Jenkins",
    role: "EdTech Program Lead",
    project: "Dreams Virtual Academy",
    rating: 5,
    text: "Working with Qadeer was an absolute pleasure. His attention to detail in offline quiz storage, video lecture streaming, and clean UI architecture blew our team away. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
  },
  {
    name: "Michael Chen",
    role: "Senior Engineering Manager",
    project: "AI Vision & Posture Tracking App",
    rating: 5,
    text: "Qadeer’s ability to combine camera hardware APIs with OpenAI GPT-4 models is top-notch. Clean codebase, clear documentation, and great communication throughout the sprint.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-out-quad", once: true });
  }, []);

  return (
    <section id="testimonials" className="testimonials-section">
      <Container>
        <div className="section-header text-center" data-aos="fade-down">
          <span className="section-badge">Client & Colleague Endorsements</span>
          <h2 className="section-title mt-2">
            Social Proof & <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="section-subtitle">
            What recruiters, engineering leads, and clients say about working with me
          </p>
          <div className="divider mx-auto"></div>
        </div>

        <Row className="g-4 mt-3">
          {testimonialsData.map((item, index) => (
            <Col lg={4} md={6} key={index} data-aos="fade-up" data-aos-delay={index * 150}>
              <div className="testimonial-card" data-cursor="Review">
                <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />

                <div className="rating-stars mb-3">
                  {[...Array(item.rating)].map((_, rIdx) => (
                    <FontAwesomeIcon key={rIdx} icon={faStar} className="star-icon" />
                  ))}
                </div>

                <p className="testimonial-text">"{item.text}"</p>

                <div className="testimonial-author d-flex align-items-center gap-3">
                  <img src={item.avatar} alt={item.name} className="author-avatar" />
                  <div>
                    <h4 className="author-name mb-0">
                      {item.name} <FontAwesomeIcon icon={faUserCheck} className="verified-badge ms-1" />
                    </h4>
                    <span className="author-role">{item.role}</span>
                    <div className="author-project">{item.project}</div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
