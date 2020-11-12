import React, { Component } from "react";

export default class NganHang extends Component {
  render() {
    return (
      <div className="nganhang mt-5">
        <div className="title row">
          <span className="h2 col-12">liên kết ngân hàng</span>
        </div>
        <div className="nganhang-list multiple-items">
          <div className="items">
            <img src="/vendor/img/nganhang/bidv.jpg" alt="" />
          </div>
          <div className="items">
            <img src="/vendor/img/nganhang/DongA.gif" alt="" />
          </div>
          <div className="items">
            <img src="/vendor/img/nganhang/NamABank.jpg" alt="" />
          </div>
          <div className="items">
            <img src="/vendor/img/nganhang/hdb.png" alt="" />
          </div>
          <div className="items">
            <img src="/vendor/img/nganhang/maritime.jpg" alt="" />
          </div>
          <div className="items">
            <img src="/vendor/img/nganhang/ocean.png" alt="" />
          </div>
          <div className="items">
            <img src="/vendor/img/nganhang/scb.png" alt="" />
          </div>
          <div className="items">
            <img src="/vendor/img/nganhang/tcb.png" alt="" />
          </div>
          <div className="items">
            <img src="/vendor/img/nganhang/tpb.jpg" alt="" />
          </div>
          <div className="items">
            <img src="/vendor/img/nganhang/vib.png" alt="" />
          </div>
        </div>
      </div>
    );
  }
}
