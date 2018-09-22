import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import Surveyfield from "./Surveyfield";
const value = [
  { lable: "Survey Title", name: "title" },
  { lable: "Subject Line", name: "subject" },
  { lable: "Email body", name: "body" },
  { lable: "Recipient List", name: "emails" }
];

class SurveyForm extends React.Component {
  renderComponent() {
    return value.map(function(a) {
      return (
        <Field
          lable={a.lable}
          name={a.name}
          component={Surveyfield}
          type="text"
        />
      );
    });
  }
  render() {
    return (
      <form>
        {this.renderComponent()}

        <Link
          to="/dashboard"
          className="waves-effect waves-light btn-small  white-text"
        >
          Cancel
        </Link>

        <button
          type="submit"
          className="waves-effect waves-light btn-small right white-text"
        >
          Next
          <i class="material-icons right">check</i>
        </button>
      </form>
    );
  }
}

SurveyForm = reduxForm({
  form: "survey"
})(SurveyForm);
export default SurveyForm;
