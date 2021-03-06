import React, { Component } from "react";
import Card from "./CardUI";
import img1 from "../image/img1.jpg";
import img2 from "../image/img2.jpg";
import img3 from "../image/img3.jpg";
import { Route } from "react-router-dom";

class Cards extends Component {
  render() {
    return (
      
      <div className="container">

        <div className="headline">
        <h1 className="heading">Did You Ever Noticed</h1>
        </div>
          
        <div className="row">
          <div className="col-md-4">
            
            <Card
              img={img1}
              tittle="Weight Loss Pre-plan"
              description="Before going in weight loss journey one´s need to follow this basic understanding."
              redirectTo="/weightLoss"
            />
          </div>
          <div className="col-md-4">
            <Card
              img={img2}
              tittle="Master of Well-being is Water "
              redirectTo="/water"
              description="Water is an inorganic, transparent, tasteless, odorless, and nearly colorless chemical substance"
            />
          </div>
          <div className="col-md-4">
            <Card
              img={img3}
              redirectTo="/starvation"
              tittle="Eat Less Live More"
              description="People don´t die if they don´t eat eventually they suffer if they eat ."
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Cards;
