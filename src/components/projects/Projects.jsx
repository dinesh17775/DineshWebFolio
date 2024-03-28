import React from "react";
import "../../styles/style.css";
function Projects({ projects }) {
  return (
    <article className={`projects-list list-item${projects.id}`}>
      <div className={`project-img project-img${projects.id}`}>
        <img src={projects.img} alt="" className="image" />
      </div>
      <h2 className="project-title">{projects.title}</h2>
    </article>
  );
}

export default Projects;
