import React from "react";
import { Link } from "react-router-dom";

function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ${price} </p>
      <Link
        to={{
          pathname: `/item/${name}`,
          state: {
            name: name,
            image: image,
            price: price,
            quantity: 0,
          },
        }}
      >
        <button> ADD TO CART </button>
      </Link>
    </div>
  );
}

export default MenuItem;
