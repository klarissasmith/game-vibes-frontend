import React from "react";
import TopBar from "./components/TopBar.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TitlePage from "./containers/TitlePage.js";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

//CONSTANTS
const usersURL = "http://localhost:3000/users";
// const allGamesURL = ""

class App extends React.Component {
  state = {
    users: [],
  };

  allUsers = () => {
    fetch(usersURL)
      .then((response) => response.json())
      .then((data) => this.setState({ users: data }));
  };

  componentDidMount = () => {
    this.allUsers();
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header"></header>
        <body>
          <Router>
            <TopBar />
            <Route exact path="/" render={() => <TitlePage />} />
            <Route exact path="/allgames" render={() => <TitlePage />} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
          </Router>
        </body>
      </div>
    );
  }
}

export default App;
