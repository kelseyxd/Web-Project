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
          console.log(order);

          {
            props.item.map((orderItem, key) => {
              addDoc(orderRef, {
                name: orderItem.name,
                price: orderItem.price,
                quantity: orderItem.quantity,
                email: currentUser.email,
                orderID: order.id,
              });
            });
          }

          history.push("/confirmation");
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
