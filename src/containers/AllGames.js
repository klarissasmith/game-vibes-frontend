import React from "react";
import CardContainer from "./CardContainer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { store } from "../App"

const AllGames = () => {
  return (
      <div>
          <h1> All Games: </h1>
      <Router>
        <Route
          path="/allgames"
          render={(props) => (
            <CardContainer />
          )}
        />
      </Router>
    </div>
  );
};

export default AllGames;
