import React, { Component } from "react";
import { Link } from "react-router-dom";
import callApi from "../../utils/apiCaller";
class ProductAction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtPrice: "",
      chkbStatus: "",
    };
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }

  onSave = (e) => {
    e.preventDefault();
    var { txtName, txtPrice, chkbStatus } = this.state; 
    var { history } = this.props; 
    callApi('Product','POST', {
      name: txtName,
      price: txtPrice,
      status: chkbStatus
    }).then(res => {
      history.goBack();
    })
  }

  render() {
    var { txtName, txtPrice, chkbStatus } = this.state;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label>Tên Sản Phẩm: </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="txtName"
              value={txtName}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Giá:</label>
            <input
              type="text"
              className="form-control"
              name="txtPrice"
              value={txtPrice}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Trạng Thái:</label>
           
          </div>
          <div className="form-group form-check">
          <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              name="chkbStatus"
              value={chkbStatus}
              onChange={this.onChange}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Còn Hàng
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Thêm
          </button>
          <Link to="/product-list" className="btn btn-outline-danger ml-2">
            Trở lại
          </Link>
        </form>
      </div>
    );
  }
}

export default ProductAction;
