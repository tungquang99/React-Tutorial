import React, { Component } from "react";
import { getToken } from "../Contants/Common";

class Home extends Component {
  render() {
    return (
        <div>
          <h1 className='text-center'>Trang chủ</h1>
          <p className='text-center'> {getToken() ? "Chào mừng" + " " +  sessionStorage.getItem('user') : ''}</p>
        </div>
    );
  }
}

export default Home;
