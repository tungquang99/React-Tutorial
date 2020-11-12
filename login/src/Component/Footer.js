import React from "react";

function Footer() {
  return (
    <>
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="title contact">
              <h4>thông tin liên hệ</h4>
              <div className="contact-infor">
                <p>
                  <i className="fas fa-envelope" />
                  <strong> Địa chỉ:</strong> 6C khu tòa Vincom Trần Duy Hưng,
                  Cầu Giấy ,Hà Nội
                </p>
                <p>
                  <i className="fas fa-map-marker-alt" />
                  <strong> Email:</strong> netsky@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone-alt" />
                  <strong> Phone:</strong> 0977.222.333
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="title policy">
              <h4>quy định chính sách</h4>
              <div className="policy-list">
                <ul>
                  <li>
                    <a href="/">Giới thiệu</a>
                  </li>
                  <li>
                    <a href="/">Quy định bảo mật</a>
                  </li>
                  <li>
                    <a href="/">Điều khoản sử dụng</a>
                  </li>
                  <li>
                    <a href="/">Giải quyết khiếu nại</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <span>
            Bản quyền @2020&nbsp;<a href="/">Napthe24.net</a>
          </span>
        </div>
      </div>
    </footer>
    </>
  );
}
export default Footer;
