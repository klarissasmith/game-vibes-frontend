import React from "react";
import TopBar from "./components/TopBar.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TitlePage from "./containers/TitlePage.js";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import ReviewForm from "./components/ReviewForm";
import { api } from "./services/api";

//CONSTANTS
const usersURL = "http://localhost:3000/users";
// const allGamesURL = ""

class App extends React.Component {
  state = {
    auth: {
      user: {},
    },
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

  componentDidMount() {
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
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header"></header>
        <body>
          <Router>
            <TopBar />
            <Route exact path="/" render={() => <TitlePage />} />
            <Route exact path="/allgames" render={() => <TitlePage />} />
            <Route path="/signup" render={(props) => <SignUp {...props} onSignIn={this.onSignIn}/>} />
            <Route path="/signin" render={(props) => <SignIn {...props} />}/>
            <Route path="/reviewform" component={ReviewForm} />
          </Router>
        </body>
      </div>
    );
  }
}

export default App;
