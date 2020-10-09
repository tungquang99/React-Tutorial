import React, { Component } from "react";
import { getToken } from "../Contants/Common";

class Feature extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center"> Nổi Bật</h1>
        <p className="text-center">
          {" "}
          {getToken() ? "Chào mừng" + " " + sessionStorage.getItem("user") : ""}
        </p>
      </div>
    );
  }
}

export default Feature;
