import React from "react";
import TopBar from "./components/TopBar.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TitlePage from "./containers/TitlePage.js";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import ReviewForm from "./components/ReviewForm";
import AllGames from "./containers/AllGames"
import { api } from "./services/api";

//CONSTANTS
const usersURL = "http://localhost:3000/users";
// const allGamesURL = ""

class App extends React.Component {
  state = {
    auth: {
      user: {},
    },
    allGames: []
  };

  // used in submitting login Form, sets App state and token for user
  onSignIn = (data) => {
    const updatedState = {
      ...this.state.auth,
      user: { id: data.id, username: data.username },
    };
    localStorage.setItem("token", data.jwt);
    this.setState({ auth: updatedState });
  };

  onLogout = () => {
    localStorage.removeItem("token");
    this.setState({ auth: { user: {} } });
  };

  allGames = () => {
    fetch("http://localhost:3000/api/v1/games").then(response => response.json()).then(data => this.setState({ allGames: data}))

  }

  componentDidMount() {
    this.allGames()
    const token = localStorage.getItem("token");

    // IF TOKEN EXISTS, CALLS GETCURRENTUSER FUNCTION FROM API AND SETS STATE
    if (token) {
      api.auth.getCurrentUser().then((user) => {
        const updatedState = { ...this.state.auth, user: user };
        this.setState({ auth: updatedState });
      });
    }
  }
  render() {
    // console.log(this.state);
    return (
      <div className="App">
        <header className="App-header"></header>
        <body>
          <Router>
            <TopBar />
            <Route exact path="/" render={(props) => <TitlePage {...props} allGames={this.state} />} />
            <Route
              exact
              path="/allgames"
              render={(props) => (
                <AllGames {...props} allGames={this.state.allGames} />
              )}
            />
      
            <Route
              path="/signup"
              render={(props) => <SignUp {...props} onSignIn={this.onSignIn} />}
            />
            <Route path="/signin" render={(props) => <SignIn {...props} />} />
            <Route path="/reviewform" component={ReviewForm} />
          </Router>
        </body>
      </div>
    );
  }
}

export default App;