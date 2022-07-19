import React from "react";
import "../../App.css";
import { useHistory, Link } from "react-router-dom";
import Footer from "../Footer";
import BannerImage from "../../assets/pizza.jpg";
import "./Home.css";

function Home() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/ItemPurchase");
  };
  return (
    <>
      <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
          <h1> PizzaChef </h1>
          <p> PIZZA TO FIT ANY TASTE</p>
          <Link to="/menu">
            <button> ORDER NOW </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
