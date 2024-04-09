import React from "react";
import "../styles/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
const otherProjects = [
  {
    id: 1,
    title: "To-Do-List",
    languages: "React JS, Javascript, CSS",
    projectLink: "https://github.com/dinesh17775/PriorityPilot.git",
  },
  {
    id: 2,
    title: "Movie finder",
    languages: "React JS, Javascript, CSS",
    projectLink: "https://github.com/dinesh17775?tab=repositories",
  },
  {
    id: 3,
    title: "Color changer",
    languages: "React JS, Javascript, CSS",
    projectLink: "https://github.com/dinesh17775/ColorCanvas.git",
  },
];

function Others() {
  function redirect(link) {
    window.open(link, "_blank");
  }
  return (
    <div className="others">
      <h2 className="projects-head">More Projects</h2>
      {otherProjects.map((item) => (
        <div
          key={item.id}
          className="other-project"
          onClick={() => {
            return redirect(item.projectLink);
          }}
        >
          <li className="other-project-item">
            <h2 className="other-title">{item.title}</h2>
            <p className="langauges">{item.languages}</p>
          </li>
          <div>
            <FontAwesomeIcon
              icon={faAngleRight}
              className="othersIcons"
            ></FontAwesomeIcon>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Others;
