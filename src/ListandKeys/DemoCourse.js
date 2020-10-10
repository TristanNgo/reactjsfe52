import React, { Component } from "react";

export default class DemoCourse extends Component {
  danhSachKhoaHoc = ["ReactJS", "NodeJS", "VueJS"];
  renderDSKH = () => {
    return this.danhSachKhoaHoc.map((khoaHoc, index) => {
      return <li key={index}>{khoaHoc}</li>;
    });
  };
  render() {
    return (
      <div>
        <h2>List And Keys</h2>
        <h3>Danh Sach Khoa hoc</h3>
        <ul>{this.renderDSKH()}</ul>
      </div>
    );
  }
}
