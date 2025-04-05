import React from "react";
import "./projects.css";

import { PROJECTS as projects } from "../utils";

const Projects = () => {
  return (
    <div>
      <div className="project-title">
        <h2>Projects</h2>
      </div>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-content">
              <div className="project-info">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <p>{project.technologies}</p>
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Source
                </a>
              </div>
              <img
                className="project-image"
                src={project.image}
                alt={project.name}
                loading="lazy"
              />
            </div>
            <span className="project-date">{project.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
