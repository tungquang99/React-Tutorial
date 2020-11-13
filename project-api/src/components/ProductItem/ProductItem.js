import React, { Component } from "react";
import callApi from "../../utils/apiCaller";

class ProductItem extends Component {
  onDelete = (id) => {
    var { products } = this.state;
    if (confirm("Bạn chắc chắn muốn xóa sản phẩm này?")) { //eslint-disable-line
      callApi(`Product/${id}`, `DELETE`, null).then((res) => {
        var index = this.findIndex(products, id);
        if (index !== -1) {
          products.splice(index, 1);
          this.setState({
            products: products,
          });
        }
      });
    }
  };

  findIndex = (products, id) => {
    var result = -1;
    products.forEach((product, index) => {
      if (product.id === id) {
        result = index;
      }
    });
    return result;
  };

  render() {
    var { product, index } = this.props;
    var statusName = product.status ? "Còn Hàng" : "Hết Hàng";
    var statusClass = product.status ? "warning" : "danger";
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <span className={`badge badge-${statusClass}`}>{statusName}</span>
        </td>
        <td>
          <button type="button" className="btn btn-success ">
            Sửa
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.onDelete(product.id)}
          >
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
