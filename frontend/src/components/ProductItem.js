import React from "react";
import { Link } from "react-router-dom";

function ProductItem({ orderID, price, quantity, name, image }) {
  return (
    <div>
      <h5>{name}</h5>
      <div>
        <img src={image} width="500" height="400" />
      </div>
      <p>Quantity: {quantity}</p>
      <p>Unit Price: {price}</p>
    </div>
  );
}

export default ProductItem;
