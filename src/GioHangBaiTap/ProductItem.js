import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.phone.maSP}</td>
        <td>{this.props.phone.tenSanPham}</td>
        <td>
          <img src={this.props.phone.hinhAnh} width={50} alt />
        </td>
        <td>
          <button>-</button>
          {this.props.phone.soLuong}
          <button>+</button>
        </td>
        <td>{this.props.phone.giaBan}</td>
        <td>{this.props.phone.giaBan * this.props.phone.soLuong}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => {
              this.props.handleDelete(this.props.phone);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
