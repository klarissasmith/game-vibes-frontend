import React from 'react'
import TitleBanner from '../components/TitleBanner'
import CardContainer from './CardContainer'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const TitlePage = props => {
  console.log(props)
  
  return (
    <div>
      <Router>
        <Route exact path="/" component={TitleBanner} />
      <Route
        exact
        path="/"
        render={(props) => (
          <CardContainer {...props} allGames={props.allGames} />
        )}
      />
      </Router>
    </div>
  );
}

export default TitlePage