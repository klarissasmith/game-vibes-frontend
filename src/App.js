import React from "react";
import TopBar from "./components/TopBar.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CardContainer from "./containers/CardContainer.js"
import TitlePage from "./components/TitlePage.js"

//CONSTANTS

const allGamesURL = ""

class App extends React.Component {
  
  state = {
    users: []
  }

  allUsers = () => {
    fetch("http://localhost:3000/users").then(data => this.setState({users: data}))
  }
  render() {
  console.log(this.state)
    return (
    <div className="App">
      <header className="App-header">
        <TopBar />
        <TitlePage/>
        <CardContainer/>
      </header>
      <body></body>
    </div>
  );
  }
}

export default App;
