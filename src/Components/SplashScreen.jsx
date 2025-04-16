import React, { useEffect, useState } from "react";
import "./assets/css/Splash.css";

const SplashScreen = ({ onFinish }) => {
  const [animationStage, setAnimationStage] = useState(0);
  const name = "QADEER SULEMAN";

  useEffect(() => {
    const animationSequence = [
      { stage: 1, delay: 0 },     // Background elements
      { stage: 2, delay: 500 },   // Logo reveal
      { stage: 3, delay: 1000 },  // Name animation
      { stage: 4, delay: 2000 },  // Progress bar
      { stage: 5, delay: 3000 },  // Welcome text
      { stage: 6, delay: 4000 }   // Transition out
    ];

    animationSequence.forEach(({ stage, delay }) => {
      setTimeout(() => {
        setAnimationStage(stage);
        if (stage === 6) {
          setTimeout(onFinish, 3000);
        }
      }, delay);
    });
  }, [onFinish]);

  return (
    <div className={`splash-container ${animationStage >= 6 ? "fade-out" : ""}`}>
      {/* Animated Background Elements */}
      <div className="bg-elements">
        <div className="bg-circle-1"></div>
        <div className="bg-circle-2"></div>
        <div className="bg-circle-3"></div>
        <div className="bg-grid"></div>
      </div>

      {/* Floating Particles */}
      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="particle" style={{
            '--size': `${Math.random() * 5 + 2}px`,
            '--x': `${Math.random() * 100}%`,
            '--y': `${Math.random() * 100}%`,
            '--delay': `${Math.random() * 2}s`,
            '--duration': `${Math.random() * 4 + 3}s`,
            '--opacity': `${Math.random() * 0.6 + 0.2}`
          }} />
        ))}
      </div>

      {/* Main Content */}
      <div className="splash-content">
        {/* Animated QS Logo */}
        <div className={`logo-container ${animationStage >= 2 ? "active" : ""}`}>
          <div className="logo-outer">
            <div className="logo-inner">
              <div className="logo-text">QS</div>
            </div>
          </div>
        </div>

        {/* Name Animation */}
        <div className={`name-container ${animationStage >= 3 ? "active" : ""}`}>
          {name.split("").map((char, index) => (
            <span
              key={index}
              className="name-char"
              style={{ 
                '--delay': `${index * 0.04}s`,
                '--hue': `${index * 15}`
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>

        {/* Progress Bar */}
        <div className={`progress-container ${animationStage >= 4 ? "active" : ""}`}>
          <div className="progress-track">
            <div className="progress-bar"></div>
          </div>
        </div>

        {/* Welcome Text */}
        <div className={`welcome-text ${animationStage >= 5 ? "active" : ""}`}>
          <div className="welcome-line">CREATIVE DEVELOPER</div>
          <div className="welcome-line">DIGITAL EXPERIENCES</div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;