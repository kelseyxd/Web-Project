import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import Cart from "./components/pages/Cart";
import Orders from "./components/pages/Orders";
import Login from "./components/pages/Login";
import Menu from "./components/pages/Menu";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/orders" component={Orders} />
          <Route path="/sign-up" component={Login} />
          <Route path="/menu" component={Menu} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
