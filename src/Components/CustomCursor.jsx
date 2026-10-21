import React, { useEffect, useState } from "react";
import "./assets/css/CustomCursor.css";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailerPos, setTrailerPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      // Update global CSS variables for ambient background spotlight
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // Smooth trailer animation loop
  useEffect(() => {
    let animationFrameId;
    const followCursor = () => {
      setTrailerPos((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.18,
          y: prev.y + dy * 0.18,
        };
      });
      animationFrameId = requestAnimationFrame(followCursor);
    };
    followCursor();
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  // Dynamic 3D Card Tilt & Magnetic Button Physics
  useEffect(() => {
    const attachInteractiveEffects = () => {
      // 1. 3D Tilt Effect on Cards
      const tiltCards = document.querySelectorAll(
        ".portfolio-card, .service-card, .testimonial-card, .hero-ide-window, .stat-card, .about-profile-card"
      );

      tiltCards.forEach((card) => {
        if (card.dataset.tiltAttached) return;
        card.dataset.tiltAttached = "true";

        const onCardMove = (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -5.5;
          const rotateY = ((x - centerX) / centerX) * 5.5;
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        };

        const onCardLeave = () => {
          card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
        };

        card.style.transition = "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease";
        card.addEventListener("mousemove", onCardMove);
        card.addEventListener("mouseleave", onCardLeave);
      });

      // 2. Magnetic Buttons
      const magneticButtons = document.querySelectorAll(
        ".primary-btn, .secondary-btn, .nav-download-cv-btn, .terminal-toggle-btn"
      );

      magneticButtons.forEach((btn) => {
        if (btn.dataset.magneticAttached) return;
        btn.dataset.magneticAttached = "true";

        const onBtnMove = (e) => {
          const rect = btn.getBoundingClientRect();
          const x = (e.clientX - (rect.left + rect.width / 2)) * 0.28;
          const y = (e.clientY - (rect.top + rect.height / 2)) * 0.28;
          btn.style.transform = `translate(${x}px, ${y}px)`;
        };

        const onBtnLeave = () => {
          btn.style.transform = "translate(0px, 0px)";
        };

        btn.style.transition = "transform 0.2s ease-out, box-shadow 0.2s ease";
        btn.addEventListener("mousemove", onBtnMove);
        btn.addEventListener("mouseleave", onBtnLeave);
      });

      // 3. Hover labels for cursor
      const interactiveElements = document.querySelectorAll(
        "a, button, .portfolio-card, .service-card, .social-icon, .cert-card, .tech-grid-card, .nav-link, .timeline-card"
      );

      interactiveElements.forEach((el) => {
        if (el.dataset.cursorAttached) return;
        el.dataset.cursorAttached = "true";

        el.addEventListener("mouseenter", () => {
          setIsHovered(true);
          const cursorText = el.getAttribute("data-cursor") || "";
          setHoverText(cursorText);
        });
        el.addEventListener("mouseleave", () => {
          setIsHovered(false);
          setHoverText("");
        });
      });
    };

    attachInteractiveEffects();
    const observer = new MutationObserver(attachInteractiveEffects);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Main Cursor Dot */}
      <div
        className={`custom-cursor-dot ${isClicked ? "clicked" : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      {/* Outer Glowing Trailer Ring */}
      <div
        className={`custom-cursor-trailer ${isHovered ? "hovered" : ""} ${
          isClicked ? "clicked" : ""
        }`}
        style={{
          left: `${trailerPos.x}px`,
          top: `${trailerPos.y}px`,
        }}
      >
        {hoverText && <span className="cursor-text">{hoverText}</span>}
      </div>
    </>
  );
};

export default CustomCursor;
