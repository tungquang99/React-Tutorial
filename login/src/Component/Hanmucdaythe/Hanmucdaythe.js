import React from "react";
import Hanmucngay from "./Hanmucngay";
import Hanmucsothe from "./Hanmucsothe";

function Hanmucdaythe() {
  return (
    <div class="panel panel-info">
      <div class="panel-heading">
        <h4 class="panel-title"> <span>Hạn Mức Cho Từng Mạng</span> </h4>
      </div>
      <div className="panel-body panel-body-form">
        <Hanmucngay mang="" />
        <Hanmucngay mang="Viettel" />
        <Hanmucngay mang="Vina" />
        <Hanmucngay mang="Mobi" />
      </div>

      <div class="panel-heading mt-5">
        <h4 class="panel-title"><span>Hạn Mức Số Lượng Thẻ</span></h4>
      </div>
      <div className="panel-body panel-body-form">
        <Hanmucsothe type="nhỏ" types="nhỏ" time="ngày" />
        <Hanmucsothe type="lớn" types="lớn" time="ngày" />
        <Hanmucsothe type="lỗi" types="lỗi" time="ngày" />
        <Hanmucsothe type="lỗi mỗi 10 phút" types="lỗi" time="10 phút" />
      </div>
    </div>
  );
}

export default Hanmucdaythe;
