import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { getToken } from "../Contants/Common";
import Login from "./Login";

function Header() {
  const [modalShow, setModalShow] = useState(false);
  const showModal = () => {
    getToken() ? setModalShow(false) : setModalShow(true);
  };
  return (
    <nav className="navbar navbar-expand-lg ml-auto " id="header-menu">
      <div className="container ">
        <div></div>
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                exact
                className="nav-link "
                activeClassName="active"
                to="/"
              >
                Trang chủ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link j"
                activeClassName="active"
                to="/list-card"
                onClick={() => showModal()}
              >
                Danh sách thẻ cào
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link "
                activeClassName="active"
                to="/han-muc-day-the"
                onClick={() => showModal()}
              >
                Hạn mức đẩy thẻ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/rut-tien-ve-bank"
                onClick={() => showModal()}
              >
                rút tiền về bank
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link "
                activeClassName="active"
                to="/lich-su-giao-dich"
                onClick={() => showModal()}
              >
                Lịch sử giao dịch
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link "
                activeClassName="active"
                to="/bao-cao"
                onClick={() => showModal()}
              >
                Báo cáo
              </NavLink>
            </li>
            <Login show={modalShow} onHide={() => setModalShow(false)} />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
