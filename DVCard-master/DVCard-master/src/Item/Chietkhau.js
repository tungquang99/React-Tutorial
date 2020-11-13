import React, { Component } from "react";

export default class Chietkhau extends Component {
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
    if (this.props.mang === "K-Plus") {
      return <span className="kplus">{this.props.mang}: </span>;
    }
  };

  checkMang2 = () => {
    if (this.props.mang2 === "VT Bắn Tiền") {
      return <span className="VT">{this.props.mang2}: </span>;
    }
    if (this.props.mang2 === "VN Bắn Tiền") {
      return <span className="VN">{this.props.mang2}: </span>;
    }
    if (this.props.mang2 === "MB Bắn Tiền") {
      return <span className="MB">{this.props.mang2}: </span>;
    }
    if (this.props.mang2 === "SMS Nạp Game") {
      return <span className="sms">{this.props.mang2}: </span>;
    }
  };

  render() {
    return (
      <a href="/" className="dropdown-item">
        <ul className="navbar-nav d-flex justify-content-between">
          <li className="nav-item">
            {this.checkMang()}
            <small className="text-danger mr-1">
              <i className="fas fa-arrow-down" />
              {this.props.number1}
            </small>
          </li>
          <li className="nav-item ">
          {this.checkMang2()}
            <small className="text-danger mr-1">
              <i className="fas fa-arrow-down" />
              {this.props.number2}
            </small>
          </li>
        </ul>
      </a>
    );
  }
}
