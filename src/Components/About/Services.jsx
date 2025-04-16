import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/css/services.css";

const servicesData = [
  { 
    title: "App Development", 
    icon: "bi bi-phone", 
    desc: "Creating high-quality mobile applications with seamless performance and intuitive UX.",
    color: "#6366f1"
  },
  { 
    title: "Web Development", 
    icon: "bi bi-code-square", 
    desc: "Building robust, scalable web applications using cutting-edge technologies.",
    color: "#10b981"
  },
  { 
    title: "WordPress Dev", 
    icon: "bi bi-wordpress", 
    desc: "Custom WordPress solutions with optimized performance and security.",
    color: "#3b82f6"
  },
  { 
    title: "Responsive Design", 
    icon: "bi bi-layout-wtf", 
    desc: "Pixel-perfect designs that adapt flawlessly to any device.",
    color: "#f59e0b"
  },
  { 
    title: "UI/UX Design", 
    icon: "bi bi-palette2", 
    desc: "Beautiful interfaces with intuitive user experiences that convert.",
    color: "#ec4899"
  },
  { 
    title: "SEO Optimization", 
    icon: "bi bi-graph-up-arrow", 
    desc: "Data-driven strategies to boost your search rankings and traffic.",
    color: "#8b5cf6"
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-quad',
      once: true
    });
  }, []);

  return (
    <section id="service" className="services-section">
      <div className="container">
        <div className="section-header" data-aos="fade-down">
          <h2 className="section-title">My <span>Services</span></h2>
          <p className="section-subtitle">
            Solutions crafted to elevate your digital presence
          </p>
          <div className="divider"></div>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div 
              className="service-card" 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              style={{ '--accent-color': service.color }}
            >
              <div className="card-inner">
                <div className="card-icon">
                  <i className={service.icon}></i>
                </div>
                <h3 className="card-title" style={{color : service.color}}>{service.title}</h3>
                <p className="card-desc">{service.desc}</p>
                <div className="card-hover-content">
                  <button className="service-btn">
                    Learn More <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;