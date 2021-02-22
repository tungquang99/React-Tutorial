import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import { getToken } from "./Contants/Common";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Login from "./Components/Login/Login";

function App() {
  const [sidebar, setSidebar] = useState(false);

  function collapseSidebar() {
    setSidebar(sidebar === false ? true : false);
  }

  return getToken() ? (
    <Router>
      <Header collapseSidebar={() => collapseSidebar()} />
      <Sidebar check={sidebar} />
      <main className={`l-main ${sidebar === true ? "expand" : ""}`}>
        <Routes />
      </main>
    </Router>
  ) : (
    <Login />
  );
}

export default App;
