import React from "react";
import "./about.css";

const About = () => {
  return (
    <div id="about-container">
      <div className="about-text-container">
        <h2 id="about-title">I'm a Frontend Developer.</h2>
        <span className="about-text">
          I am a passionate frontend developer with a knack for creating
          visually stunning and user-friendly web applications. My journey in
          web development has been fueled by a love for design and a desire to
          bring ideas to life through code. I thrive on challenges and
          continuously seek opportunities to learn and grow in this
          ever-evolving field.
        </span>
        <br />
        <span className="about-text">
          Having experience working in a startup, I have honed my skills in
          collaborating with cross-functional teams, understanding user needs,
          and translating design concepts into functional and visually appealing
          interfaces. With a strong foundation in HTML, CSS, TypeScript and
          JavaScript, I am adept at building responsive and interactive web
          applications that deliver seamless user experiences.
        </span>
      </div>
      <div id="about-image-container">
        <img id="brush-stroke-bg" src="./src/assets/brush-strokes-bg.svg" alt="brush-strokes-bg" />
        <img id="about-image" src="./src/assets/about-image.png" alt="about-logo" />
      </div>
    </div>
  );
};

export default About;
