
import React, { Component } from 'react';
import './App.css';
import Demo from './Demo.js';
class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Hello ReactJs</h1>
          <Demo />
          <p>Làm quen với reactjs</p>
      </div>
    );
  }
}

export default App;
