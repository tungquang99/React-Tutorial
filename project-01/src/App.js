import React, { Component } from 'react'
import Header from './Shop/Header/Header'
import Footer from './Shop/Footer/Footer'
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Sidebar from './Shop/Sidebar/Sidebar';
import Routers from './Shop/Router/Routers';
export default class App extends Component {
  render() {
    return (
      <div>
      <Router >
        <Header />
        <div className="container">
            <div className="row">
              <Sidebar />
              <Routers />
            </div>
          </div>
        <Footer />
      </Router>
      </div>
    )
  }
}
