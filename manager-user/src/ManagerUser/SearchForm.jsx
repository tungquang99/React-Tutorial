import React, { Component } from "react";

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: "",
    };
  }

  isChange = (e) => {
    this.setState({
      values: e.target.value,
    });
  };

  showBtn = () => {
    if (this.props.showBtn === false) {
      return (
        <div
          className="btn btn-outline-primary mr-2"
          onClick={() => this.props.btnForm()}
        >
          Thêm User
        </div>
      );
    }
  };

  render() {
    return (
      <div className="col-12">
        <form action="">
          <div className="btn-group" role="group" aria-label="Basic example">
            <div className="form-group">{this.showBtn()}</div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Nhập từ khóa"
                aria-describedby="helpId"
                onChange={(e) => this.isChange(e)}
              />
            </div>

            <div className="form-group">
              <select name="" className="custom-select"  onChange={(e) => this.isChange(e)}>
                <option value="">Chọn quyền mặc định</option>
                <option value={1}>Admin</option>
                <option value={2}>Modrator</option>
                <option value={3}>Normal User</option>
              </select>
            </div>
            <div className="form-group">
              <div
                className="btn btn-info"
                onClick={() => this.props.btnSearchs(this.state.values)}
              >
                Tìm
              </div>
            </div>
          </div>
        </form>

        <hr />
      </div>
    );
  }
}
