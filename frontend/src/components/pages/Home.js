import React from "react";
import "../../App.css";
import { useHistory } from "react-router-dom";
import Footer from "../Footer";
import ItemPurchase from "./ItemPurchasePage";

function Home() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/ItemPurchase");
  };
  return (
    <>
      <h1>Home page</h1>
      <button onClick={handleClick}>Buy</button>
    </>
  );
}

export default Home;
