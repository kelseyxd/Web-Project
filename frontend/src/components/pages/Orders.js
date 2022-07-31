import React, { useState } from "react";
import "../../App.css";
import "./Order.css";
import { db } from "../../firebase";
import OrderItem from "../OrderItem";
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
import { Link } from "react-router-dom";

export default function Orders() {
  const [orderDetail, setOrderDetail] = useState([]);
  const orderDetailsRef = collection(db, "Order Details");
  const { currentUser } = useAuth();

  if (currentUser) {
    //query
    let q;

    if (currentUser) {
      q = query(orderDetailsRef, where("email", "==", currentUser.email));
    } else {
      q = query(orderDetailsRef, where("email", "==", ""));
    }

    //console.log(q);
    // MUST use onSnapshot so that whatever changes u make to the database (delete, edit etc) will be reflected on the website immediately.
    //Get the doc n it will be stored in data aftwards u can use it to setCartArray
    onSnapshot(q, (data) => {
      setOrderDetail(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });

    //console.log(orderDetail);

    if (orderDetail) {
      return (
        <div className="order">
          <h1>My Orders</h1>
          <hr />
          <div className="order-view">
            <p className="order-view-title">DATE</p>
            <p className="order-view-title" style={{ marginLeft: "10%" }}>
              ORDER ID
            </p>
            <p className="order-view-title">TOTAL</p>
          </div>
          <hr />

          <div className="orderList">
            {orderDetail.map((orderItem, key) => {
              return (
                <OrderItem
                  key={key}
                  OrderID={orderItem.OrderID}
                  Price={orderItem.Price}
                  Date={orderItem.Date}
                />
              );
            })}
          </div>
        </div>
      );

      // <div>
      //   {orderDetail.map((orderItem, i) => {
      //     return (
      //       <div>
      //         <OrderItem
      //           key={i}
      //           orderID={orderItem.orderID}
      //           price={orderItem.price}
      //           date={orderItem.date}
      //         />
      //       </div>
      //     );
      //   })}
      // </div>;
    }
  } else {
    return (
      <>
        <div>
          <p>
            Please <Link to="/sign-in">Sign In</Link> to view your Order!
          </p>
        </div>
      </>
    );
  }
}
