import React from "react";
import Hero from "../../components/Hero";
import About from "../../components/HomeComponents/About/About";
import HomePersepective from "../../components/HomeComponents/HomePersepective/HomePersepective";
import Illuminate from "../../components/HomeComponents/Illuminate/Illuminate";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <HomePersepective />
      <Illuminate />
    </>
  );
}

export default HomePage;
