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

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/order" exact>
            <Order />
          </Route>
          <Route path="/carrier" exact>
            <Carrier />
          </Route>
          <Route path="/showcarrier" exact>
            <ShowCarrier />
          </Route>
          <Route path="/user" exact>
            <User />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/showcarrier/:id">
            <EditeCarrier></EditeCarrier>
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
