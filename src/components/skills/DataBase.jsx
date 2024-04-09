import React from "react";
import "../../styles/style.css";
const DataBaseSkillList = { id: 1, database: ["My SQL"] };
function DataBase() {
  return (
    <div className="database-content skill-name">
      <h2>Database</h2>
      <div className="database-skill domain-skill">
        {DataBaseSkillList.database.map((item) => {
          return (
            <button
              className={`${item === "My SQL" ? "orangeBorder" : "blueBorder"}`}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default DataBase;
