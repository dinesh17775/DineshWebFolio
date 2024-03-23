import React from "react";
const FrontEndSkillList = {
  id: 1,
  frontend: ["HTML", "CSS", "Javascript", "React Js"],
};
function FrontEndList() {
  return (
    <div>
      <h2>Frontend</h2>
      {FrontEndSkillList.frontend.map((item) => {
        return <button>{item}</button>;
      })}
    </div>
  );
}

export default FrontEndList;
