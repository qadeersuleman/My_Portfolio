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
import "../assets/css/Contact.css"; // Import CSS file

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
    <div id="contact">
      <Container className="contact-container">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-subtitle">
          Let's work together! Feel free to reach out.
        </p>

        <Row>
          {/* Contact Form */}
          <Col md={6} data-aos="fade-right">
            <Form onSubmit={handleSubmit} className="contact-form">
              <Form.Group controlId="name" className="text-left mt-2">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="email" className="text-left mt-2">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="text-left mt-2" controlId="message">
                <Form.Label>Message:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button
                type="submit"
                className="neon-button my-3 px-5"
                style={{ backgroundColor: "#00e1ff", color: "black" }}
              >
                Send Message
              </Button>
            </Form>
          </Col>

          {/* Contact Info */}
          <Col
            md={6}
            data-aos="fade-left"
            style={{ marginTop: "30px", paddingLeft: "50px" }}
          >
            <div className="contact-info">
              <p style={{ fontSize: "20px" }}>
                <FontAwesomeIcon icon={faEnvelope} className="icon" />{" "}
                abdulqadeermah786@gmail.com
              </p>
              <p style={{ fontSize: "20px" }}>
                <FontAwesomeIcon icon={faPhone} className="icon" /> +92 302
                3466105
              </p>
              <p style={{ fontSize: "20px" }}>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />{" "}
                Karachi, Sindh, PAK
              </p>

              {/* Social Media Links */}
              <div className="social-icons">
                <a
                  href="https://www.facebook.com/abdulqadeer.mahar.334"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  href="https://www.linkedin.com/in/qadeer-suleman-8707b6296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href="https://github.com/qadeersuleman/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
