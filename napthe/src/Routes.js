import React, { Component } from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./Contants/PrivateRoute";
import Dashboard from "./Page/Dashboard/Dashboard";
// import Lichsugd from "./Page/Lichsugd";
// import HanMucDayThe from "./Page/HanMucDayThe";
// import ListCard from "./Page/ListCard";
// import Home from "./Page/Home";
// import Baocao from "./Page/Baocao";
// import Ruttien from "./Page/Ruttien";
// import KetnoiApi from "./Page/KetnoiApi";

export default class Routes extends Component {
  render() {
    return (
      <div>
        <PrivateRoute exact path="/" component={Dashboard} />

        <PrivateRoute path="/list-card" />

        <PrivateRoute path="/han-muc-day-the" />

        <PrivateRoute path="/rut-tien-ve-bank" />

        <PrivateRoute path="/lich-su-giao-dich" />

        <PrivateRoute path="/bao-cao" />

        <PrivateRoute path="/ket-noi-api" />
      </div>
    );
  }
}
