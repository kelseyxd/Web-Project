import React from "react";
import Paypal from "../PayPal";
import "../../App.css";
import { useLocation } from "react-router-dom";

function Payment() {
  const location = useLocation();
  const { finalprice } = location.state;
  return (
    <div className="payment">
      <div className="payment-container">
        <div className="payment-total">
          <text>Total: ${finalprice}</text>
        </div>
        <Paypal className="paypal" />
      </div>
    </div>
  );
}

export default Payment;
