import React from "react";
import Header from "./Component/Header";
import TopBar from "./Component/TopBar";
import { BrowserRouter as Router} from "react-router-dom";
import Routes from "./Routes";
function App() {
  return (
    <Router>
      <div>
        <TopBar />
        <Header />
      </div>
      <Routes />
    </Router>
  );
}

export default App;
