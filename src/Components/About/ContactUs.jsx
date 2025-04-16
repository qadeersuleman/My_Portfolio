import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "../assets/css/Contact.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message Sent Successfully!");
  };

  return (
    <section id="contact" className="contact-section">
      <Container>
        <div className="section-header">
          <h2 className="section-title">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind or want to collaborate? Drop me a message!
          </p>
          <div className="divider"></div>
        </div>

        <Row className="contact-content">
          {/* Contact Form */}
          <Col lg={6} className="contact-form-col">
            <Form onSubmit={handleSubmit} className="contact-form">
              <Form.Group controlId="name" className="form-group">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="email" className="form-group">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="message" className="form-group">
                <Form.Label>Your Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button type="submit" className="submit-btn">
                Send Message
                <span className="btn-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
              </Button>
            </Form>
          </Col>

          {/* Contact Info */}
          <Col lg={6} className="contact-info-col">
            <div className="contact-info-card">
              <h3 className="info-title">Contact Information</h3>
              
              <div className="info-item">
                <div className="info-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="info-content">
                  <h4>Email</h4>
                  <a href="mailto:abdulqadeermah786@gmail.com">abdulqadeermah786@gmail.com</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className="info-content">
                  <h4>Phone</h4>
                  <a href="tel:+923023466105">+92 302 3466105</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div className="info-content">
                  <h4>Location</h4>
                  <p>Ghotki, Sindh, Pakistan</p>
                </div>
              </div>

              <div className="social-links">
                <h4>Connect With Me</h4>
                <div className="social-icons">
                  <a
                    href="https://www.facebook.com/abdulqadeer.mahar.334"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/qadeer-suleman-8707b6296"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a
                    href="https://github.com/qadeersuleman/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;