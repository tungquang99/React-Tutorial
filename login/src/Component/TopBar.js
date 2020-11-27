import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { getToken, removeUserSession } from "../Contants/Common";
import Login from "./Login";
import { useHistory } from "react-router-dom";
import Register from "./Register";

function TopBar() {
  const [modalLogin, setModalLogin] = useState(false);
  const [modalRegister, setModalRegister] = useState(false);
  const [inFor, setInfor] = useState(false);
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
          <div className="">LOGO</div>
          <div className="login">
            <Button
              variant=""
              className="btn btn-signup"
              onClick={() => setModalRegister(true)}
            >
              Đăng Ký
            </Button>
            <Register
              show={modalRegister}
              onHide={() => setModalRegister(false)}
            />
            <Button
              variant=""
              className="btn btn-signin"
              onClick={() => setModalLogin(true)}
            >
              Đăng Nhập
            </Button>
            <Login show={modalLogin} onHide={() => setModalLogin(false)} />
           
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="">LOGO</div>
          <div className="login">
            <Button variant="" className="btn btn-signup">
              Số dư: 1.000.0000.000
            </Button>
            <Button variant="" className="btn btn-signin" onClick={Toggle}>
              {localStorage.getItem("user")}
            </Button>
            {showInForUser()}
          </div>
        </div>
      );
    }
  };

  function Toggle() {
    setInfor(inFor === false ? true : false);
  }

  const showInForUser = () => {
    if (inFor === true) {
      return (
        <div class="infoUser">
          <div class="triangle"></div>
          <ul>
            <li>
              <a href="/">Đổi mật khẩu</a>
            </li>
            <li>
              <a href="/" onClick={() => handleLogout()}>
                Đăng xuất
              </a>
            </li>
          </ul>
        </div>
      );
    } else {
      return;
    }
  };
  return (
    <nav id="header-top" className=" navbar navbar-light bg-light static-top">
      {checkToken()}
    </nav>
  );
}

export default TopBar;
