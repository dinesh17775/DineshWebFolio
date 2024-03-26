import React from "react";
import Projects from "./Projects";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const projects = [
  { id: 1, title: "Learning platform" },
  { id: 2, title: "Music App" },
  { id: 3, title: "Shoping Cart" },
  { id: 4, title: "Weather App" },
  { id: 5, title: "Personal Portofolio" },
];
function ProjectsList() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="projects">
      <p>My Projects</p>
      <div className="projects-section">
        <Slider {...settings} className="my-slider">
          {projects.map((item) => {
            return <Projects key={item.id} projects={item}></Projects>;
          })}
        </Slider>
      </div>
    </div>
  );
}

export default ProjectsList;
