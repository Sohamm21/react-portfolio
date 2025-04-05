import React from "react";
import "./experience.css";

import { COMPANY_EXPERIENCE } from "../utils";

const Experience = () => {
  return (
    <div id="experience-container">
      <div className="experience-cards">
        <h2 id="experience-title">Experience</h2>
        <div className="experience-cards-container">
          {COMPANY_EXPERIENCE.map((experience, index) => (
            <div key={index} className="experience-card">
              <img
                src={experience.logo}
                alt={`${experience.name} logo`}
                className="company-logo"
              />
              <div className="company-details">
                <div className="company-info">
                  <span className="company-name">{experience.name}</span>
                  <span className="company-role">{experience.role}</span>
                  <span className="company-duration">
                    {experience.duration}
                  </span>
                </div>
                <div className="technologies-container">
                  {experience.technologies.map((tech, index) => (
                    <span key={index} className="technology">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="work-done-container">
                <ul className="work-done-list">
                  {experience.workDone.map((work, index) => (
                    <li key={index} className="work-done-item">
                      {work}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
