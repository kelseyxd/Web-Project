import React from "react";
import TickImage from "../../assets/tick.jpeg";

function Confirmation() {
  return (
    <div>
      <h1>Your Order has been received</h1>
      <img src={TickImage} width="60px" />
      <p>Thank you for your purchase!</p>
      <p>Your order ID is: XXX</p>
      <h4>Please Self Collect from our store</h4>
      <button>Continue Shopping</button>
    </div>
  );
}

export default Confirmation;
