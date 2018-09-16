import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Payment from "./Payments";

class Header extends React.Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return "";
        break;
      case false:
        return <a href="/auth/google">Login In With Google</a>;
        break;
      default:
        return [
          <li key="1">
            <Payment />
          </li>,
          <li key="2">
            <a href="api/log_out">Logout</a>
          </li>
        ];
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            Emily
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}
function mapStateToProps(state) {
  return { auth: state.auth };
}
export default connect(mapStateToProps)(Header);
