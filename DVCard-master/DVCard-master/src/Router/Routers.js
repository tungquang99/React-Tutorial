import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "../Page/Dashboard";
import ManageUser from "../Page/ManageUser";
import ManageLenh from "../Page/ManageLenh";
import ManageDon from "../Page/ManageDon";
import News from "../Page/News";
import LichsuGiaoDich from "../Page/LichsuGiaoDich";

export default class Routers extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/news" component={News} />
        <Route exact path="/user" component={ManageUser} />
        <Route exact path="/lenh" component={ManageLenh} />
        <Route exact path="/don" component={ManageDon} />
        <Route exact path="/giaodich" component={LichsuGiaoDich} />
      </div>
    );
  }
}
