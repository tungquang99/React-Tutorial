import React, { Component } from "react";

export default class User extends Component {

    checkPermis = () => {
        if(this.props.Permission == 1) {return "Admin";}
        else if (this.props.Permission == 2) {return "Moderator";}
        else {return "Normal User"}
    }

  render() {
    return (
      <tr>
        <th scope="row">{this.props.stt}</th>
        <td>{this.props.UserName}</td>
        <td>{this.props.Phone}</td>
        <td> {this.checkPermis()}</td>
        <td>
          <div className="btn btn-warning edit">Sửa</div>
          <div className="btn btn-danger delete">Xóa</div>
        </td>
      </tr>
    );
  }
}
