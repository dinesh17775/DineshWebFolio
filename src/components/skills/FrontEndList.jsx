import React from "react";
import "../../styles/style.css";
const FrontEndSkillList = {
  id: 1,
  frontend: ["HTML", "CSS", "Javascript", "React Js"],
};
function FrontEndList() {
  return (
    <div className="frontend-content skill-name">
      <h2>Frontend</h2>
      <div className="frontend-skills domain-skills">
        {FrontEndSkillList.frontend.map((item) => {
          return (
            <button
              className={`${
                item === "Javascript" ? "yellowBorder" : "blueBorder"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default FrontEndList;
