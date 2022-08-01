import React from "react";
import "../../App.css";
import { useHistory, Link } from "react-router-dom";
import Footer from "../Footer";
import BannerImage from "../../assets/home.jpeg";
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
          <h1> Shoffíe </h1>
          {/* <p>Constantly Meeting All Your Needs</p> */}
          <Link to="/menu">
            <button id="buttonStyle"> SHOP NOW </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
