import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/css/about.css"; // Create a CSS file for custom styles if needed
import profileImage from "../assets/images/profile.png"; // Update path based on your folder structure

const About = () => {
  const [skills, setSkills] = useState([
    { name: "HTML CSS", level: 85 },
    { name: "JavaScript", level: 75 },
    { name: "React JS", level: 50 },
    { name: "Django", level: 90 },
  ]);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const skillSection = document.querySelector(".skill-mf");
      const skillSectionTop = skillSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (skillSectionTop < windowHeight) {
        setSkills((prevSkills) =>
          prevSkills.map((skill) => ({ ...skill, animated: true }))
        );
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
                {/* Left Section */}
                <div className="col-md-6" data-aos="fade-right">
                  <div className="row">
                    <div className="col-sm-6 col-md-5">
                      <div className="about-img">
                        <img
                          src={profileImage}
                          className="img-fluid rounded b-shadow-a"
                          alt="Profile"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-7">
                      <div className="about-info">
                        <p>
                          <span className="title-s">Name: </span>{" "}
                          <span className="text-light">Qadeer Saleman</span>
                        </p>
                        <p>
                          <span className="title-s">Profile: </span>{" "}
                          <span className="text-light">
                            Full Stack Developer
                          </span>
                        </p>
                        <p>
                          <span className="title-s">Email: </span>{" "}
                          <span className="text-light">
                            qadeersaleman@gmail.com
                          </span>
                        </p>
                        <p>
                          <span className="title-s">Phone: </span>{" "}
                          <span className="text-light">+92302-3466105</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Skills Section */}
                  <div className="skill-mf">
                    <p className="title-s">Skills</p>
                    {skills.map((skill, index) => (
                      <div key={index}>
                        <span className="text-light">{skill.name}</span>{" "}
                        <span className="pull-right text-light">
                          {skill.level}%
                        </span>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: skill.animated ? `${skill.level}%` : "0%",
                              transition: "width 2s ease-in-out",
                            }}
                            aria-valuenow={skill.level}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Section - About Me */}
                <div className="col-md-6" data-aos="fade-left">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">About Me</h5>
                    </div>
                    <p className="lead text-light">
                      I'm a second-year BSCS student at Shah Abdul Latif
                      University Campus Ghotki. With a passion for web
                      development, I've honed my skills in HTML, CSS, JS,
                      Bootstrap, Django, and MySQL.
                    </p>
                    <p className="lead text-light">
                      Over the past three years, I've successfully crafted over
                      50 projects, showcasing my proficiency in these
                      technologies. I thrive on turning ideas into interactive
                      and functional web solutions.
                    </p>
                    <p className="lead text-light">
                      Excited to contribute my skills and continue the journey
                      of innovation in the world of web development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
