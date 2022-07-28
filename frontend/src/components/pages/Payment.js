import React from "react";
import Paypal from "../PayPal";
import "../../App.css";
import { useLocation, Link } from "react-router-dom";

function Payment() {
  const location = useLocation();
  const { finalprice, item } = location.state;

  return (
    <div className="payment">
      <div className="payment-container">
        <div className="payment-total">
          <text>Total: ${finalprice}</text>
        </div>
        <Paypal finalprice={finalprice} item={item} className="paypal" />
      </div>
    </div>
  );
}

export default Payment;
