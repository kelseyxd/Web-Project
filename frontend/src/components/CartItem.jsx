import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Delete from "../delete.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

function CartItem({ image, name, price, quantity, id }) {
  // let myCart = JSON.parse(localStorage.getItem("myCart")) || "";
  return (
    <div className="cartItem">
      <div>
        <img src={image} width="300" height="300" />
      </div>
      <div className="cartItemInfo">
        <h1>{name}</h1>
        <p>${price}</p>
        {/* <p>{id}</p> */}
        <div className="cartItemQuantity">
          <text>Quantity: </text>
          <Button variant="light">{quantity}</Button>
        </div>
        <div className="edit-btn">
          <Link
            to={{
              pathname: `/edit/${id}`,
              state: {
                name: name,
                image: image,
                price: price,
                quantity: quantity,
                id: id,
              },
            }}
          >
            <Button variant="light">Edit</Button>
          </Link>
        </div>
        <div className="delete-btn">
          <Link
            to={{
              pathname: `/cart`,
            }}
          >
            <Button
              variant="light"
              className="btn-danger"
              onClick={() => {
                // const index = myCart.findIndex((object) => {
                //   return object.id === id;
                // });
                // if (index > -1) {
                //   //remove the item frm array
                //   myCart.splice(index, 1);
                // }
                // if (myCart.length === 0) {
                //   //removes the whole cart frm local storage
                //   localStorage.removeItem("myCart");
                // } else {
                //   //push the whole cart back into local sotagre
                //   localStorage.setItem("myCart", JSON.stringify(myCart));
                // }
                const docToDelete = doc(db, "Cart", id);
                deleteDoc(docToDelete);
                // window.location.reload();
              }}
            >
              <text>Delete </text>
              <img src={Delete} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
