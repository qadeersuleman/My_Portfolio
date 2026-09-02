import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGraduationCap, faAward, faCodeBranch, faCalendarAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/css/Timeline.css";

const experienceData = [
  {
    type: "work",
    role: "Full Stack & Mobile Developer",
    company: "Freelance & Client Solutions",
    period: "2023 - Present",
    location: "Remote / Hybrid",
    desc: "Engineered 50+ production-grade web & mobile applications for global clients. Specialized in React Native iOS & Android apps, NestJS backends, Stripe/Paystack payment integration, and real-time maps.",
    skills: ["React Native", "iOS & Android", "NestJS", "Node.js", "Paystack", "Stripe", "MongoDB"],
    icon: faBriefcase,
  },
  {
    type: "education",
    role: "BS in Computer Science (BSCS)",
    company: "Shah Abdul Latif University",
    period: "2022 - 2026",
    location: "Pakistan",
    desc: "Graduated with an outstanding CGPA of 3.80 / 4.0. Core specializations in Data Structures, Algorithms, Software Engineering Principles, Mobile Computing, and Artificial Intelligence.",
    skills: ["CGPA 3.80 / 4.0", "Data Structures", "Mobile Computing", "Software Engineering"],
    icon: faGraduationCap,
  },
  {
    type: "work",
    role: "Lead Mobile Developer",
    company: "Dreams Virtual Academy & Client Apps",
    period: "2024 - 2025",
    location: "Remote",
    desc: "Designed and implemented interactive quiz modules, video lecture streaming, push notifications, and local offline storage architecture. Improved performance by 40% and overall user retention.",
    skills: ["React Native", "Redux", "Firebase", "UI/UX Architecture", "REST APIs"],
    icon: faCodeBranch,
  },
  {
    type: "award",
    role: "Tech Symposium & AI Hackathon Contributor",
    company: "University & Regional Tech Forums",
    period: "2023 - 2024",
    location: "Pakistan",
    desc: "Recognized for building innovative AI chat tools, NumPy computer vision scripts, and high-performance cross-platform application prototypes under tight deadlines.",
    skills: ["AI APIs", "Python", "NumPy", "C++ Algorithms", "System Design"],
    icon: faAward,
  },
];

const Timeline = () => {
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-out-quad", once: true });
  }, []);

  return (
    <section id="timeline" className="timeline-section">
      <Container>
        <div className="section-header text-center" data-aos="fade-down">
          <span className="section-badge">Career Roadmap</span>
          <h2 className="section-title mt-2">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle">
            Proven track record of academic excellence and real-world software delivery
          </p>
          <div className="divider mx-auto"></div>
        </div>

        <div className="timeline-container">
          <div className="timeline-center-line"></div>

          {experienceData.map((item, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 150}
            >
              <div className="timeline-icon-wrapper">
                <FontAwesomeIcon icon={item.icon} className="timeline-icon" />
              </div>

              <div className="timeline-card" data-cursor="Details">
                <div className="timeline-header">
                  <span className="timeline-period">
                    <FontAwesomeIcon icon={faCalendarAlt} className="me-1" /> {item.period}
                  </span>
                  <span className="timeline-location">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="me-1" /> {item.location}
                  </span>
                </div>

                <h3 className="timeline-role">{item.role}</h3>
                <h4 className="timeline-company">{item.company}</h4>
                <p className="timeline-desc">{item.desc}</p>

                <div className="timeline-tags">
                  {item.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="timeline-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Timeline;
