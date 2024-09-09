import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // Array of project details (replace with your actual project data)
  const projects = [
    { title: "Project 1", description: "A brief description of project 1." },
    { title: "Project 2", description: "A brief description of project 2." },
    { title: "Project 3", description: "A brief description of project 3." },
    { title: "Project 4", description: "A brief description of project 4." },
    ];

  return (
    <div className="experience-section" id="projects">
      {/* heading */}
      <div className="portfolio1">
      <span style={{color: darkMode?'white': ''}}>Recently Completed</span>
      <span>Projects</span>
      </div>
      
      <div className="experience-grid">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            style={{ backgroundColor: darkMode ? '#333' : '#fff' }}
          >
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button className="details-button">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
