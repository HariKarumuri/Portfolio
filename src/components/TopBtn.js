import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const TopBtn = () => {
  return (
    <div className="container-fluid bg1 arrowContainer">
      
        <i className="topArrow" onClick={()=>{
          window.scroll(0,0);
        }}>
          <FontAwesomeIcon icon={faArrowUp} />
        </i>
      
    </div>
  );
};

export default TopBtn;
