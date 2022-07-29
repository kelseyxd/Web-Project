import React, { useState } from "react";
import "../../App.css";
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

export default function Login() {
  const [order, setOrder] = useState([]);
  const [orderID, setOrderID] = useState("");
  const { currentUser } = useAuth();
  const orderRef = collection(db, "Order");

  let q;
  q = query(orderRef, where("email", "==", currentUser.email));
  //console.log(q)

  onSnapshot(q, (data) => {
    setOrder(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  });

  console.log(order);
  console.log(order[0].orderID);
  // setOrderID(order[0].orderID)
  // console.log(orderID)

  return <h1 className="login">ORDERS</h1>;
}
