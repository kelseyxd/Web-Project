import React, { useEffect, useState } from "react";
import "../../App.css";
import CartItem from "../CartItem";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Paypal from "../PayPal";

export default function Cart() {
  let finalprice = 0;
  let cartFromLocalStorage = JSON.parse(localStorage.getItem("myCart"));

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
                  id={cartItem.id}
                />
              </div>
            );
          })}
        </div>
        <div className="cartTotal">
          <text>
            Total : $
            {
              (finalprice =
                Math.round(
                  (cartFromLocalStorage.reduce(
                    (totalprice, item) =>
                      totalprice + item.price * item.quantity,
                    0
                  ) +
                    Number.EPSILON) *
                    100
                ) / 100)
            }
          </text>
          <Link
            to={{
              pathname: `/menu`,
            }}
          >
            <Button variant="dark" className="cartAddItemBtn">
              <h4>Add more</h4>
            </Button>
          </Link>

          <Link
            to={{
              pathname: `/payment`,
              state: {
                finalprice: finalprice,
              },
            }}
          >
            <Button variant="success" className="cartConfirmBtn">
              <h4>Confirm Purchase</h4>
            </Button>
          </Link>
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
            <h4>Browse our menu to add items to cart!</h4>
          </Button>
        </Link>
      </div>
    );
  }
}
