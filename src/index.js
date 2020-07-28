import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from "react-redux";
import { gameReducer } from "./reducer"
import './index.css';
import {App} from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={createStore(gameReducer), applyMiddleware(thunk)}>
    <App />
 </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
