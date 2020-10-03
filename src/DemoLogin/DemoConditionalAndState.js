import React, { Component } from "react";

export default class DemoConditionalAndState extends Component {
  //islogin laf thuoc tinh cuar class
  //true : da dang nhap => hien ten nguoi dung
  //false: chua dang nhap => hien nut login

  state = {
    isLogin: false,
  };
  //   isLogin = false;
  //Phuowng thuc cua class
  handleClick = () => {
    // this.isLogin = true;
    // console.log(this.isLogin);
    // this.state.isLogin = true;
    // Cu phap cua Component, set lai gia tri cua thuoc tinh isLogin
    //State la trang thai cua component
    //Khi thay doi state thi component se render lai
    this.setState({
      isLogin: true,
    });
  };
  renderLogin = () => {
    if (this.state.isLogin) {
      return <p>Trung Tin</p>;
    } else {
      return <button onClick={this.handleClick}>Login</button>;
    }
    //Cach 1 : dung if else
    //dieu kien ? xu ly dung : xu ly sai
    // return this.isLogin ? <p>Avatar</p> : <button>Login</button>;
    //Cach 2: dung toan tu 3 ngoi
  };
  render() {
    console.log("render");
    return (
      <div>
        <h2>Conditional And State</h2>
        <div>{this.renderLogin()}</div>
      </div>
    );
  }
}
