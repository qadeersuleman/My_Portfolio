import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/css/about.css";
import profileImage from "../assets/images/profile.png";

const About = () => {
  const skills = [
    { name: "HTML CSS", level: 85 },
    { name: "JavaScript", level: 75 },
    { name: "React JS", level: 50 },
    { name: "Django", level: 90 },
  ];

  const skillSectionRef = useRef(null);
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const top = skillSectionRef.current?.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top && top < windowHeight - 100) {
        console.log("Triggered by scroll");
        setAnimateSkills(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">
                {/* Profile + Skills */}
                <div className="col-md-6" data-aos="fade-right">
                  <div className="row">
                    <div className="col-sm-6 col-md-5">
                      <div className="about-img">
                        <img
                          src={profileImage}
                          alt="Profile"
                          className="img-fluid rounded"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-7">
                      <div className="about-info">
                        <p>
                          <span className="title-s">Name: </span>Qadeer Saleman
                        </p>
                        <p>
                          <span className="title-s">Profile: </span>Full Stack
                          Developer
                        </p>
                        <p>
                          <span className="title-s">Email: </span>
                          qadeersaleman@gmail.com
                        </p>
                        <p>
                          <span className="title-s">Phone: </span>+92 302
                          3466105
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="skill-mf" ref={skillSectionRef}>
                    <p className="title-s">Skills</p>
                    {skills.map((skill, index) => (
                      <div key={index} className="mb-3">
                        <div className="d-flex justify-content-between">
                          <span className="text-light">{skill.name}</span>
                          <span className="text-light">{skill.level}%</span>
                        </div>
                        <div className="custom-progress">
                          <div
                            className={`custom-progress-bar ${
                              animateSkills ? "animate" : ""
                            }`}
                            style={{
                              width: animateSkills ? `${skill.level}%` : "0%",
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* About Me */}
                <div className="col-md-6" data-aos="fade-left">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">About Me</h5>
                    </div>
                    <p className="lead text-light">
                      I'm a Final Year BSCS Computer Science student at Shah
                      Abdul Latif University, passionate about full-stack web
                      and app development. I work with HTML, CSS, JavaScript,
                      Bootstrap, Django, and MySQL.
                    </p>
                    <p className="lead text-light">
                      Over the past three years, I’ve created 50+ real-world
                      projects that reflect my dedication, creativity, and
                      ability to transform ideas into powerful digital
                      solutions.
                    </p>
                    <p className="lead text-light">
                      I'm experienced with Git, GitHub, REST APIs, and
                      deployment platforms like Vercel and Heroku to take ideas
                      live for the world to use.
                    </p>
                    <p className="lead text-light">
                      I’ve worked with third-party services like Paystack and
                      Firebase to build secure payment systems and
                      authentication flows.
                    </p>
                    <p className="lead text-light">
                      Learning never stops for me — I continuously explore
                      emerging technologies to stay ahead and bring fresh energy
                      into every project.
                    </p>
                  </div>
                </div>
              </div>{" "}
              {/* row */}
            </div>{" "}
            {/* box-shadow-full */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
