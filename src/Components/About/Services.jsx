import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/css/services.css";

const servicesData = [
  {
    title: "Mobile App Development",
    icon: "bi bi-phone",
    desc: "iOS & Android apps with React Native, Expo or native bridges — optimized for performance and accessibility.",
    color: "#6366f1",
  },
  {
    title: "Payment Integration",
    icon: "bi bi-credit-card-2-front",
    desc: "Secure in-app and web payments (Stripe, PayPal, Paystack) with PCI-aware flows and webhook handling.",
    color: "#ef4444",
  },
  {
    title: "Maps & Location",
    icon: "bi bi-geo-alt",
    desc: "Google Maps integration, geolocation, routing and location-based features for mobile and web.",
    color: "#10b981",
  },
  {
    title: "Camera & Media",
    icon: "bi bi-camera",
    desc: "Camera, gallery, and media handling with performant uploads and client-side processing.",
    color: "#f59e0b",
  },
  {
    title: "AI & API Integrations",
    icon: "bi bi-brain",
    desc: "Integrate AI APIs for chat, vision, embeddings, and custom models to add smart features.",
    color: "#8b5cf6",
  },
  {
    title: "AR & 3D Experiences",
    icon: "bi bi-cube",
    desc: "AR interactions and lightweight 3D viewers for immersive product demos and prototypes.",
    color: "#ec4899",
  },
  {
    title: "Backend & APIs",
    icon: "bi bi-server",
    desc: "NestJS / Express APIs, authentication, role-based access, and scalable services with Node.js.",
    color: "#3b82f6",
  },
  {
    title: "Databases & DevOps",
    icon: "bi bi-database",
    desc: "MongoDB and PostgreSQL setups, migrations, backups, and deployment-ready configurations.",
    color: "#06b6d4",
  },
  {
    title: "Play Store & App Store",
    icon: "bi bi-google-play",
    desc: "App packaging, store listing, screenshots, and submission guidance to publish on Play Store / App Store.",
    color: "#22c55e",
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