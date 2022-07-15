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
      <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
          <h1> Pedro's Pizzeria </h1>
          <p> PIZZA TO FIT ANY TASTE</p>
        </div>
      </div>
    </>
  );
}

export default Home;
