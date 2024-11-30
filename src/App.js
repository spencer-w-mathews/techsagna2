// App.js
import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "../src/components/NavBar";
import Home from "../src/components/Home";
import About from "../src/components/About";
import Services from "../src/components/Services";
import Contact from "../src/components/Contact";
import ScrollToTop from "../src/components/ScrollToTop";

const App = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <footer className="footer">
        <p>© 2024 TechSagna | All Rights Reserved</p>
        <div className="social-media">
          <a href="https://twitter.com/techsagna">Bluesky</a>
          <a href="https://linkedin.com/company/techsagna">LinkedIn</a>
        </div>
      </footer>
    </HashRouter>
  );
};

export default App;
