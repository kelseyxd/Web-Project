import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import Shop from "./components/pages/Shop";
import Orders from "./components/pages/Orders";
import Login from "./components/pages/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/orders" component={Orders} />
          <Route path="/sign-up" component={Login} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
