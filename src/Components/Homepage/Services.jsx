import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
// import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: "bi bi-activity",
      title: "Website Development",
      description:
        "Create responsive and user-friendly websites tailored to your needs, ensuring an optimal user experience across devices.",
      delay: 100,
    },
    {
      id: 2,
      icon: "bi bi-broadcast",
      title: "SEO Optimization",
      description:
        "Enhance your website's visibility on search engines through effective SEO strategies, driving organic traffic and improving rankings.",
      delay: 200,
    },
    {
      id: 3,
      icon: "bi bi-easel",
      title: "Application Development",
      description:
        "Develop custom applications that meet your business requirements, from mobile apps to desktop solutions, ensuring seamless functionality.",
      delay: 300,
    },
    {
      id: 4,
      icon: "bi bi-bounding-box-circles",
      title: "WordPress Development",
      description:
        "Build and customize WordPress websites, offering flexible solutions for blogs, e-commerce, and business websites.",
      delay: 400,
    },
    {
      id: 5,
      icon: "bi bi-calendar4-week",
      title: "Desktop Application",
      description:
        "Design and develop desktop applications with intuitive interfaces and robust functionality tailored for various operating systems.",
      delay: 500,
    },
    {
      id: 6,
      icon: "bi bi-chat-square-text",
      title: "AI Chatbots",
      description:
        "Implement AI chatbots to enhance customer interaction, providing instant support and engagement on your platforms.",
      delay: 600,
    },
  ];

  return (
    <section id="services" className="services section">
      <Container className="section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>Delivering exceptional solutions tailored to your needs, ensuring a seamless experience from start to finish with our dedicated team.</p>
      </Container>

      <Container style={{ textAlign: "left" }}>
        <Row className="gy-4">
          {services.map((service) => (
            <Col
              key={service.id}
              lg={4}
              md={6}
              data-aos="fade-up"
              data-aos-delay={service.delay}
            >
              <div className="service-item position-relative">
                <div className="icon">
                  <i className={service.icon}></i>
                </div>
                {/* <a href="#" >
                onClick={handleAction}
                  
                </a> */}
                <button
                  style={{
                    background: "none",
                    border: "none",
                    color: "blue",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                  className="stretched-link"
                >
                  <h3 style={{ textAlign: "left" }}>{service.title}</h3>
                </button>
                <p>{service.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
