import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="bg1 py-3 about ">
      <div className="container ">
        <h6 className="text-white text-center" id="about">
          About Me
        </h6>
        <h4 className="greenFont ">My Skills</h4>
        <div className="row">
          <div className="col d-flex flex-column  ">
            <p className="text-white">Programmig languages</p>

            <ul>
              <li>C</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>python</li>
              <li>R</li>
              <li>SQL</li>
              <li>Data structure</li>
            </ul>
          </div>
          <div className="col d-flex flex-column ">
            <p className="text-white">FrameWorks</p>
            <ul>
              <li>html</li>
              <li>Css</li>
              <li>express</li>
              <li>React js</li>
              <li>node js</li>
              <li>MongoDB</li>
              <li>github</li>
              <li>NPM</li>
              <li>Spline-3d</li>
              <li>Fire-base</li>
            </ul>
          </div>
          <div className="col d-flex flex-column ">
            <p className="text-white">others</p>
            <ul>
              <li>blender-3d</li>
              <li>adobe xd</li>
              <li>figma</li>
              <li>canva</li>
              <li>Adobe Premiere Pro</li>
              <li>Adobe photoshop</li>
              <li>Adobe color</li>
              <li>Ubuntu</li>
              <li>bootstrap</li>
              <li>unity</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
