import React from "react";
import { getToken } from "../Contants/Common";

function MyCk() {
  const checkMyCk = () => {
    if (getToken()) {
      return (
        <div id="myck">
          <span className="h4">Chiết khấu của tôi</span>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Nhà Mạng</th>
                <th scope="col">Chiết Khấu</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="viettel">Viettel</span>
                </td>
                <td>
                  <span className="text-danger"> 10% </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="mobifone">Mobifone</span>
                </td>
                <td>
                  <span className="text-danger"> 10% </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="vinaphone">Vinaphone</span>
                </td>
                <td>
                  <span className="text-danger"> 10% </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    } else {
      return;
    }
  };
  return <div id="banner">{checkMyCk()}</div>;
}

export default MyCk;
