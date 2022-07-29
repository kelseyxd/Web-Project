import React, { useEffect, useState } from "react";
import TickImage from "../../assets/tick.jpeg";
import {useLocation} from "react-router-dom";

function Confirmation() {

  const location = useLocation();

  //extracting the orderID passed in frm paypal
  console.log(location.state.orderID)  // for location state

  return (
    <div>
      <h1>Your Order has been received</h1>
      <img src={TickImage} width="60px" />
      <p>Thank you for your purchase!</p>
      <p>Your order ID is: {location.state.orderID}</p>
      <h4>Please Self Collect from our store</h4>
      <button>Continue Shopping</button>
    </div>
  );
}

export default Confirmation;
