import React, { Component } from "react";
import CkItem from "./CkItem";

export default class BangGiaCk extends Component {
  render() {
    return (
      <div className="banggiack mt-5">
        <div id="accordion">
          <CkItem title="Viettel" number="One" />
          <CkItem title="MobiFone" number="Two" />
          <CkItem title="VinaPhone" number="Three" />
        </div>
      </div>
    );
  }
}
