import React, { Component } from "react";

export default class extends Component {
  //Thuoc tinh cua class
  Name = "Tristan";
  Class = 52;
  //Phuong thuc cua class
  rederName = () => {
    return <p>Name: {this.Name} </p>;
  };
  renderClass = () => {
    return <p>Class: {this.Class} </p>;
  };
  render() {
    const hinhAnh =
      "https://i1-thethao.vnecdn.net/2020/10/03/mes5-7546-1601693077.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=CNW4qKeJ4VynZsoKv02Ixw";
    return (
      <div>
        <h2>DataBinding</h2>
        {this.rederName()}
        {this.renderClass}
      </div>
    );
  }
}
