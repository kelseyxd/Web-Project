import React, { useState } from "react";
// import "../../App.css";
import styles from "./Item.module.css";
import Desserts from "../../data.json";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";
import { Alert } from "react-bootstrap";

//global, so tat when u go to another page and add the item it will still be stored in this array
// not sure.
let myCart = [];

export default function Item() {
  const [quantity, setQuantity] = useState(0);

  const location = useLocation();
  const { name, image, price } = location.state;

  const { currentUser } = useAuth();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const cartRef = collection(db, "Cart");

  const addToCart = async () => {
    setError("");
    setSuccess("");

    if (!currentUser) {
      setError("Please sign in first!");
      return;
    } else {
      await addDoc(
        cartRef,
        {
          name: name,
          image: image,
          price: price,
          quantity: quantity,
          email: currentUser.email,
        },
        setSuccess("Successfully added to Favourites!")
      );
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerCol1}>
        <img src={image} className={styles.imgStyle} />
      </div>
      <div className={styles.containerCol2}>
        <h1 className={styles.itemName}>{name}</h1>
        <p className={styles.itemPrice}>${price}</p>
        <div className={styles.addToCartBtn}>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="danger">{success}</Alert>}
          <Button
            variant="light"
            style={{ marginRight: "2%", textAlign: "center", width: "32%" }}
            onClick={() => setQuantity(quantity - 1)}
          >
            -
          </Button>
          <Button variant="light" style={{ textAlign: "center", width: "32%" }}>
            {quantity}
          </Button>
          <Button
            variant="light"
            style={{ marginLeft: "2%", textAlign: "center", width: "32%" }}
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </Button>
          <br />
          <br />

          {currentUser ? (
            <>
              <Link
                to={{
                  pathname: `/cart`,
                }}
              >
                <Button
                  variant="light"
                  style={{ width: "100%" }}
                  onClick={addToCart}
                >
                  Add to Cart
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Button
                variant="light"
                style={{ width: "100%" }}
                onClick={addToCart}
              >
                Add to Cart
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
