import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
export default class Menu extends Component {
  render() {
    return (
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="/" className="brand-link">
          <span className="brand-text font-weight-light">AdminLTE 3</span>:
          <span className="brand-text font-weight-light"> 1.190.000.000</span>
        </a>

        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar Menu */}

          <div className="user-panel d-flex">
            <div className="info">
              <div href="/" className="">
                <span className="brand-text font-weight-light text-white">
                  Trạng thái
                </span>
                :
                <span className="brand-text font-weight-900 ml-1 status success">
                  Online
                </span>
              </div>
            </div>
          </div>
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
              <li className="nav-item has-treeview mb-2">
                <NavLink exact to="/" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>Dashboard</p>
                </NavLink>
              </li>
              <li className="nav-item has-treeview mb-2">
                <NavLink to="/news" className="nav-link">
                  <i className="nav-icon far fa-newspaper" />
                  <p>Tin Tức</p>
                </NavLink>
              </li>
              <li className="nav-item has-treeview mb-2">
                <NavLink to="/user" className="nav-link">
                  <i className="nav-icon fas fa-users"></i>
                  <p>Quản lý User</p>
                </NavLink>
              </li>
              <li className="nav-item has-treeview mb-2">
                <NavLink to="/lenh" className="nav-link">
                  <i className="nav-icon far fa-list-alt" />
                  <p>Quản lý lệnh</p>
                </NavLink>
              </li>
              <li className="nav-item has-treeview mb-2">
                <NavLink to="/don" className="nav-link">
                  <i className="nav-icon fas fa-file-invoice" />
                  <p>Quản lý đơn</p>
                </NavLink>
              </li>
              <li className="nav-item has-treeview mb-2">
                <NavLink to="/giaodich" className="nav-link">
                  <i className="nav-icon fas fa-history" />
                  <p>Lịch sử giao dịch</p>
                </NavLink>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    );
  }
}
