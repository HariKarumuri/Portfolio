import React from 'react'

const cards = (props) => {
  return (
    <div>
      
          <h3>{props.Position} <span>{props.Company}</span></h3>
          <h5>{props.duration}</h5>
          <p>{props.desc}</p>
          <img src={props.img} alt="" />
          <a href={props.others}></a>
    </div>
  )
}

export default cards
