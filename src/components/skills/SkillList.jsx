import React from "react";
import FrontEndList from "./FrontEndList";
import BackEndList from "./BackEndList";
import DataBase from "./DataBase";
import "../../styles/style.css";
function SkillList() {
  return (
    <div className="skills">
      <FrontEndList></FrontEndList>
      <BackEndList></BackEndList>
      <DataBase></DataBase>
    </div>
  );
}

export default SkillList;
