import React from "react";

function CkItem(props) {
  return (
    <div className="card">
      <div className="card-header" id={"heading" + props.number}>
        <h5 className="mb-0">
          <button
            className="btn btn-link"
            data-toggle="collapse"
            data-target={"#collapse" + props.number}
            aria-expanded="true"
            aria-controls={"collapse" + props.number}
          >
            Bảng Giá Chiết Khấu Thẻ {props.title}
          </button>
        </h5>
      </div>
      <div
        id={"collapse" + props.number}
        className="collapse"
        aria-labelledby={"heading" + props.number}
        data-parent="#accordion"
      >
        <div className="card-body">
          <table className="table table-bordered table-hover no-mrb">
            <thead>
              <tr>
                <th className="text-center">Loại thẻ</th>
                <th className="text-center">Mệnh giá</th>
                <th className="text-center">Chiết khấu</th>
                <th className="text-center">Giá bán</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="text-center">{props.title}</td>
                <td className="text-center">500.000 VNĐ</td>
                <td className="text-center">2.5%</td>
                <td className="text-center">487.500 VNĐ</td>
              </tr>
              <tr className="text-center">
                <td className="text-center">{props.title}</td>
                <td className="text-center">200.000 VNĐ</td>
                <td className="text-center">2.5%</td>
                <td className="text-center">195.000 VNĐ</td>
              </tr>
              <tr className="text-center">
                <td className="text-center">{props.title}</td>
                <td className="text-center">100.000 VNĐ</td>
                <td className="text-center">2.5%</td>
                <td className="text-center">97.500 VNĐ</td>
              </tr>
              <tr className="text-center">
                <td className="text-center">{props.title}</td>
                <td className="text-center">50.000 VNĐ</td>
                <td className="text-center">2.5%</td>
                <td className="text-center">48.750 VNĐ</td>
              </tr>
              <tr className="text-center">
                <td className="text-center">{props.title}</td>
                <td className="text-center">20.000 VNĐ</td>
                <td className="text-center">0.5%</td>
                <td className="text-center">19.900 VNĐ</td>
              </tr>
              <tr className="text-center">
                <td className="text-center">{props.title}</td>
                <td className="text-center">10.000 VNĐ</td>
                <td className="text-center">0.5%</td>
                <td className="text-center">9.950 VNĐ</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CkItem;
