import React from "react";

import "./cards-style.css"

const Card = props => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={props.img} alt="water" className="card-img-top"/>
      </div>
      <div className="card-body text-dark">
        <h4 className="card-tittle">{props.tittle}</h4>
        <p className="card-text text-secondary">
          {props.description}
        </p>
        <a href="#" className="btn btn-outline">
          Go anywhere
        </a>
      </div>
    </div>
  );
};
export default Card;
