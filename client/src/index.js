import React from "react";
import ReactDOM from "react-dom";
import materialieCSS from "materialize-css/dist/css/materialize.min.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import finalReducer from "./reducers";
import App from "./components/App";
import axios from "axios";
window.axios = axios;
window.saneer = "saneer";
const store = createStore(finalReducer, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
