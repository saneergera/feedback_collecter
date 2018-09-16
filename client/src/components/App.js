import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./header";
import { connect } from "react-redux";
import * as actions from "../actions";

const intro = function() {
  return <h1>INTRO</h1>;
};
const surveys = function() {
  return <h1>Surveys</h1>;
};
const newsurvey = function() {
  return <h1>newsurvey</h1>;
};

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <div className="container">
              <Route exact path="/" component={intro} />
              <Route exact path="/surveys" component={surveys} />
              <Route path="/surveys/new" component={newsurvey} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
