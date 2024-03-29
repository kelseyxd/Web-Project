import React from "react";
// The first letter of ALL the function names must be CAPITALISED!!
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
import OrderDisplay from "./components/pages/OrderDisplay";

import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Confirmation from "./components/pages/Confirmation";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Navbar />
        </AuthProvider>
        <Switch>
          <AuthProvider>
            <Route path="/" exact component={Home} />
            <Route path="/cart" component={Cart} />
            <Route path="/orders" component={Orders} />
            <Route path="/menu" component={Menu} />
            <Route path="/sign-up" component={Signup} />
            <Route path="/sign-in" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/item" component={Item} />
            <Route path="/OrderDisplay" component={OrderDisplay} />
            <Route path="/edit" component={EditItem} />
            <Route path="/payment" component={Payment} />
            <Route path="/confirmation" component={Confirmation} />
          </AuthProvider>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

//since nav bar uses the logout function in the authprovider function in AuthContext.js, we must wrap Navbar tag in authprovider tag
