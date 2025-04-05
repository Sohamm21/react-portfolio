import React from "react";
import { MdOpenInNew } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import "./projects.css";

import { PROJECTS as projects } from "../utils";

const Projects = () => {
  return (
    <div className="projects-section" id="projects-section">
      <h2 id="projects-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-content">
              <div className="project-info">
                <p className="project-name">{project.name}</p>
                <p className="project-description">{project.description}</p>
                <div className="techs-used">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MdOpenInNew className="project-icon" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="project-icon" />
                  </a>
                </div>
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
