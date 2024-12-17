import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ContactUs = () => {
  return (
    <section id="contact" className="contact section">
      {/* Section Title */}
      <Container className="section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>
          Reach out to us for inquiries, assistance, or any support you need
          today
        </p>
      </Container>

      <Container data-aos="fade-up" data-aos-delay="100">
        <div className="info-wrap" data-aos="fade-up" data-aos-delay="200">
          <Row className="gy-5">
            {/* Address */}
            <Col lg={4}>
              <div className="info-item d-flex align-items-center">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>UnderBypass Ghotki, Sindh, Pakistan</p>
                </div>
              </div>
            </Col>

            {/* Call Us */}
            <Col lg={4}>
              <div className="info-item d-flex align-items-center">
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Us</h3>
                  <p>+92302-3466105</p>
                </div>
              </div>
            </Col>

            {/* Email Us */}
            <Col lg={4}>
              <div className="info-item d-flex align-items-center">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Us</h3>
                  <p>abqadeer@gmail.com</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* Contact Form */}
        <Form
          action="forms/contact.php"
          method="post"
          className="php-email-form"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Row className="gy-4">
            <Col md={6}>
              <Form.Group controlId="formName">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="formEmail">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </Form.Group>
            </Col>

            <Col md={12}>
              <Form.Group controlId="formSubject">
                <Form.Control
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </Form.Group>
            </Col>

            <Col md={12}>
              <Form.Group controlId="formMessage">
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={6}
                  placeholder="Message"
                  required
                />
              </Form.Group>
            </Col>

            <Col md={12} className="text-center">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">
                Your message has been sent. Thank you!
              </div>

              <Button type="submit" className="btn-primary">
                Send Message
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </section>
  );
};

export default ContactUs;
