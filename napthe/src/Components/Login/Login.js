import React, { useState } from "react";
import { setUserSession } from "../../Contants/Common";
import callApi from "../../Api/ApiCaller";
import Logo from "../../assets/img/aILP3CD.png";
import "./style.scss";
import { message } from "antd";

export default function Login() {
  const [loading, setLoading] = useState(false);

  var username = useFormInput("");
  var password = useFormInput("");
  const handleLogin = () => {
    setLoading(true);
    callApi(
      "Users/loginEncode/",
      "POST",

      "grant_type=client_credentials&Password=" +
        encodeURIComponent(
          window.btoa(unescape(encodeURIComponent(password.value)))
        ) +
        "&UserName=" +
        encodeURIComponent(
          window.btoa(unescape(encodeURIComponent(username.value)))
        ),
      { "Content-Type": "application/x-www-form-urlencoded" }
    )
      .then((response) => {
        console.log(response);
        setLoading(false);
        setUserSession(response.data.data.access_token, username.value);
        window.location.reload(false);
        message.success("Đăng Nhập Thành Công");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        message.error("Sai tài khoản hoặc mật khẩu");
      });
  };
  return (
    <div className="signin">
      <div className="signin__container">
        <div className="signin__img">
          <img src={Logo} alt="" />
        </div>
        <div className="signin__form">
          <form className="form">
            <h3 className="signin__title">Đăng nhập</h3>
            <span className="msg__error" />
            <div className="form-group">
              <label htmlFor className="form-label">
                Tên đăng nhập
              </label>
              <input
                type="text"
                name
                {...username}
                className="form-input"
                id
                placeholder="Ex: nguyenvana"
              />
            </div>
            <div className="form-group">
              <label htmlFor className="form-label">
                Mật khẩu
              </label>
              <input
                type="password"
                name
                {...password}
                className="form-input"
                id
                placeholder="**********"
              />
            </div>
            <div className="form-group form-term">
              <span>
                By clicking you agree with our
                <a href="/#">Term of use</a> .
              </span>
            </div>
            <div className="form-group">
              <button
                type="button"
                className="btn btn-signin"
                onClick={handleLogin}
                disabled={loading}
              >
                {loading ? "Loading..." : "Đăng Nhập"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};
