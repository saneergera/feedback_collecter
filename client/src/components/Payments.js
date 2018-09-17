import React from "react";
import PropTypes from "prop-types";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Payment extends React.Component {
  render() {
    return (
      <StripeCheckout
        name="Emily"
        description="$5 for 5 emails"
        amount={500}
        token={token => {
          this.props.stripe(token);
        }}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <a className="waves-effect waves-light btn-small">
          <i className="material-icons right" />Add Credits
        </a>
      </StripeCheckout>
    );
  }
}

export default connect(
  null,
  actions
)(Payment);
