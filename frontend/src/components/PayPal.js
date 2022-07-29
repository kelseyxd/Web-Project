import React, { useEffect, useRef } from "react";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import CartItem from "./CartItem";

function Paypal(props) {
  const paypal = useRef();
  const { currentUser } = useAuth();
  const history = useHistory();
  const orderRef = collection(db, "Order");
  const orderDetailsRef = collection(db, "Order Details");

  //console.log(props.item);

  useEffect(() => {
    // default implementation for every paypal implementation
    // window is the DOM
    // object is between 2 curly braces
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                amount: {
                  currency_code: "SGD",
                  value: props.finalprice,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          // console.log(order);

          // console.log(order.create_time);
          // console.log(order.id);
          // console.log("amount: $", order.purchase_units[0].amount.value);

          addDoc(orderDetailsRef, {
            Date: order.create_time,
            OrderID: order.id,
            Price: order.purchase_units[0].amount.value,
            email: currentUser.email,
          });

          {
            console.log(props.item);
            //props.item is passed frm Cart.js as cartArray to payment.js as item bfr passing it to paypal.js as props.item
            props.item.map((orderItem, key) => {
              addDoc(orderRef, {
                name: orderItem.name,
                price: orderItem.price,
                image: orderItem.image,
                quantity: orderItem.quantity,
                email: currentUser.email,
                orderID: order.id,
              });
            });
          }
          history.push({
            pathname: "/confirmation",
            state: {
              // location state
              orderID: order.id,
            },
          });
        },

        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);
  return (
    <div>
      {/* use ref to get button from paypal script in html */}
      <div ref={paypal}></div>
    </div>
  );
}

export default Paypal;
