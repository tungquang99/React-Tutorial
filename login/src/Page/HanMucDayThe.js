import React, { Component } from "react";
import Hanmucdaythe from "../Component/Hanmucdaythe/Hanmucdaythe";
import NganHang from "../Component/Home/NganHang";

import TichhopApi from "../Component/Home/TichhopApi";
import MyCk from "../Component/MyCk";

class HanMucDayThe extends Component {
  render() {
    return (
      <div>
        <MyCk />
        <div id="contain">
          <div className="container">
            <div className="muathe mt-5 ">
              <Hanmucdaythe />
            </div>
            <TichhopApi />
            <NganHang />
          </div>
        </div>
      </div>
    );
  }
}

export default HanMucDayThe;
