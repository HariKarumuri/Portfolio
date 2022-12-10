import React, { useState } from "react";
import Cards from "./cards";
import CertificateImg1 from "./img1.jpg";
import "./experience.css";
import Data from "./experienceApi";

const experience = () => {
  const [projects, setProjects] = useState(Data);

  return (
    <>
      <div className="bg1 p-3 ">
        <div className="container ">
        <h6 className="text-white text-center" id="#experience">
        experience
        </h6>
          <div className="row g-4">
            {projects.map((val, ind) => {
              return (
                <Cards
                  key={ind}
                  Position={val.Position}
                  company={val.company}
                  duration={val.duration}
                  desc={val.desc}
                  img={val.img}
                  others={val.others}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default experience;
