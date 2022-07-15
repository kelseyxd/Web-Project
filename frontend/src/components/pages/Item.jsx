import React from "react";
import "../../App.css";
import Desserts from "../../data.json";
import { useLocation } from "react-router-dom";

export default function Item() {
  const location = useLocation();
  const { name, image, price } = location.state;
  return (
    <div>
      <img src={image} />
      <h1>{name}</h1>
      <p>{price}</p>
    </div>
  );
}
