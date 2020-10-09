import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { getToken, removeUserSession } from "../Contants/Common";
import Login from "./Login";
import { useHistory } from "react-router-dom";

function TopBar() {
  const [modalShow, setModalShow] = useState(false);
  var token = getToken();
  const history = useHistory();

  const handleLogout = () => {
    removeUserSession();
    history.push("/");
    window.location.reload(false);
  };

  const checkToken = () => {
    if (!token) {
      return (
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Button variant="primary" onClick={() => setModalShow(true)}>
                  Đăng Nhập
                </Button>
                <Login show={modalShow} onHide={() => setModalShow(false)} />
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#signup">
                  Đăng ký
                </a>
              </li>
            </ul>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Button variant="primary">
                  {sessionStorage.getItem("user")}
                </Button>
              </li>
              <li className="nav-item">
                <Button variant="danger" onClick={handleLogout}>
                  Đăng xuất
                </Button>
              </li>
            </ul>
          </div>
        </div>
      );
    }
  };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top"
      id="mainNav"
    >
      {checkToken()}
    </nav>
  );
}

export default TopBar;
