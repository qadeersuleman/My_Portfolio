import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Faq = () => {
  const [activeFaq, setActiveFaq] = useState(null); // State to track the active FAQ item

  const faqData = [
    {
      id: 1,
      question: "What services do you offer for web development?",
      answer: "We specialize in creating responsive and user-friendly websites, including e-commerce solutions, custom web applications, and CMS-based websites.",
    },
    {
      id: 2,
      question: "How do you optimize websites for search engines?",
      answer: "We perform SEO audits, keyword research, on-page optimization, and create quality backlinks to improve your site's ranking and visibility.",
    },
    {
      id: 3,
      question: "Can you develop mobile applications?",
      answer: "Yes, we develop cross-platform mobile applications tailored to your business needs, ensuring high performance and scalability.",
    },
    {
      id: 4,
      question: "Do you provide ongoing support and maintenance?",
      answer: "Absolutely. We offer comprehensive support, updates, and maintenance services to ensure your website or application remains up-to-date and functional.",
    },
    {
      id: 5,
      question: "What is your process for custom application development?",
      answer: "Our process includes requirement analysis, design, development, testing, deployment, and ongoing support to deliver a tailored solution for your business.",
    },
  ];

  const toggleFaq = (id) => {
    // Toggle the FAQ item: close if active, open otherwise
    setActiveFaq((prevActiveFaq) => (prevActiveFaq === id ? null : id));
  };

  return (
    <section id="faq" className="faq section">
      <Container>
        <Row className="gy-4">
          <Col lg={4} data-aos="fade-up" data-aos-delay="100">
            <div className="content px-xl-5">
              <h3>
                <span>Frequently Asked </span>
                <strong>Questions</strong>
              </h3>
              <p>
                Learn more about the services we offer and how we can help your
                business grow.
              </p>
            </div>
          </Col>

          <Col lg={8} data-aos="fade-up" data-aos-delay="200">
            <div className="faq-container">
              {faqData.map((faq) => (
                <div
                  key={faq.id}
                  className={`faq-item ${
                    activeFaq === faq.id ? "faq-active" : ""
                  }`}
                  onClick={() => toggleFaq(faq.id)}
                >
                  <h3>
                    <span className="num">{faq.id}.</span>
                    <span>{faq.question}</span>
                  </h3>
                  {activeFaq === faq.id && (
                    <div className="faq-content">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                  <i
                    className={`faq-toggle bi ${
                      activeFaq === faq.id ? "bi-chevron-down" : "bi-chevron-right"
                    }`}
                  ></i>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Faq;
