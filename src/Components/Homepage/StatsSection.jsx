import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const StatsSection = () => {
  // Initialize PureCounter when the component mounts

  return (
    <section id="stats" className="stats section accent-background">
      <img src="assets/img/stats-bg.jpg" alt="" data-aos="fade-in" />

      <Container
        className="position-relative"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <Row className="gy-4">
          <Col lg={3} md={6}>
            <div className="stats-item text-center w-100 h-100">
              <span
                data-purecounter-start="0"
                data-purecounter-end="232"
                data-purecounter-duration="0"
                className="purecounter"
              >
                12
              </span>
              <p>Clients</p>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <div className="stats-item text-center w-100 h-100">
              <span
                data-purecounter-start="0"
                data-purecounter-end="521"
                data-purecounter-duration="0"
                className="purecounter"
              >
                20
              </span>
              <p>Projects</p>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <div className="stats-item text-center w-100 h-100">
              <span
                data-purecounter-start="0"
                data-purecounter-end="1453"
                data-purecounter-duration="0"
                className="purecounter"
              >
                230
              </span>
              <p>Hours Of Support</p>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <div className="stats-item text-center w-100 h-100">
              <span
                data-purecounter-start="0"
                data-purecounter-end="32"
                data-purecounter-duration="0"
                className="purecounter"
              >
                $750
              </span>
              <p>Earnings</p>
            </div>
          </Col>
          
        </Row>
      </Container>
    </section>
  );
};

export default StatsSection;
