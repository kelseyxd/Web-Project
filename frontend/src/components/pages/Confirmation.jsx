import React, { useEffect, useState } from "react";
import TickImage from "../../assets/tick.jpeg";
import { useLocation, Link } from "react-router-dom";
import "./Confirmation.css";

function Confirmation() {
  const location = useLocation();

  //extracting the orderID passed in frm paypal
  //console.log(location.state.orderID)  // for location state

  return (
    <div style={{ textAlign: "center", margin: "2%" }}>
      <h1>Your Order has been received</h1>
      <img src={TickImage} width="60px" />
      <p className="sentence">Thank you for your purchase!</p>
      <p>Order ID: {location.state.orderID}</p>
      <h4 className="collection">Please Self Collect from our store</h4>
      <Link to={"/menu"}>
      <button className="cfmBtn" >Continue Shopping</button>
      </Link>
    </div>
  );
}

export default Confirmation;
