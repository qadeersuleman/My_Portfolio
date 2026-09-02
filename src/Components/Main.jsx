import React from "react";
import CustomCursor from "./CustomCursor";
import Navbar from "./Home/Navbar";
import Home from "./Home/Home";
import About from "./About/About";
import Timeline from "./About/Timeline";
import Services from "./About/Services";
import Portfolio from "./Project/Portfolio";
import Testimonials from "./About/Testimonials";
import ContactUs from "./About/ContactUs";
import Footer from "./About/Footer";
import ScrollTop from "./Home/ScollTop";
import DeveloperTerminal from "./DeveloperTerminal";

const Main = () => {
  return (
    <div className="portfolio-app-root">
      <CustomCursor />
      <Navbar />
      <Home />
      <About />
      <Timeline />
      <Services />
      <Portfolio />
      <Testimonials />
      <ContactUs />
      <Footer />
      <ScrollTop />
      <DeveloperTerminal />
    </div>
  );
};

export default Main;
