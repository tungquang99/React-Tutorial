import React, { Component } from "react";
import BangGiaCk from "../Component/Home/BangGiaCk";
import NganHang from "../Component/Home/NganHang";
import MyCk from "../Component/MyCk";

export default class KetnoiApi extends Component {
  render() {
    return (
      <div>
        <MyCk />
        <div id="contain">
          <div className="container">
            <div className="muathe mt-5 ">
              <p>
                Đoàn thuyền chở các bà, các chị từ chợ huyện, chợ tỉnh về cập
                bến. Các bà các chị được đàn con ùa ra đón. Con lớn đỡ cho mẹ
                gánh hàng. Con nhỏ vòi mẹ chia quà. Tiếng cười nói rộn ràng cả
                một khúc sông. Rồi ai về nhà nây. Con thuyền neo vào bến đỗ. Đây
                cũng là lúc bọn trẻ chăn trâu lùa trâu xuống tắm. Bọn trẻ tắm
                cho trâu, rồi bọn trẻ giỡn nước. Chúng té nước cho nhau. Chúng
                chơi trò đánh trận. Một đứa kiếm đâu được trái bóng tròn. Thế là
                chúng ném bóng cho nhau. Một ý kiến được cả bọn chấp nhận: chơi
                bóng nước. Chúng chia làm hai phe, chuyền bóng cho nhau. Phe nào
                chuyền được 6 chuyền là thắng. Phe thua phải cõng phe thắng chạy
                dọc con sông suốt từ bến tắm đến tận gốc đa. Bến sông quê tôi cứ
                rộn ràng như vậy cho đến lúc mặt trời lặn phía chân ười mới có
                chút bình lặng.
              </p>
            </div>
            <BangGiaCk />
            <NganHang />
          </div>
        </div>
      </div>
    );
  }
}
