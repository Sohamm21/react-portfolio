import React from "react";
import "./index.css";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Experience from "./Experience";

const Portfolio = () => {
  return (
    <>
      <img src="./src/assets/header.svg" id="header-background" />
      <Navbar />
      <Header />
      <About />
      <Experience />
    </>
  );
};

export default Portfolio;
