import React from "react";
import Cards from "./cards/Cards";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  
} from "react-router-dom";
import WeightLoss from "./pages/weightLoss/WeightLoss";
import Water from "./pages/water/Water";
import Starvation from "./pages/starvation/Starvation";

function App() {
  return (
    <Router>
    <div className="App">
    
      <Switch>
      <Route path="/weightLoss">
        <WeightLoss />
      </Route>
      <Route path="/water">
        <Water />
      </Route>
      <Route path="/starvation">
        <Starvation />
      </Route>
      <Route path="/">
        <Cards />
      </Route>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
