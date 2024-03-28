import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/style.css";
import { MyAppContext } from "../contexts/Navcontext";
function RootNavLayout() {
  const { NavOpen, IsNavOpen } = MyAppContext();
  return (
    <>
      <nav className={`nav-bar ${NavOpen ? "showNav" : ""}`}>
        <div className="nav-container">
          <button
            className={`close ${NavOpen ? "showClose" : ""}`}
            onClick={() => {
              return IsNavOpen(!NavOpen);
            }}
          >
            close
          </button>
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
