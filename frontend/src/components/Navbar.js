import React, { useState, useEffect } from "react";
import { Button2 } from "./Button2";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../contexts/AuthContext";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const { history } = useHistory();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  async function handleLogout() {
    try {
      await logout();
      closeMobileMenu();
      history.push("/login");
    } catch {}
  }

  // async function handleLogout() {
  //   setError("");

  //   try {
  //     await logout();
  //     history.push("/login");
  //   } catch {
  //     setError("Failed to log out");
  //   }
  // }

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
              Shoffíe
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
            {currentUser ? (
              <li>
                <Link
                  to="/"
                  className="nav-links-mobile"
                  onClick={handleLogout}
                >
                  Log Out
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  to="/sign-in"
                  className="nav-links-mobile"
                  onClick={closeMobileMenu}
                >
                  Log In
                </Link>
              </li>
            )}
          </ul>
          <div className="navBarButton">
            {button ? (
              currentUser ? (
                <Button2 buttonStyle="btn--login" onClick={handleLogout}>
                  Log Out
                </Button2>
              ) : (
                <Button2 buttonStyle="btn--login">Log In</Button2>
              )
            ) : (
              ""
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
