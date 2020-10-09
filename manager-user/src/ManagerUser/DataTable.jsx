import React, { Component } from "react";
import User from "./User";

export default class DataTable extends Component {

  dataUser = () => this.props.Users.map((value,key) => (
      <User  UserName = {value.name} Phone={value.tel} Permission={value.permission} stt={key+1}/>
    ))

  render() {
    console.log(this.props.Users);
    return <div className="col">
        <div className="table-responsive|table-responsive-sm|table-responsive-md|table-responsive-lg|table-responsive-xl">
          <table className="table table-striped|table-dark|table-bordered|table-borderless|table-hover|table-sm">
            <thead className="thead-dark|thead-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Tên</th>
                <th scope="col">Điện Thoại</th>
                <th scope="col">Quyền</th>
                <th scope="col">Thao tác</th>
              </tr>
            </thead>
            <tbody>
                {this.dataUser()}
            </tbody>
          </table>
        </div>
    </div>;
  }
}
