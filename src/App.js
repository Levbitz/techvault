import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";

import Footer from "./components/Footer";
import NavbarWrap from "./components/NavbarWrap/NavbarWrap";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <>
      <GlobalStyle />
      <NavbarWrap />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
