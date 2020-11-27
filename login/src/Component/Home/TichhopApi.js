import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TichhopApi extends Component {
  render() {
    return (
      <div className="tichhopapi mt-5">
        <div className="tichhopapi-body">
          <ul>
            <li>
              <img src="/vendor/img/12.gif" alt="" className="icon_check" />
              <Link to="/ket-noi-api">Tài liệu hướng dẫn tích hợp API mua thẻ</Link>
            </li>
            <li>
              <img src="/vendor/img/12.gif" alt="" className="icon_check" />
              <a href="/">Hướng dẫn sử dụng các dịch vụ tại *****.vn</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
