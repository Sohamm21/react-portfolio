import React from "react";
import "./index.css";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

const Portfolio = () => {
  return (
    <>
      <img
        src="https://res.cloudinary.com/dyrv985gb/image/upload/v1743855726/header_abngwk.svg"
        id="header-background"
      />
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
};

export default Portfolio;
