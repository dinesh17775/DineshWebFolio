import React from "react";
const DataBaseSkillList = { id: 1, database: ["My SQL"] };
function DataBase() {
  return (
    <div>
      <h2>Database</h2>
      {DataBaseSkillList.database.map((item) => {
        return <button>{item}</button>;
      })}
    </div>
  );
}

export default DataBase;
