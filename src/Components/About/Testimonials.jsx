import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faStar, faUserCheck, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/css/Testimonials.css";

const testimonialsData = [
  {
    name: "Tariq Al-Mansoor",
    role: "VP of Engineering, CloudCore Solutions",
    location: "Dubai, United Arab Emirates",
    countryFlag: "🇦🇪",
    project: "Azure Cloud Migration & Kubernetes Setup",
    rating: 5,
    text: "Abdul Qadeer spearheaded our cloud infrastructure overhaul on Microsoft Azure with remarkable precision. He containerized our backend services with Docker, configured multi-node Kubernetes clusters, and automated our entire CI/CD delivery pipeline. Zero downtime and world-class architecture!",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
  },
  {
    name: "Marcus Tremblay",
    role: "Chief Product Officer, NorthByte Digital",
    location: "Toronto, Canada",
    countryFlag: "🇨🇦",
    project: "Next.js 14 SaaS Platform & Supabase",
    rating: 5,
    text: "Abdul Qadeer built our SaaS portal using Next.js, React, and Supabase with PostgreSQL. The database queries are blazingly fast, the authentication with Row-Level Security is rock solid, and his clean code standards made scaling straightforward. An extraordinary full-stack developer.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
  },
  {
    name: "David Vance",
    role: "Founder & CTO, Apex Velocity Labs",
    location: "San Francisco, USA",
    countryFlag: "🇺🇸",
    project: "Python Django Backend & React Native App",
    rating: 5,
    text: "Working with Abdul Qadeer was a game-changer for our startup. He designed our cross-platform React Native mobile app and integrated it seamlessly with a scalable Python Django REST API backend. His deep knowledge of Docker and PostgreSQL performance tuning saved us months.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  },
  {
    name: "Rohan Sharma",
    role: "Principal Architect, NexaCore Tech",
    location: "Bengaluru, India",
    countryFlag: "🇮🇳",
    project: "Flask Microservices & MySQL Cluster",
    rating: 5,
    text: "Abdul Qadeer demonstrated exceptional engineering prowess developing our Python Flask microservices and optimizing complex MySQL database transactions. His automated GitHub Actions CI/CD pipeline and containerization strategy made deployments completely painless.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
  },
  {
    name: "Matteo Rossi",
    role: "Head of Technology, NovaLogic Milano",
    location: "Milan, Italy",
    countryFlag: "🇮🇹",
    project: "Full Stack React Portal & Azure DevOps",
    rating: 5,
    text: "Abdul Qadeer delivered our enterprise client dashboard with highest quality standards. From dynamic React & Next.js user interfaces to Dockerized microservices deployed on Microsoft Azure, his attention to detail, proactive communication, and technical depth are unmatched.",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
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
            Global Social Proof & <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="section-subtitle">
            Feedback from engineering leaders and product founders across the globe
          </p>
          <div className="divider mx-auto"></div>
        </div>

        <Row className="g-4 mt-3 justify-content-center">
          {testimonialsData.map((item, index) => (
            <Col lg={4} md={6} sm={12} key={index} data-aos="fade-up" data-aos-delay={index * 120}>
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
                    <div className="author-location">
                      <span className="me-1">{item.countryFlag}</span>
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="me-1 text-info" />
                      <span>{item.location}</span>
                    </div>
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
