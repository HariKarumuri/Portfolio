import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";


const TopBtn = () => {
  return (
   <div className="container-fluid bg1 arrowContainer">
     <a href="#home"><i className='topArrow'><FontAwesomeIcon icon={faArrowUp} /></i></a>
      
   </div>
      
   
  )
}

export default TopBtn
