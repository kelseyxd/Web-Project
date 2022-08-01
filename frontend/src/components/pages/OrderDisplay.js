import React, { useState } from "react";
import { useLocation } from "react-router-dom";
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
import ProductItem from "../ProductItem";
import { textAlign } from "@mui/system";

export default function OrderDisplay() {
  const location = useLocation();
  const { OrderID } = location.state;
  const [product, setProduct] = useState([]);

  const orderRef = collection(db, "Order");

  let q;
  q = query(orderRef, where("orderID", "==", OrderID));

  onSnapshot(q, (data) => {
    setProduct(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  });

  //console.log(product);

  return (
    <div className="order">
      <h1 style={{ fontSize: "18px", textAlign: "left" }}>ORDER #{OrderID}</h1>
      <hr />
      <div className="order-view">
        <p>PRODUCTS</p>
        <p>NAME</p>
        <p style={{ marginRight: "-150px" }}>QTY</p>
        <p>UNIT PRICE</p>
      </div>
      <hr />
      <div className="orderList">
        {product.map((productItem, key) => {
          return (
            <ProductItem
              key={key}
              orderID={productItem.OrderID}
              image={productItem.image}
              name={productItem.name}
              price={productItem.price}
              quantity={productItem.quantity}
            />
          );
        })}
      </div>
    </div>
  );
}
