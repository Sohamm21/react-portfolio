import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav id="navbar-container">
      <div id="navbar">
        <div id="navbar-logo">
          <span>Soham</span>
          <span id="last-name">Kumbhar</span>
        </div>
        <ul id="navbar-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#dark-mode-toggle" id="dark-mode-toggle">
              {theme === "dark" ? (
                <FaSun id="light-mode-icon" onClick={() => setTheme("light")} />
              ) : (
                <FaMoon id="dark-mode-icon" onClick={() => setTheme("dark")} />
              )}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
