import React, { Component } from "react";

export default class ClassProps extends Component {
  render() {
    //props la thuoc tinh co san cua Component
    console.log(this.props);
    return (
      <div>
        <h2>Class Props</h2>
        <p>type: {this.props.typeDog}</p>
        <img src={this.props.image} alt="hinh" />
      </div>
    );
  }
}
