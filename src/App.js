import React from "react";
import TopBar from "./components/TopBar.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CardContainer from "./containers/CardContainer.js"
import TitlePage from "./components/TitlePage.js"

function App() {
  
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

export default App;
