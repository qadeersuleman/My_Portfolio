import React, { useEffect } from "react";
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
import ThemeSwitcher from "./ThemeSwitcher";

const Main = () => {
  useEffect(() => {
    const rootContainer = document.querySelector(".portfolio-app-root");

    const handleWheel = (e) => {
      const isHorizontal = document.documentElement.getAttribute("data-layout") === "horizontal";
      if (!isHorizontal || !rootContainer) return;

      // Allow vertical scroll inside slide if content overflows vertically
      const activeSlide = e.target.closest("section");
      if (activeSlide && activeSlide.scrollHeight > activeSlide.clientHeight) {
        const isAtBottom = activeSlide.scrollTop + activeSlide.clientHeight >= activeSlide.scrollHeight - 10;
        const isAtTop = activeSlide.scrollTop <= 10;
        if ((e.deltaY > 0 && !isAtBottom) || (e.deltaY < 0 && !isAtTop)) {
          return;
        }
      }

      e.preventDefault();
      rootContainer.scrollBy({
        left: e.deltaY * 1.5,
        behavior: "smooth"
      });
    };

    const handleKeyDown = (e) => {
      const isHorizontal = document.documentElement.getAttribute("data-layout") === "horizontal";
      if (!isHorizontal || !rootContainer) return;

      if (e.key === "ArrowRight") {
        rootContainer.scrollBy({ left: window.innerWidth, behavior: "smooth" });
      } else if (e.key === "ArrowLeft") {
        rootContainer.scrollBy({ left: -window.innerWidth, behavior: "smooth" });
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="portfolio-app-root">
      <CustomCursor />
      <ThemeSwitcher />
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
