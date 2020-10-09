import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink  } from "react-router-dom";
export default class Header extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
          id="sideNav"
        >
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <span className="d-block d-lg-none">Clarence Taylor</span>
            <span className="d-none d-lg-block">
              <img
                className="img-fluid img-profile rounded-circle mx-auto mb-2"
                src="img/profile.jpg"
                alt=""
              />
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/about" className="nav-link js-scroll-trigger" >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/experience" className="nav-link js-scroll-trigger">
                  Experience
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/education" className="nav-link js-scroll-trigger">
                  Education
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/skills" className="nav-link js-scroll-trigger">
                  Skills
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link js-scroll-trigger">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
