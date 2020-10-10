import React from "react";
//import DemoProps from "./DemoProps";
//Cach nhan du lieu tu props
// phai truyen tham so
export default function FunctionProps(props) {
  return (
    <div>
      <h3>Function Props</h3>
      <p>type: {props.loaiCho}</p>
      <img src={props.hinhAnh} alt="picture" />
    </div>
  );
  console.log(props);
}
