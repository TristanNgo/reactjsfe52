import React, { Component } from "react";

export default class DemoCourse extends Component {
  danhSachKhoaHoc = [<li>ReactJS</li>, <li>NodeJS</li>, <li>VueJS</li>];
  render() {
    return (
      <div>
        <h2>List And Keys</h2>
        <h3>Danh Sach Khoa hoc</h3>
        <ul>
          <li>ReactJS</li>
          <li>NodeJS</li>
          <li>VueJS</li>
        </ul>
      </div>
    );
  }
}
