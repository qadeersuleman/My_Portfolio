import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/css/services.css";

const servicesData = [
  {
    title: "Mobile App Development",
    icon: "bi bi-phone",
    desc: "Cross-platform iOS & Android mobile apps built with React Native — delivering native 60fps performance, custom animations, and offline capabilities.",
    color: "#00e1ff",
    badge: "Most Popular",
  },
  {
    title: "Payment & IAP Gateways",
    icon: "bi bi-credit-card-2-front",
    desc: "PCI-compliant in-app purchases and checkout flows integrated with Paystack, Stripe, and Apple Pay including secure webhooks.",
    color: "#a855f7",
    badge: "High Demand",
  },
  {
    title: "Google Maps & Geolocation",
    icon: "bi bi-geo-alt",
    desc: "Real-time GPS tracking, custom map markers, distance matrices, routing algorithms, and location-based mobile services.",
    color: "#10b981",
    badge: "Real-Time",
  },
  {
    title: "Camera & Vision Logic",
    icon: "bi bi-camera",
    desc: "Performant device camera integrations, real-time posture analysis, image capture workflows, and media processing pipelines.",
    color: "#f59e0b",
    badge: "Specialized",
  },
  {
    title: "AI & Smart API Systems",
    icon: "bi bi-brain",
    desc: "Integrating OpenAI GPT-4, vision models, smart chatbots, semantic embeddings, and automated AI assistance into web and mobile platforms.",
    color: "#ec4899",
    badge: "Next-Gen",
  },
  {
    title: "Backend & API Architecture",
    icon: "bi bi-server",
    desc: "Robust RESTful APIs, JWT role-based authentication, microservices, and high-throughput server backends with NestJS and Node.js.",
    color: "#3b82f6",
    badge: "Scalable",
  },
  {
    title: "Database Engineering",
    icon: "bi bi-database",
    desc: "Schema design, index optimization, and data migrations using MongoDB & PostgreSQL for high availability.",
    color: "#06b6d4",
    badge: "Data",
  },
  {
    title: "App Store & Play Store Publishing",
    icon: "bi bi-google-play",
    desc: "End-to-end mobile app packaging, keystore generation, App Store Connect & Google Play Console publishing compliance.",
    color: "#22c55e",
    badge: "Deployment",
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-quad',
      once: true
    });
  }, []);

  return (
    <section id="service" className="services-section">
      <Container>
        <div className="section-header text-center" data-aos="fade-down">
          <span className="section-badge">Client & Business Offerings</span>
          <h2 className="section-title mt-2">
            My Specialized <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subtitle">
            End-to-end technical solutions designed to scale your business and engage users
          </p>
          <div className="divider mx-auto"></div>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div 
              className="service-card" 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-cursor="Service"
              style={{ '--accent-color': service.color }}
            >
              <div className="card-badge-tag" style={{ borderColor: service.color, color: service.color }}>
                {service.badge}
              </div>
              <div className="card-inner">
                <div className="card-icon-box" style={{ background: `${service.color}15`, color: service.color, borderColor: `${service.color}40` }}>
                  <i className={service.icon}></i>
                </div>
                <h3 className="card-title" style={{ color: "#ffffff" }}>{service.title}</h3>
                <p className="card-desc">{service.desc}</p>
                
                <a
                  href="https://wa.me/923023466105?text=Hi Qadeer, I'm interested in your service: " 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-action-btn text-decoration-none"
                  style={{ color: service.color }}
                >
                  Discuss Service <i className="bi bi-arrow-right ms-2"></i>
                </a>
              </div>
              <div className="service-card-glow" style={{ background: `radial-gradient(circle at center, ${service.color}25 0%, transparent 70%)` }}></div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;