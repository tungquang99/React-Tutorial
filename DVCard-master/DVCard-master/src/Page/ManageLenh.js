import React, { Component } from "react";
import Axios from "axios";
import {
  BootstrapTable,
  TableHeaderColumn,
  ButtonGroup,
} from "react-bootstrap-table";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class ManageLenh extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  DataUser() {
    Axios.get("https://5f55deba39221c00167fb3b8.mockapi.io/api/users/lenh")
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

  createCustomButtonGroup = (props) => {
    return (
      <ButtonGroup className="my-custom-class" sizeClass="btn-group-md">
        <button type="button" className={`btn btn-primary`}>
          MyCustomBtn
        </button>
        <button type="button" className={`btn btn-primary`}>
          MyCustomBtn
        </button>
        <button type="button" className={`btn btn-primary`}>
          MyCustomBtn
        </button>
      </ButtonGroup>
    );
  };

  render() {
    const options = {
      page: 1, // which page you want to show as default
      sizePerPage: 10, // which size per page you want to locate as default
      pageStartIndex: 1, // where to start counting the pages
      paginationSize: 5, // the pagination bar size.
      prePage: <i class="fas fa-angle-left"></i>, // Previous page button text
      nextPage: <i class="fas fa-angle-right"></i>, // Next page button text
      firstPage: "First", // First page button text
      lastPage: "Last", // Last page button text
      paginationShowsTotal: this.renderShowsTotal, // Accept bool or function
      paginationPosition: "bottom", // default is bottom, top and both is all available
      btnGroup: this.createCustomButtonGroup,
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
                    <a href="/">Quản Lý Lệnh</a>
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
                <h3 className="card-title">Lệnh </h3>
              </div>
            </div>
          </div>
          <BootstrapTable
            data={this.state.users}
            pagination={true}
            options={options}
            selectRow={selectRowProp}
            striped
            hover
          >
            <TableHeaderColumn dataField="name" isKey={true} dataFormat={getID}>
              Tài Khoản
            </TableHeaderColumn>
            <TableHeaderColumn dataField="daugia" width="80">
              ĐGiá
            </TableHeaderColumn>
            <TableHeaderColumn dataField="cannap">Cần Nạp</TableHeaderColumn>
            <TableHeaderColumn dataField="danap">Đã Nạp</TableHeaderColumn>
            <TableHeaderColumn dataField="mang" width="100">
              Mạng
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="status"
              dataFormat={enumFormatter}
              formatExtraData={statusCheck}
            >
              Trạng Thái
            </TableHeaderColumn>
            <TableHeaderColumn dataField="mess">Thông Tin</TableHeaderColumn>
            <TableHeaderColumn dataField="button" dataFormat={buttonFormatter}>
              Quản Lý Lệnh
            </TableHeaderColumn>
            <TableHeaderColumn dataField="daily">Đại Lý</TableHeaderColumn>
            <TableHeaderColumn dataField="sualuc">Sửa Lúc</TableHeaderColumn>
            <TableHeaderColumn dataField="taoluc">Tạo Lúc</TableHeaderColumn>
          </BootstrapTable>
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
  true: `<span class="status success" >Hoàn thành</span>`,
  false: `<span class="status watting">Chờ xử lý</span>`,
};

function getID(cell, row) {
  return (
    <div>
      <Link exact to={"/lenh/" + row.id}>
        {cell}
      </Link>
    </div>
  );
}

function buttonFormatter(cell, row) {
  return `<BootstrapButton type="submit" class="btn-primary btn-act"><i class="fas fa-sort-numeric-down"></i></BootstrapButton>
  <BootstrapButton type="submit" class="btn-primary btn-act"><i class="fas fa-ban"></i></BootstrapButton>
  <BootstrapButton type="submit" class="btn-primary btn-act"><i class="fas fa-lock"></i></BootstrapButton>`;
}

function enumFormatter(cell, row, enumObject) {
  return enumObject[cell];
}
