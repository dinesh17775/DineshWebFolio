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
    const mediaQuery = window.matchMedia("(max-width:1000px)");
    console.log(mediaQuery);
    function handleMediaChange(mediaQuery) {
      if (mediaQuery.matches) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    }
    handleMediaChange(mediaQuery);
    mediaQuery.addEventListener("change", () => {
      handleMediaChange(mediaQuery);
    });
    return () => {
      mediaQuery.removeEventListener("change", () => {
        handleMediaChange(mediaQuery);
      });
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
        <Slider {...settings} className="my-slider">
          {projects.map((item) => (
            <Projects key={item.id} projects={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ProjectsList;
