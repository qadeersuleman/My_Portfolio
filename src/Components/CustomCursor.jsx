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

  useEffect(() => {
    const handleElementHover = () => {
      const interactiveElements = document.querySelectorAll(
        "a, button, .project-card-wrapper, .service-card, .social-icon, .certificate-wrapper, .tech-icon-wrapper, .nav-link, .timeline-card"
      );

      interactiveElements.forEach((el) => {
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

    handleElementHover();
    const observer = new MutationObserver(handleElementHover);
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
