import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";

const Pricing = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const pricingOptions = [
    { title: "Web Development", price: "$200.00" },
    { title: "SEO Optimization", price: "$200.00" },
    { title: "Application Development", price: "$350.00" },
    { title: "Desktop Application Development", price: "$300.00" },
    { title: "Graphic Designing", price: "$200.00" },
    { title: "AI Chatbot Devrlopment", price: "$150.00" },
  ];

  const socialMediaLinks = {
    facebook: "https://facebook.com/yourprofile",
    instagram: "https://instagram.com/yourprofile",
    whatsapp: "https://wa.me/yourphonenumber",
  };

  return (
    <section id="pricing" className="pricing section">
      {/* Section Title */}
      <Container className="section-title" data-aos="fade-up">
        <h2>Pricing</h2>
        <p>
          Explore our competitive pricing for professional services tailored to
          your needs.
        </p>
      </Container>

      <Container data-aos="fade-up" data-aos-delay="100">
        <Row className="gy-4 gx-lg-5">
          {pricingOptions.map((option, index) => (
            <Col lg={6} key={index}>
              <div
                className="pricing-item d-flex justify-content-between"
                onClick={handleShow}
                style={{ cursor: "pointer" }}
              >
                <h3>{option.title}</h3>
                <h4>{option.price}</h4>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Social Media Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-primary">Get in Touch</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-center mb-5">
            You can Deal your product with Us Through Social Media.
          </p>
          <div className="d-flex justify-content-around m-5">
            <a
              href={socialMediaLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon rounded-circle border border-dark d-flex align-items-center justify-content-center"
              style={{
                width: "50px",
                height: "50px",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <i className="bi bi-facebook" style={{ fontSize: "1.5rem" }}></i>
            </a>
            <a
              href={socialMediaLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon rounded-circle border border-dark d-flex align-items-center justify-content-center"
              style={{
                width: "50px",
                height: "50px",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <i className="bi bi-instagram" style={{ fontSize: "1.5rem" }}></i>
            </a>
            <a
              href={socialMediaLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon rounded-circle border border-dark d-flex align-items-center justify-content-center"
              style={{
                width: "50px",
                height: "50px",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <i className="bi bi-whatsapp" style={{ fontSize: "1.5rem" }}></i>
            </a>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Pricing;
