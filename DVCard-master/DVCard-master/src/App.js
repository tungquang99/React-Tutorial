import React, { Component } from "react";
import Header from "./Component/Header";
import Menu from "./Component/Menu";
import Footer from "./Component/Footer";
import { BrowserRouter as Router} from "react-router-dom";
import Routers from "./Router/Routers";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <Header />
          <Menu />
            <Routers />
          <Footer />
        </div>
      </Router>
    );
  }
}
