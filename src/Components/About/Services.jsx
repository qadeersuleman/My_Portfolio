import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/css/services.css"; // Import CSS for styling

const servicesData = [
  { title: "App Development", icon: "ion-monitor" },
  { title: "Web Development", icon: "ion-code-working" },
  { title: "WordPress Dev", icon: "ion-camera" },
  { title: "Responsive Design", icon: "ion-android-phone-portrait" },
  { title: "Graphic Design", icon: "ion-paintbrush" },
  { title: "SEO Services", icon: "ion-stats-bars" },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section id="service" className="services-mf route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Services</h3>
              <p className="subtitle-a">
                Providing a wide range of services to meet your needs.
              </p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>

        <div className="row">
          {servicesData.map((service, index) => (
            <div className="col-md-4" key={index} data-aos="fade-up">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle">
                    <i className={service.icon}></i>
                  </span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">{service.title}</h2>
                  <p className="s-description text-center text-light">
                    {service.title === "App Development" &&
                      "Creating high-quality mobile applications tailored to your business needs, ensuring seamless performance and UX."}
                    {service.title === "Web Development" &&
                      "Building robust and scalable web applications using the latest technologies to help you achieve your business goals."}
                    {service.title === "WordPress Dev" &&
                      "Developing custom WordPress themes and plugins to enhance your website's functionality and appearance."}
                    {service.title === "Responsive Design" &&
                      "Designing responsive websites that provide an optimal viewing experience across a wide range of devices."}
                    {service.title === "Graphic Design" &&
                      "Creating visually appealing graphics and designs that effectively communicate your brand's message."}
                    {service.title === "SEO Services" &&
                      "Optimizing your website to improve its visibility on search engines and attract more organic traffic."}
                  </p>
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
