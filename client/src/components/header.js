import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Header extends React.Component {
  render() {
    console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            Emily
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="/auth/google">Login In With Google</a>
            </li>
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
