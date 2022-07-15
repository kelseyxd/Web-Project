import React, { useState } from "react";
import "../../App.css";
import Desserts from "../../data.json";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

let myCart = [];

export default function Item() {
  const [quantity, setQuantity] = useState(0);

  const location = useLocation();
  const { name, image, price } = location.state;

  const addToCart = () => {
    if (quantity > 0 && quantity < 20) {
      myCart.push({
        name: name,
        image: image,
        price: price,
        quantity: quantity,
      });
      localStorage.setItem("myCart", JSON.stringify(myCart));
    }
  };
  return (
    <Container style={{ margin: "2%" }}>
      <Row>
        <Col>
          <img src={image} width="500" height="400" />
        </Col>
        <Col>
          <h1>{name}</h1>
          <p>{price}</p>
          <Row style={{ width: "20%", justifyItems: "" }}>
            <Button
              variant="light"
              style={{ marginRight: "2.5%", textAlign: "center" }}
              onClick={() => setQuantity(quantity - 1)}
            >
              -
            </Button>
            <Button variant="light" style={{ textAlign: "center" }}>
              {quantity}
            </Button>
            <Button
              variant="light"
              style={{ marginLeft: "2.5%", textAlign: "center" }}
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </Button>
          </Row>
          <Link
            to={{
              pathname: `/cart`,
            }}
          >
            <Button
              style={{ marginTop: "1%", width: "20%" }}
              onClick={addToCart}
            >
              Add to Cart
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
