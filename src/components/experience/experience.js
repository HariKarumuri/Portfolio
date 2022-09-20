import React from "react";
import Cards from "./cards";
import CertificateImg1 from './img1.jpg'
import "./experience.css"

const experience = () => {
  return (
    <div>
      <div className="bg1 ">
        <div className="container vh-100">
          <h6 className="text-white text-center" id="about">
            Experiences
          </h6>
          <h3 className="Exp_Head">
            Front-End designer Intern <span className="Exp_at">@</span> <span>Gurukul Bytes</span>
          </h3>
          <h5 className="Exp_duration">12th May - 13th July</h5>
          <p className="Exp_Desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            aliquid reprehenderit quia illum, error voluptatibus explicabo
            recusandae corporis natus minus consequuntur officiis quibusdam,
            dolorum voluptate doloribus vero sed, neque maiores accusantium?
            Laborum eius totam nostrum laboriosam tempora voluptates sit dolorem
            aliquam? Quisquam incidunt perferendis molestiae dolorum et
            recusandae quo repudiandae?
          </p>
          <a href="">View certificate</a>
        </div>
      </div>
    </div>
  );
};

export default experience;
