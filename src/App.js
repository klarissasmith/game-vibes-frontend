import React from "react";
import TopBar from "./components/TopBar.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TitlePage from "./containers/TitlePage.js";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import ReviewForm from "./components/ReviewForm";
import AllGames from "./containers/AllGames"
import Review from "./components/Review"
import { api } from "./services/api";




export class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <body>
          <Router>
            <TopBar />
            <Route exact path="/" component={TitlePage} />
            <Route exact path="/allgames" component={AllGames}/>
            <Route path="/allreviews" component={Review}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/signin" component={SignIn}/>
            <Route path="/reviewform" component={ReviewForm} />
            </Router>
        </body>
      </div>
    );
  }
}