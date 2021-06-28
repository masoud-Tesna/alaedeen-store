import React, { Component } from "react";
import ProductsGrid  from "./ProductsGrid";

class Products extends Component {

  render () {

    return (
      <ProductsGrid param = { this.props }/>
    );
  }
}

export default Products;