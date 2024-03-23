import React from "react";
const BackEndSkillList = { id: 1, backend: ["PYTHON"] };
function BackEndList() {
  return (
    <div>
      <h2>Backend</h2>
      {BackEndSkillList.backend.map((item) => {
        return <button>{item}</button>;
      })}
    </div>
  );
}

export default BackEndList;
