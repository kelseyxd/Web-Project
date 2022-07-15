import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function CartItem({ image, name, price, quantity }) {
  return (
    <div className="cartItem">
      <div>
        <img src={image} width="500" height="400" />
      </div>
      <div className="cartItemInfo">
        <h1>{name}</h1>
        <p>${price}</p>
        <p className="cartItemQuantity">x{quantity}</p>

        <Link
          to={{
            pathname: `/cart`,
          }}
        >
          <Button style={{ marginTop: "1%", width: "20%" }}>Edit</Button>
        </Link>
      </div>
    </div>
  );
}

export default CartItem;
