import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./InnovationCarosel.css";

function InnovationCarosel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="InnovationCarosel_wrap">
      <Slider {...settings}>
        <div className="one">
          <div className="container">
            <h3>1</h3>
            <div className="content">
              <h4>HOME THEATER</h4>
            </div>
          </div>
        </div>
        <div className="two">
          <div className="container">
            <h3>2</h3>
            <div className="content">
              <h4>HGH FIDELITY AUDIO</h4>
            </div>
          </div>
        </div>
        <div className="three">
          <div className="container">
            <h3>3</h3>
            <div className="content">
              <h4>HOME AUTOMATION</h4>
            </div>
          </div>
        </div>

        <div className="four">
          <div className="container">
            <h3>4</h3>
            <div className="content">
              <h4>Lighting Control</h4>
            </div>
          </div>
        </div>
        {/*<div className="five">
          <div className="container">
            <h3>5</h3>
            <div className="content">
              <h4>fkjdfkjfdkfkdj</h4>
            </div>
          </div>
        </div>
        <div className="six">
          <div className="container">
            <h3>6</h3>
            <div className="content">
              <h4>fkjdfkjfdkfkdj</h4>
            </div>
          </div>
        </div>
        <div className="seven">
          <div className="container">
            <h3>7</h3>
            <div className="content">
              <h4>fkjdfkjfdkfkdj</h4>
            </div>
          </div>
        </div>
        <div className="eight">
          <div className="container">
            <h3>8</h3>
            <div className="content">
              <h4>fkjdfkjfdkfkdj</h4>
            </div>
          </div>
        </div>
        <div className="nine">
          <div className="container">
            <h3>9</h3>
            <div className="content">
              <h4>fkjdfkjfdkfkdj</h4>
            </div>
          </div>
  </div>*/}
      </Slider>
    </div>
  );
}

export default InnovationCarosel;
