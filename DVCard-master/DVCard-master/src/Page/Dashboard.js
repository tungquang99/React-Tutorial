import React, { Component } from "react";

export default class Dashboard extends Component {
  
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
                    <a href="/">Trang chủ</a>
                  </li>
                  <li className="breadcrumb-item active">Dashboard</li>
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
                <h3 className="card-title">Tạo Lệnh Nạp</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-6">
                <div className="card bg-danger" style={{ height: 200 }} />
              </div>
              <div className="col-lg-3 col-sm-6 col-6">
                <div className="card bg-success" style={{ height: 200 }} />
              </div>
              <div className="col-lg-3 col-sm-6 col-6">
                <div className="card bg-primary" style={{ height: 200 }} />
              </div>
              <div className="col-lg-3 col-sm-6 col-6">
                <div className="card bg-warning" style={{ height: 200 }} />
              </div>
              <div className="col-lg-3 col-sm-6 col-6">
                <div className="card bg-dark-primary" style={{ height: 200 }} />
              </div>
              <div className="col-lg-3 col-sm-6 col-6">
                <div className="card bg-info" style={{ height: 200 }} />
              </div>
              <div className="col-lg-3 col-sm-6 col-6">
                <div className="card bg-secondary" style={{ height: 200 }} />
              </div>
              <div className="col-lg-3 col-sm-6 col-6">
                <div className="card bg-dark" style={{ height: 200 }} />
              </div>
            </div>
            <div className="card ">
              <div className="card-header">
                <h3 className="card-title">Tin Tức Mới Nhất</h3>
              </div>
            </div>
            <div className="row">
              {/* Left col */}
              <div className="col-md-6">
                {/* MAP & BOX PANE */}
                <div className="card">
                  {/* /.card-header */}
                  <div className="card-body p-0">
                    <div className="d-md-flex">
                      <div
                        className="p-1 flex-fill"
                        style={{ overflow: "hidden" }}
                      >
                        {/* Map will be created here */}
                        <div
                          id="world-map-markers"
                          style={{ height: 360, overflow: "hidden" }}
                        >
                          <div>
                            <h5 className="ml-3 mt-3 info-box-text text-primary">
                              Hôm nay ăn gì?
                            </h5>
                            <p className="ml-3 mt-3">
                              ádfsadfsafdsafdsadfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                              ádfffffffffffffffffffffffffffffffffffffffffffffffffffff
                              sadfasfd sadfsa
                              dfasdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdf
                              ádffffffffffffffffffffffffffffffffffffffffffffasfasdfasdfasdf{" "}
                            </p>
                            <div className="d-flex justify-content-between mx-3">
                              <p>Tác giả: Admin</p>
                              <p>Thời gian: 09/09/2020</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /.d-md-flex */}
                  </div>
                  {/* /.card-body */}
                </div>
              </div>
              {/* /.col */}
              <div className="col-md-3">
                {/* Info Boxes Style 2 */}
                <div className="info-box mb-3 ">
                  <div className="info-box-content">
                    <a href="/" className="info-box-text title-news">
                      adfasdfasdf
                    </a>
                    <span className="content-news">
                      ádfasdfasdfasdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfd132132
                    </span>
                    <div>Thời gian: 09/09/2020</div>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
                <div className="info-box mb-3 ">
                  <div className="info-box-content">
                    <a href="/" className="info-box-text title-news">
                      adfasdfasdf
                    </a>
                    <span className="content-news">
                      ádfasdfasdfasdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfd
                    </span>
                    <div>Thời gian: 09/09/2020</div>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
                <div className="info-box mb-3 ">
                  <div className="info-box-content">
                    <a href="/" className="info-box-text title-news">
                      adfasdfasdf
                    </a>
                    <span className="content-news">
                      ádfasdfasdfasdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfd
                    </span>
                    <div>Thời gian: 09/09/2020</div>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
                <div className="info-box mb-3 ">
                  <div className="info-box-content">
                    <a href="/" className="info-box-text title-news">
                      adfasdfasdf
                    </a>
                    <span className="content-news">
                      ádfasdfasdfasdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfd
                    </span>
                    <div>Thời gian: 09/09/2020</div>
                  </div>
                  {/* /.info-box-content */}
                </div>
              </div>
              <div className="col-md-3">
                {/* Info Boxes Style 2 */}
                <div className="info-box mb-3 ">
                  <div className="info-box-content">
                    <a href="/" className="info-box-text title-news">
                      adfasdfasdf
                    </a>
                    <span className="content-news">
                      ádfasdfasdfasdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfd
                    </span>
                    <div>Thời gian: 09/09/2020</div>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
                <div className="info-box mb-3 ">
                  <div className="info-box-content">
                    <a href="/" className="info-box-text title-news">
                      adfasdfasdf
                    </a>
                    <span className="content-news">
                      ádfasdfasdfasdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfd
                    </span>
                    <div>Thời gian: 09/09/2020</div>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
                <div className="info-box mb-3 ">
                  <div className="info-box-content">
                    <a href="/" className="info-box-text title-news">
                      adfasdfasdf
                    </a>
                    <span className="content-news">
                      ádfasdfasdfasdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfd
                    </span>
                    <div>Thời gian: 09/09/2020</div>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
                <div className="info-box mb-3 ">
                  <div className="info-box-content">
                    <a href="/" className="info-box-text title-news">
                      adfasdfasdf
                    </a>
                    <span className="content-news">
                      ádfasdfasdfasdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfd
                    </span>
                    <div>Thời gian: 09/09/2020</div>
                  </div>
                  {/* /.info-box-content */}
                </div>
              </div>
              {/* /.col */}
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div>
    );
  }
}
