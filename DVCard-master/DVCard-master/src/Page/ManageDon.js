import React, { Component } from 'react'

export default class ManageDon extends Component {

    render() {
        return (
            <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-12">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/">Quản Lý Đơn</a>
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
                    <h3 className="card-title">Đơn Lệnh</h3>
                  </div>
                </div>
                <div className="row">
               
                </div>
              </div>
              {/* /.row */}
            </div>
            {/* /.container-fluid */}
          </div>
        )
    }
}

