import React from "react";
import Projects from "./Projects";
const projects = [
  { id: 1, title: "Learning platform" },
  { id: 2, title: "Music App" },
  { id: 3, title: "Shoping Cart" },
  { id: 4, title: "Weather App" },
  { id: 5, title: "Personal Portofolio" },
];
function ProjectsList() {
  return (
    <div>
      {projects.map((item) => {
        return <Projects key={item.id} projects={item}></Projects>;
      })}
    </div>
  );
}

export default ProjectsList;
