import React from "react";

const cards = (props) => {
  return (
    <div>
      <div className="col-12 bg2 p-4 ExpCards ">
        <h3 className="Exp_Head">
          {props.Position} <span className="Exp_at">@</span>{" "}
          <span>{props.company}</span>
        </h3>
        <h5 className="Exp_duration">{props.duration}</h5>
        <p className="Exp_Desc">{props.desc}</p>
        <a href={props.img}>View certificate</a>
      </div>
    </div>
  );
};

export default cards;
