import React from "react";
const otherProjects = [
  { id: 1, title: "To-Do-List" },
  { id: 2, title: "Movie finder" },
  { id: 3, title: "Color changer" },
];
function Others() {
  return (
    <div>
      <h2>more projects</h2>
      {otherProjects.map((item) => {
        return <p>{item.title}</p>;
      })}
    </div>
  );
}

export default Others;
