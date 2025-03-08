import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/ScrollTop.css"; // Import CSS file

const ScrollTop = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    let position = window.scrollY;
    let speed = 1; // Initial slow speed

    const animateScroll = () => {
      if (position > 0) {
        position -= speed;
        speed += 1; // Gradually increase speed for fast movement
        window.scrollTo(0, position);
        requestAnimationFrame(animateScroll);
      } else {
        navigate("/"); // Navigate to Home after scrolling to top
      }
    };

    animateScroll();
  };

  return (
    <button className="back-to-top" onClick={scrollToTop}>
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
};

export default ScrollTop;
