import React, { Component } from "react";
import Header from "./Header";
import ProductList from "./ProductList";
export default class Home extends Component {
  render() {
    return (
      <div>
        <Headers />

        <ProductList />
        <Slider />
      </div>
    );
  }
}
