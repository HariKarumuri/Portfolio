import React, { useState } from "react";
import Cards from "./Cards";
import Data from "./PortfolioApi";
import "./Portfolio.css";
import Categories from "./Categories";

const Portfolio = () => {
  const [projects, setProjects] = useState(Data);

  //filter fuctionality below that need to be sent as props
  const filterItems = (lang) => {
    if (lang === "all") {
      setProjects(Data);
      return;
    }
    const newData = Data.filter((item) => item.language === lang);
    setProjects(newData);
  };

  //now maping catergories of languages in here and sending them as props

  const allCategories = [
    'all',
    ...new Set(Data.map((item) => {
      return item.language;
    }))
    
  ];

  const [category, setCategory] = useState(allCategories);

  console.log(category);

  return (
    <div className="bg2 py-3" id="portfolio">
      <div className="container">
        <h6 className="text-white text-center" id="#portfolio">
          portfolio
        </h6>
        <h4 className="greenFont ">projects</h4>
        <div className="row">
          <Categories filterItems={filterItems} category={category} />
          {projects.map((val, index) => {
            return (
              <Cards
                key={index}
                title={val.title}
                des={val.des}
                language={val.language}
                image={val.image}
                link={val.link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
