import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faCopy,
  faCheck,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faGithub,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/css/Contact.css";

const ContactUs = () => {
  React.useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-out-quad", once: true });
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const primaryEmail = "qadeersaleman@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(primaryEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="contact-section">
      <Container>
        <div className="section-header text-center" data-aos="fade-down">
          <span className="section-badge">Let's Connect</span>
          <h2 className="section-title mt-2">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Have a project, full-time role, or contract in mind? I'm available for immediate discussion!
          </p>
          <div className="divider mx-auto"></div>
        </div>

        <Row className="contact-content g-4 mt-3">
          {/* Contact Form */}
          <Col lg={7} className="contact-form-col" data-aos="fade-right">
            <div className="contact-card-box">
              <h3 className="box-title mb-4">Send a Direct Message</h3>

              {formSubmitted ? (
                <div className="success-toast text-center p-4">
                  <div className="toast-icon-check mb-3">
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <h4 className="text-white">Message Delivered Successfully!</h4>
                  <p className="text-muted">Thank you for reaching out. Abdul Qadeer will get back to you within 24 hours.</p>
                </div>
              ) : (
                <Form onSubmit={handleSubmit} className="contact-form">
                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="name" className="form-group mb-3">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="e.g. Sarah Jenkins"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="custom-input"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="email" className="form-group mb-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="sarah@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="custom-input"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group controlId="subject" className="form-group mb-3">
                    <Form.Label>Subject / Opportunity</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      placeholder="e.g. React Native / Mobile Lead Role"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="custom-input"
                    />
                  </Form.Group>

                  <Form.Group controlId="message" className="form-group mb-4">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      placeholder="Write your project requirements or position details..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="custom-input"
                    />
                  </Form.Group>

                  <Button type="submit" className="submit-btn w-100" data-cursor="Send">
                    <FontAwesomeIcon icon={faPaperPlane} className="me-2" /> Send Message
                  </Button>
                </Form>
              )}
            </div>
          </Col>

          {/* Contact Info Side Card */}
          <Col lg={5} className="contact-info-col" data-aos="fade-left">
            <div className="contact-info-card">
              <h3 className="info-title">Contact Channels</h3>
              <p className="info-subtext">Feel free to copy email or chat directly via WhatsApp for quick response.</p>
              
              {/* Email Item */}
              <div className="info-item d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <div className="info-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div className="info-content">
                    <h4>Email Address</h4>
                    <a href={`mailto:${primaryEmail}`}>{primaryEmail}</a>
                  </div>
                </div>
                <button
                  className="copy-btn"
                  onClick={handleCopyEmail}
                  title="Copy Email to Clipboard"
                >
                  <FontAwesomeIcon icon={copiedEmail ? faCheck : faCopy} />
                  {copiedEmail && <span className="copy-tooltip">Copied!</span>}
                </button>
              </div>

              {/* Phone Item */}
              <div className="info-item d-flex align-items-center gap-3">
                <div className="info-icon">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className="info-content">
                  <h4>Phone / Phone Call</h4>
                  <a href="tel:+923023466105">+92 302 3466105</a>
                </div>
              </div>

              {/* WhatsApp Quick Action */}
              <div className="info-item whatsapp-highlight d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <div className="info-icon whatsapp">
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </div>
                  <div className="info-content">
                    <h4>WhatsApp Chat</h4>
                    <p className="mb-0 text-success font-weight-bold">Instant Response</p>
                  </div>
                </div>
                <a
                  href="https://wa.me/923023466105?text=Hi Abdul Qadeer, I'm interested in discussing a project or role!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-success rounded-pill px-3"
                  data-cursor="WhatsApp"
                >
                  Chat Now
                </a>
              </div>

              {/* Location Item */}
              <div className="info-item d-flex align-items-center gap-3">
                <div className="info-icon">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div className="info-content">
                  <h4>Location</h4>
                  <p className="mb-0">Ghotki, Sindh, Pakistan (Open for Remote & Relocation)</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="social-links mt-4">
                <h4>Social Profiles</h4>
                <div className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/qadeer-suleman-8707b6296"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    data-cursor="LinkedIn"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a
                    href="https://github.com/qadeersuleman/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    data-cursor="GitHub"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a
                    href="https://www.facebook.com/abdulqadeer.mahar.334"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    data-cursor="Facebook"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a
                    href="https://www.instagram.com/qadeer_sulemann/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    data-cursor="Instagram"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
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