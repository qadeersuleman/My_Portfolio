import React, { useEffect, useState } from "react";
import "./assets/css/Splash.css"; // Import CSS file

const SplashScreen = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const name = "Qadeer Suleman";

  useEffect(() => {
    // Fade out the splash screen after 3 seconds
    setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        onFinish(); // Callback to remove splash screen
      }, 800); // Give some time for fade-out effect
    }, 3000);
  }, [onFinish]);

  return (
    <div className={`splash-container ${fadeOut ? "fade-out" : ""}`}>
      {/* Logo */}
      {/* <div className="logo">QS</div> */}

      {/* Name Animation */}
      <div className="name-container">
        {name.split("").map((char, index) => (
          <span
            key={index}
            className="jump"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="progress-bar"></div>

      {/* Welcome Text */}
      <h1 style={{ color: "#fff", marginTop: "20px", textShadow: "0 0 10px #00e1ff" }}>
        Welcome to My Portfolio
      </h1>
    </div>
  );
};

export default SplashScreen;