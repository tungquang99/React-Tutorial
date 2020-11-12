import React, { Component } from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./Contants/PrivateRoute";
import Lichsugd from "./Page/Lichsugd";
import HanMucDayThe from "./Page/HanMucDayThe";
import ListCard from "./Page/ListCard";
import Home from "./Page/Home";
import Baocao from "./Page/Baocao";
import Ruttien from "./Page/Ruttien";

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />

        <PrivateRoute path="/list-card" component={ListCard} />

        <PrivateRoute path="/han-muc-day-the" component={HanMucDayThe} />

        <PrivateRoute path="/rut-tien-ve-bank" component={Ruttien} />

        <PrivateRoute path="/lich-su-giao-dich" component={Lichsugd} />

        <PrivateRoute path="/bao-cao" component={Baocao} />
      </div>
    );
  }
}
