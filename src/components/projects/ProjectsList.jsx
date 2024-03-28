import React, { useState, useEffect } from "react";
import Projects from "./Projects";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import learn from "../../images/learning.jpeg";
import music from "../../images/music.jpeg";
import shopping from "../../images/shopping.jpeg";
import weather from "../../images/weather.jpeg";
import fit from "../../images/fit.jpg";

const projects = [
  {
    id: 1,
    title: "Learning platform",
    img: learn,
  },
  {
    id: 2,
    title: "Music App",
    img: music,
  },
  {
    id: 3,
    title: "Shopping Cart",
    img: shopping,
  },
  {
    id: 4,
    title: "Weather App",
    img: weather,
  },
  {
    id: 5,
    title: "Fitness App",
    img: fit,
  },
];

function ProjectsList() {
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const mediaQueryAbove1000 = window.matchMedia("(min-width: 1000px)");
    const mediaQueryBetween700And1000 = window.matchMedia(
      "(min-width: 700px) and (max-width: 1000px)"
    );
    const mediaQueryBelow700 = window.matchMedia("(max-width: 700px)");

    function handleMediaChange() {
      if (mediaQueryAbove1000.matches) {
        setSlidesToShow(4);
      } else if (mediaQueryBetween700And1000.matches) {
        setSlidesToShow(3);
      } else if (mediaQueryBelow700.matches) {
        setSlidesToShow(0);
      }
    }

    handleMediaChange();

    const handleAbove1000Change = () => {
      if (!mediaQueryAbove1000.matches) return;
      handleMediaChange();
    };

    const handleBetween700And1000Change = () => {
      if (!mediaQueryBetween700And1000.matches) return;
      handleMediaChange();
    };

    const handleBelow700Change = () => {
      if (!mediaQueryBelow700.matches) return;
      handleMediaChange();
    };

    mediaQueryAbove1000.addEventListener("change", handleAbove1000Change);
    mediaQueryBetween700And1000.addEventListener(
      "change",
      handleBetween700And1000Change
    );
    mediaQueryBelow700.addEventListener("change", handleBelow700Change);

    return () => {
      mediaQueryAbove1000.removeEventListener("change", handleAbove1000Change);
      mediaQueryBetween700And1000.removeEventListener(
        "change",
        handleBetween700And1000Change
      );
      mediaQueryBelow700.removeEventListener("change", handleBelow700Change);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow: slidesToShow,
    slidesToScroll: 3,
  };

  return (
    <div className="projects">
      <p>My Projects</p>
      <div className="projects-section">
        {slidesToShow > 0 ? (
          <Slider {...settings} className="my-slider">
            {projects.map((item) => (
              <Projects key={item.id} projects={item} />
            ))}
          </Slider>
        ) : (
          projects.map((item) => <Projects key={item.id} projects={item} />)
        )}
      </div>
    </div>
  );
}

export default ProjectsList;
