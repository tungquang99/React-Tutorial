import React, { Component } from "react";
import Chietkhau from "../Item/Chietkhau";
import Daugia from "../Item/Daugia";


export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vt: "Viettel",
      vn: "VinaPhone",
      mb: "MobiFone",
      vtbt: "VT Bắn Tiền",
      vnbt: "VN Bắn Tiền",
      mbbt: "MB Bắn Tiền",
      kplus: "K-Plus",
      sms: "SMS Nạp Game",
    };
  }
  render() {
    
    return (
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item d-block d-lg-none">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="/"
              role="button"
            >
              <i className="fas fa-bars" />
            </a>
          </li>
          <li className="nav-item d-none d-lg-inline-block">
            <h5 className="nav-link text-danger">
              Thông báo: This is a sample scrolling text that has scrolls texts
              to left.
            </h5>
          </li>
          <li className="nav-item dropdown d-block d-lg-none">
            <a className="nav-link" data-toggle="dropdown" href="/">
              <i className="far fa-bell" />
            </a>
            <div className="dropdown-menu  dropdown-menu-left" width="200px">
              <a href="/" className="dropdown-item">
                <span>
                  This is a sample scrolling text that has scrolls texts to
                  left.
                </span>
                <span className="float-right text-muted text-sm">10 mins</span>
              </a>
            </div>
          </li>
        </ul>
        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
          {/* Messages Dropdown Menu */}

          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="https://">
              Chiết Khấu
              <span className="badge badge-danger navbar-badge">1</span>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <a href="/" className="dropdown-item dropdown-footer">
                Chiết khấu của tôi
              </a>
              <div className="dropdown-divider" />
              <Chietkhau
                mang={this.state.vt}
                mang2={this.state.vtbt}
                number1="20%"
                number2="20%"
              />
              <Chietkhau
                mang={this.state.vn}
                mang2={this.state.vnbt}
                number1="20%"
                number2="20%"
              />
              <Chietkhau
                mang={this.state.mb}
                mang2={this.state.mbbt}
                number1="20%"
                number2="20%"
              />
              <Chietkhau
                mang={this.state.kplus}
                mang2={this.state.sms}
                number1="20%"
                number2="20%"
              />
              <div className="dropdown-divider" />
              <a href="/" className="dropdown-item dropdown-footer">
                Chiết khấu cao nhất
              </a>
              <div className="dropdown-divider" />
              <a href="/" className="dropdown-item">
                <ul className="navbar-nav d-flex justify-content-center flex-wrap">
                  <Daugia mang={this.state.vt} number="20%" />
                  <Daugia mang={this.state.vn} number="20%" />
                  <Daugia mang={this.state.mb} number="20%" />
                </ul>
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="m-3" data-toggle="dropdown" href="/">
              <img
                src="dist/img/user2-160x160.jpg"
                className="img-circle elevation-2 mt-1"
                alt=""
                width="33px"
              />
            </a>
            <div className="dropdown-menu  dropdown-menu-right" width="100px">
              <a href="/" className="dropdown-item">
                <i className="fas fa-user-cog mr-2" /> Đổi Mật Khẩu
              </a>
              <div className="dropdown-divider" />
              <a href="/" className="dropdown-item">
                <i className="fas fa-sign-out-alt mr-2" /> Đăng Xuất
              </a>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}
