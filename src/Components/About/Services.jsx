import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/css/services.css";

const servicesData = [
  {
    title: "Full Stack Web Development",
    icon: "bi bi-window-fullscreen",
    desc: "Modern, dynamic, and SEO-friendly web platforms built with React and Next.js, optimized for blazing load speeds, SSR/SSG, and responsive design.",
    color: "#00e1ff",
    badge: "Core Stack",
  },
  {
    title: "Cross-Platform Mobile Apps",
    icon: "bi bi-phone",
    desc: "Production-ready iOS & Android apps crafted with React Native — featuring 60fps animations, native camera/GPS hooks, and smooth offline caching.",
    color: "#a855f7",
    badge: "Mobile",
  },
  {
    title: "Python Backend & Microservices",
    icon: "bi bi-cpu",
    desc: "High-performance backend systems built with Python, Django, and Flask. Robust asynchronous queues with Celery/Redis and secure role-based auth.",
    color: "#f59e0b",
    badge: "Python",
  },
  {
    title: "DevOps & Containerization",
    icon: "bi bi-boxes",
    desc: "Multi-container Docker setups, Kubernetes (K8s) cluster orchestration, Helm charts, and container security compliance for cloud resilience.",
    color: "#10b981",
    badge: "DevOps",
  },
  {
    title: "Microsoft Azure & Cloud Architecture",
    icon: "bi bi-cloud-check",
    desc: "Scalable cloud infrastructure on Microsoft Azure (AKS, App Services, Blob Storage, Azure SQL) with automated monitoring and high availability.",
    color: "#3b82f6",
    badge: "Cloud",
  },
  {
    title: "CI/CD Pipelines & Automation",
    icon: "bi bi-arrow-repeat",
    desc: "Automated testing, continuous integration, and continuous deployment workflows via GitHub Actions and Azure DevOps for zero-downtime releases.",
    color: "#22c55e",
    badge: "Automation",
  },
  {
    title: "Database Engineering & Supabase",
    icon: "bi bi-database",
    desc: "Complex schema architecture, indexing, and Row-Level Security using PostgreSQL, MySQL, and Supabase with optimized relational queries.",
    color: "#06b6d4",
    badge: "Databases",
  },
  {
    title: "RESTful & GraphQL API Architecture",
    icon: "bi bi-diagram-3",
    desc: "Scalable microservices, webhook listeners, rate limiting, and third-party payment integrations with Stripe and Paystack.",
    color: "#ec4899",
    badge: "APIs",
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
                  href="https://wa.me/923023466105?text=Hi Abdul Qadeer, I'm interested in your service: " 
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