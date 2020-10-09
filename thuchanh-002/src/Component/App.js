import React, { Component } from "react";
import "./../css/App.css";
import "./../css/styles.css";
import Header from "./Header";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Skill from "./Skill";
import Url from "./../Router/Router";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Url />
        </div>
      </Router>
    );
  }
}

export default App;
