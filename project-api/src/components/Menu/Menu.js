import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

const menus = [
  {
    name: "Trang Chủ",
    to: "/",
    exact: true,
  },
  {
    name: "Sản Phẩm",
    to: "/product-list",
    exact: false,
  },
];

const MenuLink = ({ label, to, activeOnlywhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlywhenExact}
      children={({ match }) => {
        var active = match ? "active" : "";
        return (
          <li className={`nav-item ${active}`}>
            <Link className="nav-link" to={to}>
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
};

class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Shop
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            {this.showMenus(menus)}
          </ul>
        </div>
      </nav>
    );
  }

  showMenus = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            activeOnlywhenExact={menu.exact}
          />
        );
      });
    }
    return result;
  };
}

export default Menu;
