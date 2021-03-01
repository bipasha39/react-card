import React, { Component } from "react";
import Card from "./CardUI";
import img1 from "../image/img1.jpeg";
import img2 from "../image/img2.jpg";
import img3 from "../image/img3.jpg";
class Cards extends Component {
  render() {
    return (
      <div container-fluid d-flex justify-content-center>
        <div className="row">
          <div className="col-md-4">
            <Card img={img1} tittle="How To Drink Water" description="Water is indeed essential for all life on, in, and above the Earth. This is important to you because you are made up mostly of water. Find out what water does for the human body."/>
          </div>
          <div className="col-md-4">
            <Card img={img2} tittle="When to Drink" description="Water is an inorganic, transparent, tasteless, odorless, and nearly colorless chemical substance, which is the main constituent of Earth's hydrosphere and the fluids of all known living organisms. It is vital for all known forms of life, even though it provides no calories or organic nutrients"/>
          </div>
          <div className="col-md-4" >
            <Card img={img3}tittle="Which Form To Drink" description="Water is made up of hydrogen and oxygen, and it exists in gaseous, liquid, and solid states. Water is one of the most plentiful and essential compounds, occurring as a liquid on Earth's surface under normal conditions, which makes it invaluable for human uses and as plant and animal habitat."/>
          </div>
        </div>
      </div>
    );
  }
}
export default Cards;
