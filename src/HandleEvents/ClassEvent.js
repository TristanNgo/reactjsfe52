import React, { Component } from "react";

export default class ClassEvent extends Component {
  //Phương thúc của class
  handerFocus = () => {
    // alert("đã focus ");
    console.log("log r nhe");
  };
  handerFocusParams = (mess) => {
    console.log(mess);
  };
  render() {
    return (
      <div>
        <h2>Class Event</h2>
        <input
          type="text"
          placeholder="focus"
          onFocus={this.handerFocus}
        ></input>
        <input
          type="text"
          placeholder="focus params"
          onFocus={() => this.handerFocusParams("Hello Tin")}
        ></input>
      </div>
    );
  }
}
