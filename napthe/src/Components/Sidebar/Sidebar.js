import React from "react";
import "./sidebar.scss";

export default function Sidebar(props) {
  console.log(props.check);
  return (
    <div className={`sidebar ${props.check === true ? "expand" : ""}`}>
      <ul className="sidebar__list">
        <li className="sidebar__item">
          <a href="/#" className="sidebar__link active">
            <div className="sidebar__icon">
              <i className="bx bxs-tachometer" />
            </div>
            <span>Dashboard </span>
          </a>
        </li>
        <li className="sidebar__item">
          <a href="/#" className="sidebar__link">
            <div className="sidebar__icon">
              <i className="bx bxs-news" />
            </div>
            <span>Tin tức</span>
          </a>
        </li>
        <li className="sidebar__item">
          <a href="/#" className="sidebar__link">
            <div className="sidebar__icon">
              <i className="bx bxs-user-account" />
            </div>
            <span>Tài khoản</span>
          </a>
        </li>
        <li className="sidebar__item">
          <a href="/#" className="sidebar__link">
            <div className="sidebar__icon">
              <i className="bx bx-list-ol" />
            </div>
            <span>Danh sách lệnh</span>
          </a>
        </li>
        <li className="sidebar__item">
          <a href="/#" className="sidebar__link">
            <div className="sidebar__icon">
              <i className="bx bx-list-ul" />
            </div>
            <span>Danh sách đơn</span>
          </a>
        </li>
        <li className="sidebar__item">
          <a href="/#" className="sidebar__link">
            <div className="sidebar__icon">
              <i className="bx bx-history" />
            </div>
            <span>Lịch sử giao dịch</span>
          </a>
        </li>
        <li className="sidebar__item">
          <a href="/#" className="sidebar__link">
            <div className="sidebar__icon">
              <i className="bx bx-line-chart-down" />
            </div>
            <span>Báo cáo</span>
          </a>
        </li>
        <li className="sidebar__item">
          <a href="#" className="sidebar__link">
            <div className="sidebar__icon">
              <i className="bx bxs-book-alt" />
            </div>
            <span>Hướng dẫn</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
