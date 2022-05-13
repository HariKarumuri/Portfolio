import "./App.css";
import React from "react";
import Navbar from "./components/navbar/Nav";
import Header from "./components/Header/Header";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contacts/Contact";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home";

function App() {
  return (
    <Router >
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/Portfolio" index element={<Home />} />
          <Route exact path="/Portfolio/header" element={<Header />} />
          <Route exact path="/Portfolio/about" element={<About />} />
          <Route exact path="/Portfolio/portfolio" element={<Portfolio />} />
          <Route exact path="/Portfolio/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
