import React from "react";
import "./card.scss";
import Viettel from "../../../assets/img/Viettel.png";
import Mobi from "../../../assets/img/Mobi.png";
import Vina from "../../../assets/img/vina.png";
import VtBantien from "../../../assets/img/banttienViettel.png";
import MbBantien from "../../../assets/img/chuyen-tien-mobifone.png";
import VnBantien from "../../../assets/img/bantienVINA.png";
import Kplus from "../../../assets/img/kplus-logo.png";
import Sms from "../../../assets/img/ecw1587737961.png";
export default function Card() {
  return (
    <div className="command">
      <div className="breadcrumb active">
        <ul className>
          <li className="breadcrumb-item " aria-current="page">
            Home
          </li>
        </ul>
      </div>
      <div className="title bd-grid">
        <span>Lệnh nạp thẻ</span>
      </div>
      <div className="command__container bd-grid">
        <div className="command__box">
          <a href="/#" onclick>
            <img src={Viettel} alt="" />
          </a>
        </div>
        <div className="command__box">
          <a href="/#" onclick>
            <img src={Mobi} alt="" />
          </a>
        </div>
        <div className="command__box">
          <a href="/#" onclick>
            <img src={Vina} alt="" />
          </a>
        </div>
        <div className="command__box">
          <a href="/#" onclick>
            <img src={VtBantien} alt="" />
          </a>
        </div>
        <div className="command__box">
          <a href="/#" onclick>
            <img src={MbBantien} alt="" />
          </a>
        </div>
        <div className="command__box">
          <a href="/#" onclick>
            <img src={VnBantien} alt="" />
          </a>
        </div>
        <div className="command__box">
          <a href="/#" onclick>
            <img src={Kplus} alt="" />
          </a>
        </div>
        <div className="command__box">
          <a href="/#" onclick>
            <img src={Sms} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
