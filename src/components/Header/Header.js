import React from "react";
import "./Header.css";

import TypeWriterEffect from "react-typewriter-effect";
import image1 from "./image1.png";

const Header = () => {
  return (
    <div className="bg2" id="home">
      <div className="container  ">
        <div className="row text-capitalize viewCont ">
          <div className="col-8 d-flex flex-column NameClass ">
            <h3>
              <span className="fs-5">Hey There!! I am</span> <br />
              <span className="fs-1 greenFont ">Hari Karumuri</span>
              <br />
              <span className="fs-4">
                <TypeWriterEffect
                  startDelay={2000}
                  cursorColor="#3F3D56"
                  multiText={[
                    "Coder",
                    "Developer",
                    "Gamer",
                    "3D-Artist",
                    "Student",
                    "Desginer",
                  ]}
                  multiTextDelay={1000}
                  typeSpeed={100}
                  multiTextLoop
                />
              </span>
            </h3>
            <p>
              I'm a student at Jain University, pursuing AI in CSE with a
              particular interest in web development, and I'm about to create an
              app called techcheck, an ecommerce software that recommends the
              ideal gadget for your specific needs.
            </p>
          </div>
          <div className="col d-flex justify-content-center align-items-center ImgClass">
            <figure>
              <img src={image1} alt=" me"  className="img-fluid"/>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
