import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./header";
import { connect } from "react-redux";
import * as actions from "../actions";
import Dashboard from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew";

const intro = function() {
  return <h1>INTRO</h1>;
};
const surveys = function() {
  return <h1>Surveys</h1>;
};

const dashboard = function() {
  return <Dashboard />;
};
const surveyNew = function() {
  return <SurveyNew />;
};
class App extends React.Component {
  componentWillMount() {
    this.props.fetchUser();
    console.log("isne bhi");
  }
  render() {
    console.log("render1");
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <div className="container">
              <Route exact path="/" component={intro} />
              <Route exact path="/surveys" component={surveys} />
              <Route path="/surveys/new" component={surveyNew} />
              <Route path="/dashboard" component={dashboard} />
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
