import React from "react";
import { Link } from "react-router-dom";
import "./OrderItem.css";

function OrderItem({ OrderID, Price, Date }) {
  return (
    <div className="order-item-view">
      <p>{Date}</p>
      <Link
        to={{
          pathname: `/OrderDisplay/${OrderID}`,
          state: {
            OrderID: OrderID,
          },
        }}
      >
        <p>{OrderID}</p>
      </Link>
      <p>${Price}</p>
    </div>
  );
}

export default OrderItem;
