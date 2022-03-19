import React from 'react';
import {
    NavLink
  } from "react-router-dom";
import './NavBar.css';

class NavBar extends React.Component {
    render() {
      return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light mx-1">
          <a class="navbar-brand" href="#">React Demo</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
              <li class="nav-item active">
                <NavLink
                  to="/"
                  className="nav-link"
                  activeClassName="selected"
                >
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                    to="/about"
                    className="nav-link"
                    activeClassName="selected"
                  >
                    About
                </NavLink>
              </li>
              </ul>
          </div>
        </nav>
      );
    }
}

export default NavBar;
