import React, { useState } from "react";
import { removeUserSession } from "../../Contants/Common";
import { useHistory } from "react-router-dom";
import "./header.scss";
import userImg from "../../assets/img/user.svg.png";

export default function Header(props) {
  const [inFor, setInfor] = useState(false);
  const [noti, setNoti] = useState(false);

  const history = useHistory();

  const handleLogout = () => {
    removeUserSession();
    history.push("/");
    window.location.reload(false);
  };

  function toggleInfo() {
    setInfor(!inFor);
    if (noti === true) {
      setNoti(!noti);
    }
  }

  function toggleNoti() {
    setNoti(!noti);
    if (inFor === true) {
      setInfor(!inFor);
    }
  }

  const showInForUser = () => {
    if (inFor === true) {
      return (
        <ul className="dropdown__menu" id="info-menu">
          <div className="dropdown__menu-content overlay-scrollbar scrollbar-hover">
            <li className="dropdown__menu-item">
              <a href="##" className="dropdown__menu-link">
                <div>
                  <i className="bx bx-shield-quarter" />
                </div>
                <span>Bảo mật</span>
              </a>
            </li>
            <li className="dropdown__menu-item">
              <a href="##" className="dropdown__menu-link">
                <div>
                  <i className="bx bxs-dollar-circle" />
                </div>
                <span>Chuyển khoản</span>
              </a>
            </li>
            <li className="dropdown__menu-item">
              <a href="##" className="dropdown__menu-link">
                <div>
                  <i className="bx bxs-cog" />
                </div>
                <span>Đổi mật khẩu</span>
              </a>
            </li>
            <li className="dropdown__menu-item">
              <a
                href="##"
                className="dropdown__menu-link"
                onClick={() => handleLogout()}
              >
                <div>
                  <i className="bx bx-log-in" />
                </div>
                <span>Đăng xuất</span>
              </a>
            </li>
          </div>
        </ul>
      );
    } else {
      return;
    }
  };

  const showNotification = () => {
    if (noti === true) {
      return (
        <ul className="dropdown__menu" id="notification-menu">
          <div className="dropdown__menu-content overlay-scrollbar scrollbar-hover">
            <li className="dropdown__menu-item">
              <a href="##" className="dropdown__menu-link">
                <div>
                  <i className="bx bxs-notification" />
                </div>
                <span>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </span>
              </a>
            </li>
          </div>
        </ul>
      );
    } else {
      <></>;
    }
  };
  return (
    <header className="l-header" id="header">
      <sidebar className="nav bd-grid">
        <ul className="nav__list">
          <li className="nav__item">
            <a
              href="/#"
              className="nav__link"
              onClick={() => props.collapseSidebar()}
            >
              <i className="bx bx-menu nav__toggle" id="nav-toggle" />
            </a>
          </li>
        </ul>
        <ul className="nav__list">
          <li className="nav__item ">
            <a href="/#" className="nav__link" onClick={toggleNoti}>
              <i className="bx bxs-bell dropdown-toggle" />
              <span className="nav__badge">1</span>
            </a>
            {showNotification()}
          </li>
          <li className="nav__item">
            <a href="/#" className="nav__link" onClick={toggleInfo}>
              <img src={userImg} alt="" className="nav__user" />
            </a>
            {showInForUser()}
          </li>
        </ul>
      </sidebar>
    </header>
  );
}
