import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function CartItem({ image, name, price, quantity }) {
  return (
    <Container style={{ margin: "2%" }}>
      <Row>
        <Col>
          <img src={image} width="500" height="400" />
        </Col>
        <Col>
          <h1>{name}</h1>
          <p>${price}</p>
          <p>x{quantity}</p>

          <Link
            to={{
              pathname: `/cart`,
            }}
          >
            <Button style={{ marginTop: "1%", width: "20%" }}>Edit</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default CartItem;
