import React from "react";
import "./Card.css";

const Card = ({emoji, heading , detail, buttonText, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button">{buttonText}</button>
    </div>
  );
};

export default Card;
