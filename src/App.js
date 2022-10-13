import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";

import Footer from "./components/Footer";
import NavbarWrap from "./components/NavbarWrap/NavbarWrap";
import HomePage from "./Pages/HomePage/HomePage";
import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage";
import ServicesPage from "./Pages/SerivicesPage/ServicesPage";
import ScrollToTop from "./lib/ScrollTop/ScrollToTop";
import ContactPage from "./Pages/ContactPage/ContactPage";

function App() {
  return (
    <>
      <ScrollToTop />
      <GlobalStyle />
      <NavbarWrap />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
