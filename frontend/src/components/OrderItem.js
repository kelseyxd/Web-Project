import React from "react";
import { Link } from "react-router-dom";

function OrderItem({ OrderID, Price, Date }) {
  return (
    <div>
      <Link
        to={{
          pathname: `/OrderDisplay/${OrderID}`,
          state: {
            OrderID: OrderID,
          },
        }}
      >
        <h4>Order ID: {OrderID}</h4>
      </Link>

      <p>Date : {Date}</p>
      <p>Total: ${Price}</p>
    </div>
  );
}

export default OrderItem;
