import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container text-center">
            <h1 className="display-4">Quản lý thành viên</h1>
            <p className="lead">Project làm bằng ReactJs và dữ liệu Json</p>
          </div>
        </div>
      </div>
    );
  }
}
