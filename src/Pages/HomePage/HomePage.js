import React from "react";
import Hero from "../../components/Hero";
import About from "../../components/HomeComponents/About/About";
import DirectorInsight from "../../components/HomeComponents/DirectorInsight/DirectorInsight";
import HomePersepective from "../../components/HomeComponents/HomePersepective/HomePersepective";
import Illuminate from "../../components/HomeComponents/Illuminate/Illuminate";
import InnovationCarosel from "../../components/HomeComponents/InnovationCarosel/InnovationCarosel";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <HomePersepective />
      <Illuminate />
      <InnovationCarosel />
      <DirectorInsight />
    </>
  );
}

export default HomePage;
