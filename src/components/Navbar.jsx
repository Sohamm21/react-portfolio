import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

import "./navbar.css";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const renderNavbarLinks = () => {
    return (
      <>
        <li>
          <a href="#about-container">About</a>
        </li>
        <li>
          <a href="#experience-container">Experience</a>
        </li>
        <li>
          <a href="#projects-section">Projects</a>
        </li>
        <li>
          <a href="#contact-container">Contact</a>
        </li>
      </>
    );
  };

  return (
    <nav id="navbar-container">
      <div id="navbar">
        <a id="navbar-logo" href="/">
          <span>Soham</span>
          <span id="last-name">Kumbhar</span>
        </a>
        <ul id="navbar-links">
          {renderNavbarLinks()}
        </ul>
        <div id="navbar-icons">
          <a id="dark-mode-toggle">
            {theme === "dark" ? (
              <FaSun id="light-mode-icon" onClick={() => setTheme("light")} />
            ) : (
              <FaMoon id="dark-mode-icon" onClick={() => setTheme("dark")} />
            )}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
