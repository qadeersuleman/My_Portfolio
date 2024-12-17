import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Resume = () => {
  return (
    <section id="resume" className="resume section">
      {/* Section Title */}
      <Container className="section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>
          Passionate and dedicated full-stack developer specializing in Python,
          Django, and React.
        </p>
      </Container>

      <Container>
        <Row>
          {/* Left Column - Summary and Education */}
          <Col
            lg={6}
            data-aos="fade-up"
            data-aos-delay="100"
            style={{ textAlign: "left" }}
          >
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4 className="text-dark text-bold">Qadeer Saleeman</h4>
              <p>
                <em>
                  Motivated Full Stack Developer with a strong foundation in
                  Python, Django, React, and application development, creating
                  user-friendly, scalable applications.
                </em>
              </p>
              <ul style={{ textAlign: "left" }}>
                <li>Ghotki, Sindh, Pakistan</li>
                <li>(+92302-3466105)</li>
                <li>abqadeer74@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelor of Science in Computer Science</h4>
              <h5>2022 - Present</h5>
              <p>
                <em>Shah Abdul Latif Univeristy Khairpur</em>
              </p>
              <p>
                Focused on software engineering, data structures, and
                algorithms, building a strong foundation in application
                development and full-stack solutions.
              </p>
            </div>
          </Col>

          {/* Right Column - Professional Experience */}
          <Col
            lg={6}
            data-aos="fade-up"
            data-aos-delay="200"
            style={{ textAlign: "left" }}
          >
            <h3 className="resume-title">Professional Experience</h3>

            <div className="resume-item">
              <h4>Full Stack Developer</h4>
              <h5>2022 - Present</h5>
              <p>
                <em>Freelance, Remote</em>
              </p>
              <ul>
                <li>
                  Developed full-stack web applications using Django and React.
                </li>
                <li>
                  Integrated third-party APIs like Paystack for payment
                  processing.
                </li>
                <li>
                  Created responsive, user-friendly interfaces using React
                  Bootstrap.
                </li>
                <li>
                  Built and deployed scalable backend systems on the Django
                  framework.
                </li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Frontend React Developer </h4>
              <h5>2023 - Present</h5>
              <p>
                <em>Self inited projects</em>
              </p>
              <ul>
                <li>
                  Designed and implemented responsive UI components using
                  React.js.
                </li>
                <li>
                  Collaborated with backend teams to integrate RESTful APIs.
                </li>
                <li>
                  Optimized website performance for faster loading and better
                  SEO.
                </li>
                <li>
                  Improved accessibility and cross-browser compatibility of web
                  applications.
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Resume;
