import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported

import "../../CSS/AboutUs.css";

const AboutUs = () => {
  return (
    <section id="about" className="about section">
      <Container data-aos="fade-up" data-aos-delay="100">
        <Row className="gy-4">
          <Col md={6}>
            <Row className="justify-content-between gy-4">
              <Col lg={5}>
                <img
                  src="assets/img/profile-image.jpg"
                  className="img-fluid"
                  alt="Profile"
                />
              </Col>
              <Col lg={7} className="about-info" style={{ textAlign: "left" }}>
                <p>
                  <strong>Name: </strong> <span>Qadeer Saleman</span>
                </p>
                <p>
                  <strong>Profile: </strong> <span>Full Stack Developer</span>
                </p>
                <p>
                  <strong>Email: </strong> <span>abqadeer74@email.com</span>
                </p>
                <p>
                  <strong>Phone: </strong> <span>+92302-3466105</span>
                </p>
              </Col>
            </Row>

            <div
              className="skills-content skills-animation"
              style={{ textAlign: "left" }}
            >
              <h5>Skills</h5>

              <div className="progress">
                <span className="skill" style={{ fontWeight: "700" }}>
                  <span>Full Stack Website Development</span>{" "}
                  <i className="val">90%</i>
                </span>
                <ProgressBar now={90} className="custom-progress-bar" />
              </div>

              <div className="progress">
                <span className="skill">
                  <span>PYTHON</span> <i className="val">85%</i>
                </span>
                <ProgressBar now={85} />
              </div>

              <div className="progress">
                <span className="skill">
                  <span>Application Development</span>{" "}
                  <i className="val">80%</i>
                </span>
                <ProgressBar now={80} />
              </div>

              <div className="progress">
                <span className="skill">
                  <span>Graphic Designing</span> <i className="val">55%</i>
                </span>
                <ProgressBar now={55} />
              </div>
            </div>
          </Col>

          <Col md={6}>
            <div className="about-me" style={{ textAlign: "left" }}>
              <h4>About Me</h4>
              <p>
                I’m <b>Qadeer Saleman</b> a 3rd-year Computer Science student
                passionate about creating impactful software solutions. With
                expertise in Full Stack Development and Application Development,
                I bring together the power of Python, Django, React, and MySQL
                to develop user-friendly, dynamic applications.
              </p>
              <p>
                My projects showcase my skills in frontend design and backend
                logic, combining creativity and functionality. I specialize in
                web development, crafting responsive interfaces and efficient
                backend systems.
              </p>
              <p>
                I strive to turn ideas into reality through code, ensuring
                seamless user experiences. Let’s build something incredible
                together!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
