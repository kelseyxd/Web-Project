import React from "react";
import { Link } from "react-router-dom";

function ProductItem({ orderID, price, quantity, name }) {
  return (
    <div>
      <h5>{name}</h5>
      <p>Quantity: {quantity}</p>
      <p>Unit Price: {price}</p>
    </div>
  );
}

export default ProductItem;
