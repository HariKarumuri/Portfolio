import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contacts/Contact";
import TopBtn from "./components/TopBtn";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <TopBtn/>
    </div>
  );
}

export default App;
