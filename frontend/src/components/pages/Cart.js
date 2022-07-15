import React from "react";
import "../../App.css";
import CartItem from "../CartItem";

export default function Cart() {
  const cartFromLocalStorage = JSON.parse(localStorage.getItem("myCart"));
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
}
