import "./App.css";
import React from "react";
import Navbar from "./components/navbar/Nav";
import Header from "./components/Header/Header";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contacts/Contact";
import Footer from "./components/footer/Footer";
import Experinece from "./components/experience/experience";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home";
import Services from './components/Services/Services';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" index element={<Home />} />
          <Route exact path="/header" element={<Header />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/experience" element={<Experinece />} />
          <Route exact path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
