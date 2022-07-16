import React, { useState, useEffect } from "react";
import { Button2 } from "./Button2";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <text style={{ fontFamily: "Times New Roman" }}>
              DessertBar
              <i class="fab fa-typo3" />
            </text>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/menu" className="nav-links" onClick={closeMobileMenu}>
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-links" onClick={closeMobileMenu}>
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/orders"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Orders
              </Link>
            </li>
            <li>
              <Link
                to="/sign-in"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign in
              </Link>
            </li>
          </ul>
          {button && <Button2 buttonStyle="btn--medium">SIGN IN</Button2>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
