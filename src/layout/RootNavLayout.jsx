import React from "react";
import "../styles/style.css";
import { MyAppContext } from "../contexts/Navcontext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFire,
  faCode,
  faFileAlt,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faGithub,
  faLinkedin,
  faYoutube,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

const NavItems = [
  { id: 1, title: "Home", link: "/", icon: faHome },
  { id: 2, title: "Trending", link: "/", icon: faFire },
  {
    id: 3,
    title: "Snippets",
    link: "https://github.com/dinesh17775",
    icon: faCode,
  },
  {
    id: 4,
    title: "Resume",
    link: "https://drive.google.com/file/d/1v56CvFaJjUtxGwp6BO4zNBrMubtMQ5I2/view?usp=sharing",
    icon: faFileAlt,
  },
];

const socialLinks = [
  {
    id: 1,
    title: "Instagram",
    link: "https://www.instagram.com/imdinesh_yadav/",
    icon: faInstagram,
  },
  {
    id: 2,
    title: "Github",
    link: "https://github.com/dinesh17775",
    icon: faGithub,
  },
  {
    id: 3,
    title: "Linkedin",
    link: "https://www.linkedin.com/in/nandyala-dinesh-8679651a0/",
    icon: faLinkedin,
  },
  {
    id: 4,
    title: "Youtube",
    link: "https://www.youtube.com/",
    icon: faYoutube,
  },
  {
    id: 5,
    title: "Stack Overflow",
    link: "https://stackoverflow.com/",
    icon: faStackOverflow,
  },
];

function RootNavLayout() {
  const { NavOpen, IsNavOpen } = MyAppContext();

  return (
    <>
      <nav className={`nav-bar ${NavOpen ? "showNav" : ""}`}>
        <div className="nav-container">
          <div className="close">
            <FontAwesomeIcon
              icon={faXmark}
              className={` ${NavOpen ? "showClose" : ""}`}
              onClick={() => IsNavOpen(!NavOpen)}
              size="2xl"
            ></FontAwesomeIcon>
          </div>
          <ul className="nav-list">
            {NavItems.map((item) => (
              <li className="nav-item" key={item.id}>
                <a href={item.link} className={"nav-link"} target="_blank">
                  <FontAwesomeIcon icon={item.icon} className="nav-icon" />
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <p className="online-content">Socials</p>
          <ul className="nav-list">
            {socialLinks.map((item) => (
              <li className="nav-item" key={item.id}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  <FontAwesomeIcon icon={item.icon} className="nav-icon" />
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default RootNavLayout;
