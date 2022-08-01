import React from "react";
import { Link } from "react-router-dom";

function ProductItem({ orderID, price, quantity, name, image }) {
  return (
    <div className="order-item-view" style={{ marginTop: "30px" }}>
      <div>
        <img src={image} width="100" height="100" />
      </div>
      <p>{name}</p>
      <p>{quantity}</p>
      <p>{price}</p>
    </div>
  );
}

export default ProductItem;
