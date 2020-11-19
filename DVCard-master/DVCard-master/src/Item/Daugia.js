import React, { Component } from "react";

export default class Daugia extends Component {
  checkMang = () => {
    if (this.props.mang === "Viettel") {
      return <span className="VT">{this.props.mang}: </span>;
    }
    if (this.props.mang === "VinaPhone") {
      return <span className="VN">{this.props.mang}: </span>;
    }
    if (this.props.mang === "MobiFone") {
      return <span className="MB">{this.props.mang}: </span>;
    }
  };
  render() {
    return (
      <li className="nav-item ml-2">
        {this.checkMang()}
        <small className="text-danger mr-1">
          <i className="fas fa-arrow-down" />
          {this.props.number}
        </small>
      </li>
    );
  }
}
