import React, { Component } from "react";
import ClassProps from "./ClassProps";
import FunctionProps from "./FunctionProps";

export default class DemoProps extends Component {
  //Props dùng để truyền dữ liệu giữa các Component
  type = "Husky";
  image =
    "https://sieupet.com/sites/default/files/field/image/cho-husky-768x480_0.jpg";
  render() {
    return (
      <div>
        <h2>Props</h2>
        {/**cach truyen data du lieu */}
        <FunctionProps loaiCho={this.type} hinhAnh={this.image} />
        <ClassProps typeDog={this.type} image={this.image} />
      </div>
    );
  }
}
