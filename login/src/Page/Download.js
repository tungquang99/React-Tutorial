import React, { Component } from "react";
import { getToken } from "../Contants/Common";

class Download extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Tải xuống</h1>
        <p className="text-center">
          {" "}
          {getToken() ? "Chào mừng" + " " + sessionStorage.getItem("user") : ""}
        </p>
      </div>
    );
  }
}

export default Download;
