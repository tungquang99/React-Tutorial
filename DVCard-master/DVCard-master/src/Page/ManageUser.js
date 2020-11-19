import React, { Component } from "react";
import Axios from "axios";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

export default class ManageUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  DataUser() {
    Axios.get("https://5f55deba39221c00167fb3b8.mockapi.io/api/users/users")
      .then((res) => {
        console.log(res);
        this.setState({ users: res.data });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  componentDidMount() {
    this.DataUser();
  }

  render() {
    const options = {
      page: 1, // which page you want to show as default
      sizePerPage: 10, // which size per page you want to locate as default
      pageStartIndex: 1, // where to start counting the pages
      paginationSize: 5, // the pagination bar size.
      prePage: "Prev", // Previous page button text
      nextPage: "Next", // Next page button text
      firstPage: "First", // First page button text
      lastPage: "Last", // Last page button text
      paginationShowsTotal: this.renderShowsTotal, // Accept bool or function
      paginationPosition: "bottom", // default is bottom, top and both is all available
      // hideSizePerPage: true > You can hide the dropdown for sizePerPage
      // alwaysShowAllBtns: true // Always show next and previous button
      // withFirstAndLast: false > Hide the going to First and Last page button
    };
   

    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-12">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Quản Lý Tài Khoản</a>
                  </li>
                </ol>
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
        {/* /.content-header */}
        {/* Main content */}
        <div className="content">
          <div className="container-fluid">
            <div className="card ">
              <div className="card-header">
                <h3 className="card-title">Tài Khoản </h3>
              </div>
            </div>
            <BootstrapTable
              data={this.state.users}
              pagination={true}
              options={options}
              selectRow={selectRowProp}
              insertRow 
              striped
              hover
            >
              <TableHeaderColumn dataField="id" isKey width='50'>
                ID
              </TableHeaderColumn>
              <TableHeaderColumn dataField="Fname">Tài Khoản</TableHeaderColumn>
              <TableHeaderColumn dataField="Phone">
                Số Điện Thoại
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="Status"
                dataFormat={enumFormatter}
                formatExtraData={statusCheck}
              >
                Trạng Thái
              </TableHeaderColumn>
              <TableHeaderColumn dataField="Money">Số tiền</TableHeaderColumn>
              <TableHeaderColumn dataField="creatAt">Tạo Lúc</TableHeaderColumn>
            </BootstrapTable>
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
    );
  }
}
const selectRowProp = {
  mode: "checkbox",
  bgColor: "silver",
};

const statusCheck = {
  true: `<span class=" status success">Online</span>`,
  false: `<span class="status error">Đang bị khóa</span>`,
};

function enumFormatter(cell, row, enumObject) {
  return enumObject[cell];
}
