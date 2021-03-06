import React from "react";
import "./weightLoss.css"

import { Link } from "react-router-dom";

const WeightLoss = () => {
  return (
    <div className="main">
      <h1>
        Weight Loss
      </h1>
      <p className="text">
        A person's body can go without oxygen for approximately five to ten
        minutes and around three to eight days without water. Yet remarkably,
        people have been known to live for more than seventy days without food.
        The question that arises is, 'How can this be?' The answer to this
        question lies in a series of evolved physiological and metabolic
        defenses that work to keep a person alive for as long as possible in the
        event they do not have access to food. Just because a person is starving
        does not mean they have become helpless. What follows is an explanation
        of how a person's body fights to keep them alive and active.
      </p>
      <div className="image">
          <img src="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2018/06/weight-loss-battle-1.jpg"/>  
      </div>
    </div>
  );
};
export default WeightLoss;
