import React, { Component } from "react";
import NganHang from "../Component/Home/NganHang";
import TichhopApi from "../Component/Home/TichhopApi";
import Lichsugiaodich from "../Component/Lichsu/Lichsugiaodich";
import MyCk from "../Component/MyCk";


class Lichsugd extends Component {
  render() {
    return (
      <div>
      <MyCk />
      <div id="contain">
        <div className="container">
          <div className="muathe mt-5 ">
            <Lichsugiaodich />
          </div>
          <TichhopApi />
          <NganHang />
        </div>
      </div>
    </div>
    );
  }
}

export default Lichsugd;
