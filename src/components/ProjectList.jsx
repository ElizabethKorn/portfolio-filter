import React from "react";

export const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <div key={index} className="project">
          <img src={project.img} alt={project.category} />
        </div>
      ))}
    </div>
  );
};
