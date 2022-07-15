import React, { useState } from "react";
import "../../App.css";
import Desserts from "../../data.json";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function Item() {
  const [quantity, setQuantity] = useState(0);

  const location = useLocation();
  const { name, image, price } = location.state;
  return (
    <Container style={{ margin: "2%" }}>
      <Row>
        <Col>
          <img src={image} width="500" height="400" />
        </Col>
        <Col>
          <h1>{name}</h1>
          <p>{price}</p>
          <Row>
            <Button
              variant="light"
              style={{ marginRight: "1%" }}
              onClick={() => setQuantity(quantity - 1)}
            >
              -
            </Button>
            <Button variant="light">{quantity}</Button>
            <Button
              variant="light"
              style={{ marginLeft: "1%" }}
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </Button>
          </Row>
          <Button style={{ marginTop: "1%", width: "11%" }}>Add to Cart</Button>
        </Col>
      </Row>
    </Container>
  );
}
