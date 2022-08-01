import React from "react";
import { Link } from "react-router-dom";
import "./MenuItem.css";

function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem">
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <h1> {name} </h1>
      <p style={{ marginBottom: "10px" }}> ${price} </p>
      <Link
        to={{
          pathname: `/item/${name}`,
          state: {
            name: name,
            image: image,
            price: price,
          },
        }}
      >
        <button id="buttonStyle2" style={{ fontSize: "10px" }}>
          {" "}
          ADD TO CART{" "}
        </button>
      </Link>
    </div>
  );
}

export default MenuItem;
