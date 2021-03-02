import React, { Component } from "react";
import Card from "./CardUI";
import img1 from "../image/img1.jpg";
import img2 from "../image/img2.jpg";
import img3 from "../image/img3.jpg";
import { Route } from "react-router-dom";

class Cards extends Component {
  render() {
    return (
      <div container-fluid d-flex justify-content-center>
        <h1 className="heading">Did You Ever Noticed</h1>
        <div className="row">
          <div className="col-md-4">
            <Card
              img={img1}
              tittle="Weight Loss Pre-plan"
              description="Before going in weight loss journey one´s need to follow this basic understanding."
            />
          </div>
          <div className="col-md-4">
            <Card
              img={img2}
              tittle="Master of Well-being is Water "
              description="Water is an inorganic, transparent, tasteless, odorless, and nearly colorless chemical substance, which is the main constituent of Earth's hydrosphere and the fluids of all known living organisms. It is vital for all known forms of life, even though it provides no calories or organic nutrients"
            />
          </div>
          <div className="col-md-4">
            <Card
              img={img3}
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
