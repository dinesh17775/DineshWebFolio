import React from "react";
import { NavLink } from "react-router-dom";
function RootNavLayout() {
  return (
    <>
      <div>
        <button>Contact Me</button>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>Trending</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>Snippets</NavLink>
          </li>
        </ul>
        <h3>Socials</h3>
        <ul>
          <li>
            <NavLink to={"/"}>Instagram</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>Github</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>Linkedin</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default RootNavLayout;
