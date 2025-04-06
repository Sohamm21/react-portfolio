import React from "react";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <header id="intro-container">
      <div id="name-container">
        <span>Soham</span>
        <span id="last-name">Kumbhar</span>
      </div>
      <div id="intro-text-container">
        <Typewriter
          options={{
            strings: [
              "An artist and chef by passion, a developer by profession;",
              "Scribbling and cooking the code to bring creative ideas to life.",
            ],
            autoStart: true,
            loop: true,
            delay: 100,
          }}
        />
      </div>
      <button
        id="resume-button"
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/1GUiY5BzCQFu97ZGQ-ycCDwjT4NPI_zde/view?usp=sharing"
          , "_blank")
        }
      >
        Resume
      </button>
    </header>
  );
};

export default Header;
