import React, { Component, useState } from "react";
import { NavLink } from "react-router-dom";
import { getToken } from "../Contants/Common";
import Login from "./Login";
import TopBar from "./TopBar";

function Header() {
  const [modalShow, setModalShow] = useState(false);
  const showModal = () => {
    getToken() ? setModalShow(false) : setModalShow(true);
  };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light  bg-warning text-white mt-5"
      id="mainNav"
    >
      <div className="container">
        <NavLink className="navbar-brand js-scroll-trigger" to="/">
          Start Bootstrap
        </NavLink>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink exact className="nav-link js-scroll-trigger" activeClassName="active" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link js-scroll-trigger" activeClassName="active" to="/download">
                Download
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link js-scroll-trigger"
                activeClassName="active"
                to="/feature"
                onClick={() => showModal()}
              >
                Features
              </NavLink>
              <Login show={modalShow} onHide={() => setModalShow(false)} />
              <TopBar />
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link js-scroll-trigger"
                activeClassName="active"
                to="/contact"
                onClick={() => showModal()}
              >
                Contact
              </NavLink>
              <Login show={modalShow} onHide={() => setModalShow(false)} />
              <TopBar />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
