import React, { useState } from "react";
import "./EditItem.css";
import Desserts from "../../data.json";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase";

export default function EditItem() {
  const location = useLocation();
  const { id, name, image, price, quantity } = location.state;
  const [quantity2, setQuantity] = useState(quantity);
  const cartRef = collection(db, "Cart");

  const updateCart = () => {
    if (quantity2 > 0 && quantity2 < 20) {
      console.log(id);
      const docToupdate = doc(db, "Cart", id);
      updateDoc(docToupdate, {
        quantity: quantity2,
      });
    }
  };
  return (
    <div className="edit-item-container" style={{ margin: "2%" }}>
      <div className="edit-item-container1">
        <img src={image} className="edit-item-img" />
      </div>
      <div className="edit-item-container2">
        <h1 className="edit-item-header">{name}</h1>
        <p className="edit-item-price">${price}</p>
        <div className="edit-item-btns">
          <div className="edit-item-qty-btn">
            <Button variant="light" onClick={() => setQuantity(quantity2 - 1)}>
              -
            </Button>
            <Button variant="light">{quantity2}</Button>
            <Button variant="light" onClick={() => setQuantity(quantity2 + 1)}>
              +
            </Button>
            <br />
            <br />
          </div>
          <Link
            to={{
              pathname: `/cart`,
            }}
          >
            <Button variant="light" onClick={updateCart}>
              Update Cart
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
