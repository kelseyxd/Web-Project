import React, { useEffect, useState } from "react";
import "../../App.css";
import CartItem from "../CartItem";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Cart() {
  const cartFromLocalStorage = JSON.parse(localStorage.getItem("myCart"));

  if (cartFromLocalStorage) {
    return (
      <div className="cart">
        <h1 className="cartTitle">Your Cart</h1>
        <div className="cartList">
          {cartFromLocalStorage.map((cartItem, i) => {
            return (
              <div>
                <CartItem
                  key={i}
                  image={cartItem.image}
                  name={cartItem.name}
                  price={cartItem.price}
                  quantity={cartItem.quantity}
                  id={i}
                />
              </div>
            );
          })}
        </div>
        <div className="cartTotal">
          <text>
            Total : $
            {Math.round(
              (cartFromLocalStorage.reduce(
                (totalprice, item) => totalprice + item.price * item.quantity,
                0
              ) +
                Number.EPSILON) *
                100
            ) / 100}
          </text>
          <Button variant="success" className="cartConfirmBtn">
            <h4>Confirm Purchase</h4>
          </Button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="emptyCart">
        <h1 className="emptyCartTitle">No items in Cart!</h1>
        <Link
          to={{
            pathname: `/menu`,
          }}
        >
          <Button variant="link">
            <h4>Browse our menu to add some desserts</h4>
          </Button>
        </Link>
      </div>
    );
  }
}
