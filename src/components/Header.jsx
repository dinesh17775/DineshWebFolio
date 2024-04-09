import React from "react";
import "../styles/style.css";
import dinesh from "../images/cropped-dinesh.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
function Header() {
  function handleInsta(link) {
    window.open(link, "_blank");
  }
  return (
    <main className="details">
      <div className="details-container">
        <div className="profile-pic">
          <img src={dinesh} alt="" className="display-pic" />
        </div>

        <div className="detailsWrapper">
          <div className="profile-name">
            <h2>Nandyala Dinesh</h2>
          </div>
          <div
            className="follow-btn"
            onClick={() => {
              return handleInsta("https://www.instagram.com/imdinesh_yadav/");
            }}
          >
            <button className="social-Insta-btn">
              <FontAwesomeIcon
                icon={faInstagram}
                className="InstaIcon"
                size="2xl"
              ></FontAwesomeIcon>
              <p>Follow me on Instagram</p>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Header;
