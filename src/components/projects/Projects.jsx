import React from "react";
import "../../styles/style.css";
function Projects({ projects }) {
  return (
    <article className={`projects-list list-item${projects.id}`}>
      <img src="" alt="" className="project-img" />
      <h2 className="project-title">{projects.title}</h2>
    </article>
  );
}

export default Projects;
