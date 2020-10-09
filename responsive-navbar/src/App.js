import React, { Component } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import {BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Header />
        <Section />
      </div>
      </Router>
    );
  }
}

export default App;
