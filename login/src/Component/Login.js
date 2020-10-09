import React, { useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import { setUserSession } from "./../Contants/Common";
import callApi from "./../Api/ApiCaller";
import { useHistory } from "react-router-dom";

function Login(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  var username = useFormInput("");
  var password = useFormInput("");
  const history = useHistory();
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    callApi(
      "Users/login/",
      "POST",

      "grant_type=client_credentials&Password=" +
        username.value +
        "&UserName=" +
        password.value,

      { "Content-Type": "application/x-www-form-urlencoded" }
    )
      .then((response) => {
        setLoading(false);
        setUserSession(response.data.data.access_token, username.value);
        history.push("/");
        props.onHide();
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        setError('Sai tài khoản mật khẩu')
      });
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Đăng Nhập</Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <div>
            <div>
              Username
              <br />
              <input type="text" {...username} autoComplete="new-password" />
            </div>
            <div style={{ marginTop: 10 }}>
              Password
              <br />
              <input
                type="password"
                {...password}
                autoComplete="new-password"
              />
            </div>
            {error && (
              <>
                <small style={{ color: "red" }}>{error}</small>
                <br />
              </>
            )}
            <br />
          </div>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button type="button" onClick={handleLogin} disabled={loading}>
          {loading ? "Loading..." : "Đăng Nhập"}
        </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
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

export default Login;
