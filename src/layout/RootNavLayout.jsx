import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/style.css";
function RootNavLayout() {
  return (
    <>
      <nav className="nav-bar">
        <div className="nav-container">
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to={"/"} className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/"} className="nav-link">
                Trending
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/"} className="nav-link">
                Snippets
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/"} className="nav-link">
                Resume
              </NavLink>
            </li>
          </ul>
          <p className="online-content">Socials</p>
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink
                to={"https://www.instagram.com/imdinesh_yadav/"}
                target="_blank"
                className="nav-link"
              >
                Instagram
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"https://github.com/dinesh17775"}
                target="_blank"
                className="nav-link"
              >
                Github
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/"} className="nav-link">
                Linkedin
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/"} className="nav-link">
                Youtube
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/"} className="nav-link">
                stack overflow
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default RootNavLayout;
