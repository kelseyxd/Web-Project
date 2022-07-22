import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import Cart from "./components/pages/Cart";
import Orders from "./components/pages/Orders";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import ForgotPassword from "./components/pages/ForgotPassword";
import Menu from "./components/pages/Menu";
import Item from "./components/pages/Item";
import EditItem from "./components/pages/EditItem";
import Payment from "./components/pages/Payment";

import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Navbar />
        </AuthProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/orders" component={Orders} />
          <Route path="/menu" component={Menu} />
          <AuthProvider>
            <Route path="/sign-up" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </AuthProvider>
          <Route path="/item" component={Item} />
          <Route path="/edit" component={EditItem} />
          <Route path="/payment" component={Payment} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

//since nav bar uses the logout function in the authprovider function in AuthContext.js, we must wrap Navbar tag in authprovider tag
