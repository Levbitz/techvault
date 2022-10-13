import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Vid from "../../images/1.mp4";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from "./HeroElements";

const Hero = () => {
  return (
    <div>
      <video
        autoPlay={true}
        muted={true}
        loop={true}
        width={"100%"}
        height={"50%"}
        src={Vid}
      ></video>
    </div>
  );
};

export default Hero;
