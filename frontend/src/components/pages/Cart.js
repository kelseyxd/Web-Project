import React from "react";
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
          {cartFromLocalStorage.map((cartItem, key) => {
            return (
              <CartItem
                key={key}
                image={cartItem.image}
                name={cartItem.name}
                price={cartItem.price}
                quantity={cartItem.quantity}
              />
            );
          })}
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
