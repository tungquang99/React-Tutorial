import React, { Component } from "react";

export default class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:"",
      name:"",
      tel:"",
      permission:"",
    }
  }
  

  isChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]:value
    });
  }
  



  checkForm = () => {
    if (this.props.showform === true) {
      return (
        <div className="col-12">
          <div className="card text-left border-dark mb-3">
            <h5 className="card-header">Thêm User</h5>
            <form className="card-body">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Tên User"
                  onChange ={(e) => this.isChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="tel"
                  className="form-control"
                  placeholder="Điện Thoại"
                  onChange ={(e) => this.isChange(e)}
                />
              </div>
              <div className="form-group">
                <select  onChange ={(e) => this.isChange(e)} name="permission" className="custom-select" required>
                  <option value>Chọn quyền mặc định</option>
                  <option value={1}>Admin</option>
                  <option value={2}>Modrator</option>
                  <option value={3}>Normal User</option>
                </select>
              </div>
              <div
                className="form-group"
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <input type="reset" className="btn btn-primary" onClick={() => this.props.Add(this.state.name,this.state.tel,this.state.permission)} value="Thêm mới" />
                <div className="btn btn-outline-secondary"  onClick={() => this.props.btnForm()}>Đóng lại</div>
              </div>
            </form>
          </div>
        </div>
      );
    }
  };

  render() {
    // console.log(this.state);
    return <div>{this.checkForm()}</div>;
  }
}
