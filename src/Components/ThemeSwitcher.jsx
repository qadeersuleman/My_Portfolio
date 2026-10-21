import React, { useState, useEffect } from "react";
import "./assets/css/ThemeSwitcher.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPalette,
  faCheck,
  faXmark,
  faSliders,
  faArrowsUpDown,
  faArrowsLeftRight
} from "@fortawesome/free-solid-svg-icons";

const themes = [
  {
    id: "cyber-neon",
    name: "Cyber Neon",
    tagline: "Futuristic Cyan & Violet",
    colors: ["#00e1ff", "#a855f7", "#ec4899"],
    bg: "#090d16"
  },
  {
    id: "emerald-aurora",
    name: "Emerald Aurora",
    tagline: "Luminous Teal & Emerald",
    colors: ["#10b981", "#06b6d4", "#a3e635"],
    bg: "#061412"
  },
  {
    id: "sunset-violet",
    name: "Sunset Violet",
    tagline: "Electric Purple & Rose",
    colors: ["#c084fc", "#f43f5e", "#fbbf24"],
    bg: "#12091c"
  },
  {
    id: "crimson-flame",
    name: "Crimson Flame",
    tagline: "Fiery Coral & Gold",
    colors: ["#ff4d4d", "#f97316", "#f59e0b"],
    bg: "#18090a"
  },
  {
    id: "sapphire-gold",
    name: "Sapphire Gold",
    tagline: "Royal Blue & Champagne",
    colors: ["#3b82f6", "#f59e0b", "#38bdf8"],
    bg: "#060e1a"
  }
];

const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState(() => {
    return localStorage.getItem("portfolio_theme") || "cyber-neon";
  });
  const [layoutMode, setLayoutMode] = useState(() => {
    return localStorage.getItem("portfolio_layout") || "vertical";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", activeTheme);
    localStorage.setItem("portfolio_theme", activeTheme);
  }, [activeTheme]);

  useEffect(() => {
    document.documentElement.setAttribute("data-layout", layoutMode);
    localStorage.setItem("portfolio_layout", layoutMode);
    window.dispatchEvent(new Event("layoutchange"));
  }, [layoutMode]);

  const handleSelectTheme = (themeId) => {
    setActiveTheme(themeId);
  };

  const handleSelectLayout = (mode) => {
    setLayoutMode(mode);
  };

  return (
    <div className="theme-switcher-container">
      {/* Floating Toggle Button */}
      <button
        className={`theme-switcher-toggle ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        title="Customize Portfolio Color & Layout"
        data-cursor="Theme"
      >
        <div className="toggle-inner">
          <FontAwesomeIcon icon={isOpen ? faXmark : faPalette} className="theme-icon" />
          <span className="theme-toggle-label">Theme & Layout</span>
        </div>
        <span className="theme-pulse-dot"></span>
      </button>

      {/* Floating Panel */}
      {isOpen && (
        <div className="theme-panel animate-fade-in">
          <div className="theme-panel-header">
            <div className="header-title">
              <span className="sparkle-icon">✨</span>
              <h6>Theme & Layout Options</h6>
            </div>
            <span className="theme-count">{themes.length} Themes</span>
          </div>

          {/* Layout Direction Selector */}
          <div className="layout-switcher-box">
            <div className="layout-box-header">
              <FontAwesomeIcon icon={faSliders} className="me-1 text-accent" />
              <span>Scroll Direction</span>
            </div>
            <div className="layout-btn-group">
              <button
                className={`layout-mode-btn ${layoutMode === "vertical" ? "active" : ""}`}
                onClick={() => handleSelectLayout("vertical")}
              >
                <FontAwesomeIcon icon={faArrowsUpDown} className="me-1" /> Vertical ↕
              </button>
              <button
                className={`layout-mode-btn ${layoutMode === "horizontal" ? "active" : ""}`}
                onClick={() => handleSelectLayout("horizontal")}
              >
                <FontAwesomeIcon icon={faArrowsLeftRight} className="me-1" /> Horizontal ↔
              </button>
            </div>
          </div>

          <p className="theme-subtitle mt-3">Select your favorite "Totaly Kamal" color vibe:</p>

          <div className="theme-options-grid">
            {themes.map((theme) => {
              const isSelected = activeTheme === theme.id;
              return (
                <div
                  key={theme.id}
                  className={`theme-card ${isSelected ? "selected" : ""}`}
                  onClick={() => handleSelectTheme(theme.id)}
                  style={{ '--theme-preview-bg': theme.bg }}
                >
                  <div className="theme-card-top">
                    <span className="theme-name">{theme.name}</span>
                    {isSelected && (
                      <span className="active-badge">
                        <FontAwesomeIcon icon={faCheck} /> Active
                      </span>
                    )}
                  </div>
                  <span className="theme-tagline">{theme.tagline}</span>
                  <div className="color-dots-row">
                    {theme.colors.map((color, idx) => (
                      <span
                        key={idx}
                        className="color-dot"
                        style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}` }}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="theme-panel-footer">
            <span>✨ Switch between Vertical ↕ and Horizontal ↔ anytime!</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
