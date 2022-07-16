import React, { useState } from "react";
import "../../App.css";
import Desserts from "../../data.json";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

let myCart = JSON.parse(localStorage.getItem("myCart")) || "";

export default function EditItem() {
  const location = useLocation();
  const { id, name, image, price, quantity } = location.state;
  const [quantity2, setQuantity] = useState(quantity);

  const updateCart = () => {
    if (quantity2 > 0 && quantity2 < 20) {
      myCart[id] = {
        name: name,
        image: image,
        price: price,
        quantity: quantity2,
      };
      console.log(myCart);
      localStorage.setItem("myCart", JSON.stringify(myCart));
    }
  };
  return (
    <div style={{ display: "flex", margin: "2%" }}>
      <div>
        <img src={image} width="500" height="400" />
      </div>
      <div style={{ marginLeft: "2%", width: "98%", position: "relative" }}>
        <h1 style={{ marginTop: 0, fontSize: 40 }}>{name}</h1>
        <p style={{ fontSize: 20 }}>${price}</p>
        <div style={{ bottom: 0, position: "absolute", bottom: 0, right: 0 }}>
          <Button
            variant="light"
            style={{ marginRight: "2%", textAlign: "center", width: "32%" }}
            onClick={() => setQuantity(quantity2 - 1)}
          >
            -
          </Button>
          <Button variant="light" style={{ textAlign: "center", width: "32%" }}>
            {quantity2}
          </Button>
          <Button
            variant="light"
            style={{ marginLeft: "2%", textAlign: "center", width: "32%" }}
            onClick={() => setQuantity(quantity2 + 1)}
          >
            +
          </Button>
          <br />
          <br />
          <Link
            to={{
              pathname: `/cart`,
            }}
          >
            <Button
              variant="light"
              style={{ width: "100%" }}
              onClick={updateCart}
            >
              Update Cart
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
