import React from "react";
import "./experience.css";

import { COMPANY_EXPERIENCE } from "../utils";

const Experience = () => {
  return (
    <div id="experience-container">
      <div className="experience-cards">
      <h2 id="experience-title">Experience</h2>
      <div className="experience-cards-container">
        {
          COMPANY_EXPERIENCE.map((experience, index) => (
            <div key={index} className="experience-card">
              <img src={experience.logo} alt={`${experience.name} logo`} className="company-logo" />
              <div className="company-details">
                <span className="company-name">{experience.name}</span>
                <span className="company-role">{experience.role}</span>
                <span className="company-duration">{experience.duration}</span>
                <div className="technologies-container">
                  {
                    experience.technologies.map((tech, index) => (
                      <span key={index} className="technology">{tech}</span>
                    ))
                  }
                </div>
              </div>
            </div>
          ))
        }
      </div>
      </div>
    </div>
  );
};

export default Experience;
