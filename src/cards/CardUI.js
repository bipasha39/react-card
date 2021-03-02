import React from "react";
import { useHistory } from "react-router-dom";
import "./cards-style.css"

const Card = props => {
 let history = useHistory()
  function handleClick(e) {
    history.push("/weightLoss");
    e.preventDefault();
    // console.log('The link was clicked.');
  }

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
        <a href="#" onClick={handleClick} className="btn btn-outline">
          Read More
        </a>
      </div>
    </div>
  );
};
export default Card;
