import React from "react";
import CardContainer from "./CardContainer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const AllGames = (props) => {
  console.log(props);

  return (
      <div>
          <h1> All Reviews: </h1>
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
