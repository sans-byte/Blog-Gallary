import React from "react";
import "./Card.css";

function Card({img,title}) {
  return (
    <div className="card">
      <img src={`${img}`} />
      <div className="container">
        <p>{`${title}`}</p>
      </div>
    </div>
  );
}

export default Card;
