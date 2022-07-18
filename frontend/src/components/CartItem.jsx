import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Delete from "../delete.svg";
import "bootstrap/dist/css/bootstrap.min.css";

function CartItem({ image, name, price, quantity, id }) {
  return (
    <div className="cartItem">
      <div>
        <img src={image} width="500" height="400" />
      </div>
      <div className="cartItemInfo">
        <h1>{name}</h1>
        <p>${price}</p>
        <div className="cartItemQuantity">
          <text>Quantity: </text>
          <Button variant="light">{quantity}</Button>
        </div>
        <div className="edit-btn">
          <Link
            to={{
              pathname: `/edit/${id}`,
              state: {
                name: name,
                image: image,
                price: price,
                quantity: quantity,
                id: id,
              },
            }}
          >
            <Button variant="secondary">Edit</Button>
          </Link>
        </div>
        <div className="delete-btn">
          <Button
            variant="danger"
            className="btn-danger"
            onClick={() => {
              console.log("delete");
            }}
          >
            <text>Delete </text>
            <img src={Delete} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
