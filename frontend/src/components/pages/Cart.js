import React, { useEffect, useState } from "react";
import "../../App.css";
import CartItem from "../CartItem";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Paypal from "../PayPal";
import { db } from "../../firebase";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useAuth } from "../../contexts/AuthContext";

export default function Cart() {
  const [cartArray, setCartArray] = useState([]);
  const { currentUser } = useAuth();
  const cartRef = collection(db, "Cart");
  const [getId, setGetId] = useState([]);

  if (currentUser) {
    //query
    let q;
    //console.log(currentUser.email);
    if (currentUser) {
      q = query(cartRef, where("email", "==", currentUser.email));
    } else {
      q = query(cartRef, where("email", "==", ""));
    }

    //console.log(q);
    // MUST use onSnapshot so that whatever changes u make to the database (delete, edit etc) will be reflected on the website immediately.
    //Get the doc n it will be stored in data aftwards u can use it to setCartArray
    onSnapshot(q, (data) => {
      setCartArray(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });

    //console.log(cartArray);
    // useEffect(() => {
    //   const getCart = async () => {
    //     const data = await getDocs(q);
    //     //Adding another field: id to the items in the array. And reassinging the array item's id to be the document id in firebase
    //     setCartArray(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //   };

    //   getCart();
    // }, []);

    let finalprice = 0;
    // let cartFromLocalStorage = JSON.parse(localStorage.getItem("myCart"));
    //console.log(cartArray);

    if (cartArray) {
      return (
        <div className="cart">
          <h1 className="cartTitle">Cart</h1>
          <div className="cartList">
            {cartArray.map((cartItem, i) => {
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
                    (cartArray.reduce(
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
                <h4 style={{ fontSize: "20px" }}>Continue Shopping</h4>
              </Button>
            </Link>

            <Link
              to={{
                pathname: `/payment`,
                state: {
                  finalprice: finalprice,
                  item: cartArray,
                },
              }}
            >
              <Button variant="success" className="cartConfirmBtn">
                <h4 style={{ fontSize: "20px" }}>Checkout</h4>
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
  } else {
    return (
      <>
        <div className="please-sign-in">
          <p>
            Please <Link to="/sign-in">Sign In</Link> to view your cart!
          </p>
        </div>
      </>
    );
  }
}
