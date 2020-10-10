import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    return (
      <div className="card">
        <img className="card-img-top" src={this.props.phone.hinhAnh} alt />
        <div className="card-body">
          <h4 className="card-title">{this.props.phone.tenSanPham}</h4>
          <button
            className="btn btn-success"
            onClick={() => this.props.changeDetail(this.props.phone)}
          >
            Chi tiết
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              this.props.AddPhone(this.props.phone);
            }}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
