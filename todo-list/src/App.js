import React, { Component } from "react";
import { DataProvider } from "./components/DataProvider";
import Footer from "./components/Footer";
import FormInput from "./components/FormInput";
import List from "./components/List";

class App extends Component {
  render() {
    return (
      <DataProvider>
        <div className="App">
          <h1>To Do List</h1>
          <FormInput />
          <List />
          <Footer />
        </div>
      </DataProvider>
    );
  }
}

export default App;
