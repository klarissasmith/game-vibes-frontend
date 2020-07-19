import React from 'react';
import TopBar from './components/TopBar.js'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopBar/>
      </header>
      <body>

      </body>
    </div>
  );
}

export default App;
