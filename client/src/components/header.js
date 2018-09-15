import React from "react";
import PropTypes from "prop-types";

class Header extends React.Component {
  render() {
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

export default Header;
