import React from "react";
import { Provider } from "react-redux";
import TopBar from "./components/TopBar.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TitlePage from "./containers/TitlePage.js";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import ReviewForm from "./components/ReviewForm";
import AllGames from "./containers/AllGames"
import Review from "./components/Review"
import { api } from "./services/api";
import { createStore } from 'redux'
// const fetchGames = () => {
//   fetch("http://localhost3000/games")
//     .then((response) => response.json())
//     .then((data) => setState({ allGames: data }));
// };

// componentDidMount = () => {
//   fetchGames()
// }
const initialState = {
  allGames: [1, 2, 3, 4, 5],
  message: ""
}

const reducer = (state = initialState, action) => {
  console.log(state)
  switch (action.type) {
    case "MAP":
      return {...state, allGames: "this" }
      
    default:
      return state
  }
  
}

export const store = createStore(reducer)


export class App extends React.Component {
  

  
  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <body>
          <Provider store={store}>
          <Router>
            <TopBar />
            <Route exact path="/" component={TitlePage} />
            <Route exact path="/allgames" component={AllGames}/>
            <Route path="/allreviews" component={Review}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/signin" component={SignIn}/>
            <Route path="/reviewform" component={ReviewForm} />
            </Router>
          </Provider>
        </body>
      </div>
    );
  }
}