import React from "react";
import FrontEndList from "./FrontEndList";
import BackEndList from "./BackEndList";
import DataBase from "./DataBase";
function SkillList() {
  return (
    <div>
      <FrontEndList></FrontEndList>
      <BackEndList></BackEndList>
      <DataBase></DataBase>
    </div>
  );
}

export default SkillList;
