import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Delete from "../delete.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

function CartItem({ image, name, price, quantity, id }) {
  return (
    <div className="cartItem">
      <div className="cart-item-img-container">
        <img src={image} className="cart-item-img" />
      </div>
      <div className="cartItemInfo">
        <h1>{name}</h1>
        <p>${price}</p>
        <div className="qty-edit-delete">
          <div className="cartItemQuantity">
            <Button variant="light">Quantity: {quantity}</Button>
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
              <Button variant="light">Edit</Button>
            </Link>
          </div>
          <div className="delete-btn">
            <Link
              to={{
                pathname: `/cart`,
              }}
            >
              <Button
                variant="light"
                className="btn-danger"
                onClick={() => {
                  const docToDelete = doc(db, "Cart", id);
                  deleteDoc(docToDelete);
                }}
              >
                <text>Delete </text>
                <img src={Delete} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
