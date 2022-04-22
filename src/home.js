import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contacts/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
