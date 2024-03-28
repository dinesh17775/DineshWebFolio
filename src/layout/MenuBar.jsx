import React, { useState } from "react";
import "../styles/style.css";
import { MyAppContext } from "../contexts/Navcontext";
function MenuBar() {
  const { NavOpen, IsNavOpen } = MyAppContext();
  function handleMenu() {
    IsNavOpen(!NavOpen);
  }

  return (
    <div>
      <button className="nav-open" onClick={handleMenu}>
        click
      </button>
    </div>
  );
}

export default MenuBar;
