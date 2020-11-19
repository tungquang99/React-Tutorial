import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  NavLink
} from "react-router-dom";
export default class ItemProduct extends Component {
    constructor(props) {
        super(props)
        
    }
    

    to_slug = (str) => {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();     
     
        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');
     
        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');
     
        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');
     
        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');
     
        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');
     
        // return
        return str;
      }
    
    render() {
        return (
           
                 <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <NavLink to={"/item-pro/" + this.to_slug(this.props.title) + "." + this.props.pId}>
                <img
                  className="card-img-top"
                  src={this.props.image}
                  alt = "for react router"
                />
              </NavLink>
              <div className="card-body">
                <h4 className="card-title">
                  <a href="#">{this.props.title}</a>
                </h4>
                <h5>{this.props.price}</h5>
                <p className="card-text">
                {this.props.detail}
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">{this.props.rate}</small>
              </div>
            </div>
          </div>
           
        )
    }
}
