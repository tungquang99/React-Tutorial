import React, { Component } from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./Contants/PrivateRoute";
import Contact from "./Page/Contact";
import Download from "./Page/Download";
import Feature from "./Page/Feature";
import Home from "./Page/Home";

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />

        <Route path="/download" component={Download} />
        
        <PrivateRoute path="/feature" component={Feature} />

        <PrivateRoute path="/contact" component={Contact} />

      </div>
    );
  }
}
