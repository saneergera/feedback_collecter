import React from "react";
import PropTypes from "prop-types";

class Surveyfield extends React.Component {
  render() {
    const x = this.props.input;
    console.log(x);
    return (
      <div>
        <lable>{this.props.lable}</lable>
        <input type="text" {...x} />
      </div>
    );
  }
}

export default Surveyfield;
