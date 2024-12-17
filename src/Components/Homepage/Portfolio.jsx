import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("*"); // Tracks the active category filter

  const categories = [
    { name: "All", filter: "*" },
    { name: "Website Development", filter: "filter-website" },
    { name: "Application Development", filter: "filter-application" },
    { name: "Graphic Designing", filter: "filter-graphic" },
  ];

  const portfolioItems = [
    {
      category: "filter-website",
      title: "Digital Marketing",
      description: "Creative websites for every need",
      img: "assets/img/DM-website.png",
    },
    {
      category: "filter-application",
      title: "Profile Application",
      description: "Innovative mobile solutions",
      img: "assets/img/profile-App.png",
    },
    {
      category: "filter-graphic",
      title: "Mackup Design",
      description: "Visually stunning designs",
      img: "assets/img/portfolio/branding-1.jpg",
    },

    {
      category: "filter-website",
      title: "Blog Website",
      description: "Innovative websites for the future",
      img: "assets/img/Blog-website.png",
    },
    {
      category: "filter-application",
      title: "Dashboard Application ",
      description: "Bringing ideas to life",
      img: "assets/img/Dashboard-App.png",
    },
    {
      category: "filter-graphic",
      title: "Book Cover Design",
      description: "Creating impactful visuals",
      img: "assets/img/portfolio/books-1.jpg",
    },
  ];

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <section id="portfolio" className="portfolio section">
      <Container>
        <div className="section-title" data-aos="fade-up">
          <h2>Portfolio</h2>
          <p>Explore our projects across diverse categories</p>
        </div>

        <ul
          className="portfolio-filters isotope-filters"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {categories.map((category, index) => (
            <li
              key={index}
              onClick={() => handleFilterChange(category.filter)}
              className={
                activeFilter === category.filter ? "filter-active" : ""
              }
            >
              {category.name}
            </li>
          ))}
        </ul>

        <Row className="gy-4" data-aos="fade-up" data-aos-delay="200">
          {portfolioItems
            .filter(
              (item) => activeFilter === "*" || item.category === activeFilter
            )
            .map((item, index) => (
              <Col lg={4} md={6} className="portfolio-item" key={index}>
                <Card className="portfolio-card">
                  <Card.Img variant="top" src={item.img} alt={item.title} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <div className="portfolio-links">
                      <Button
                        variant="link"
                        href={item.img}
                        title={item.title}
                        data-gallery="portfolio-gallery"
                        className="glightbox preview-link"
                      >
                        <i className="bi bi-zoom-in"></i>
                      </Button>
                      <Button
                        variant="link"
                        href="portfolio-details.html"
                        title="More Details"
                        className="details-link"
                      >
                        <i className="bi bi-link-45deg"></i>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
