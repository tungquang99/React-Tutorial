import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../Component/About";
import Experience from "../Component/Experience";
import Education from "../Component/Education";
import Skill from "../Component/Skill";
import Contact from "../Component/Contact";
export default class Url extends Component {
  render() {
    return (
        <div>
          <Route exact path="/about" component={About} />

          <Route path="/experience" component={Experience} />

          <Route path="/education" component={Education} />

          <Route path="/skills" component={Skill} />
          
          <Route path="/contact" component={Contact} />
        </div>
    );
  }
}
