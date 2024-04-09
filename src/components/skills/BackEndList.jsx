import React from "react";
import "../../styles/style.css";
const BackEndSkillList = { id: 1, backend: ["PYTHON"] };
function BackEndList() {
  return (
    <div className="backend-content skill-name">
      <h2>Backend</h2>
      <div className="backend-skills domain-skills">
        {BackEndSkillList.backend.map((item) => {
          return (
            <button
              className={`${item === "PYTHON" ? "greenBorder" : "blueBorder"}`}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default BackEndList;
