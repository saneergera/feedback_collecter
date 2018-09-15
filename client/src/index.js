import React from "react";
import ReactDOM from "react-dom";
import materialieCSS from "materialize-css/dist/css/materialize.min.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import reduxThunk from "redux-thunk";
import reducer1 from "./reducers";

const store = createStore(reducer1, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
