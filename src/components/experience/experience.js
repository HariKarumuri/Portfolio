import React, { useState } from "react";
import Cards from "./cards";
import CertificateImg1 from "./img1.jpg";
import "./experience.css";
import Data from "./experienceApi";

const experience = () => {
  const [projects, setProjects] = useState(Data);

  return (
    <>
      <div className="bg1 p-5 ">
        <div className="container ">
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
