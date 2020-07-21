import React from 'react'
import TitleBanner from '../components/TitleBanner'
import CardContainer from './CardContainer'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const TitlePage = props => {
    return (
      <div>
      <Route exact path="/" component={TitleBanner} />
      <Route exact path="/" component={CardContainer} />
      <Route path="/allgames" component={CardContainer} />
      </div>
    );
}

export default TitlePage