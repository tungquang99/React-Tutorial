import React, { Component } from "react";


class ProductList extends Component {
  render() {
    return (
      <div className="panel panel-primary mt-3">
        <div className="panel-heading">
         
        </div>
        <div className="panel-body">
          <table className="table table-striped ">
            <thead className="thead-dark">
              <tr>
                <th>STT</th>
                <th>Mã</th>
                <th>Tên</th>
                <th>Giá</th>
                <th>Trạng Thái</th>
                <th>Hành Động</th>
              </tr>
            </thead>
            <tbody>
              {this.props.children}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ProductList;
