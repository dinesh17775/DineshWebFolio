import React, { useState } from "react";
import "../styles/style.css";
import { MyAppContext } from "../contexts/Navcontext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
function MenuBar() {
  const { NavOpen, IsNavOpen } = MyAppContext();
  function handleMenu() {
    IsNavOpen(!NavOpen);
  }

  return (
    <div onClick={handleMenu}>
      <FontAwesomeIcon icon={faBars} className="menu_bar"></FontAwesomeIcon>
    </div>
  );
}

export default MenuBar;
