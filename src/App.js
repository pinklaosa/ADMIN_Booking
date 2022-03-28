import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Carrier from "./pages/Carrier/Carrier";
import Navbar from "./Components/Navbar/Navbar";
import Order from "./pages/Order/Order";
import User from "./pages/User/User";
import ShowCarrier from "./pages/Carrier/ShowCarrier";
import EditeCarrier from "./pages/Carrier/EditeCarrier";
import Login from "./pages/Login/Login";
import EditOrder from "./pages/Order/EditOrder";
import Setprice from "./pages/Container/Setprice";

const App = () => {
  return (
    <Router>
      <main>
        <Switch>
          <Route path="/home" exact>
            <Navbar />
            <Home />
          </Route>
          <Route path="/order" exact>
            <Navbar />
            <Order />
          </Route>
          <Route path="/carrier" exact>
            <Navbar />
            <Carrier />
          </Route>
          <Route path="/showcarrier" exact>
            <Navbar />
            <ShowCarrier />
          </Route>
          <Route path="/user" exact>
            <Navbar />
            <User />
          </Route>
          <Route path="/contact" exact>
            <Navbar />
            <Contact />
          </Route>
          <Route path="/showcarrier/:id">
            <Navbar />
            <EditeCarrier></EditeCarrier>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/order/:id">
            <EditOrder></EditOrder>
          </Route>
          <Route path={"/container"}>
          <Navbar />
            <Setprice></Setprice>
          </Route>
          <Route path="/">
            <Redirect to="/login" />
          </Route>
          
        </Switch>
      </main>
    </Router>
  );
};

export default App;
